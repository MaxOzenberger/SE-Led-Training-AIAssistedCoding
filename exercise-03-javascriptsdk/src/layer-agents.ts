import type Portal from "@arcgis/core/portal/Portal.js";
import type WebMap from "@arcgis/core/WebMap.js";
import { LLMAgent } from "@arcgis/ai-components/agent-utils/LLMAgent.js";
import { FunctionTool } from "@arcgis/ai-components/agent-utils/tools/FunctionTool.js";
import { createHumanInTheLoopToolMiddleware } from "@arcgis/ai-components/agent-utils/middlewares/humanInTheLoop.js";
import { z } from "zod";
import { addSessionLayer, queryLivingAtlasLayers, queryOrganizationLayers, type SessionLayerCandidate } from "./arcgis";

interface AgentOptions { portal: Portal; source: "organization" | "living-atlas"; getWebMap: () => WebMap | null; onLayerAdded: (title: string, type: string) => void }
const searchSchema = z.object({ query: z.string().min(2).describe("A concise layer topic or title to search for.") });
const addSchema = z.object({ itemId: z.string().min(1).describe("The selected ArcGIS item ID.") });
const results = (items: SessionLayerCandidate[]) => items.length ? items.map((item) => `${item.title} | ${item.type} | owner: ${item.owner} | itemId: ${item.id} | ${item.snippet}`).join("\n") : "No supported 2D layer items matched that search.";

export function createLayerAgent(options: AgentOptions) {
  const label = options.source === "organization" ? "the signed-in organization" : "ArcGIS Living Atlas";
  const searchTool = new FunctionTool<{ query: string }, string>({ name: `${options.source}LayerSearch`, description: `Search ${label} for up to five supported 2D layer items. Use this before proposing a layer to add.`, inputSchema: searchSchema, resultMode: "terminal", execute: async ({ query }) => results(options.source === "organization" ? await queryOrganizationLayers(options.portal, query) : await queryLivingAtlasLayers(options.portal, query)) });
  const addTool = new FunctionTool<{ itemId: string }, string>({
    name: `${options.source}LayerAdd`, description: `Add one selected supported 2D layer from ${label} to the current map as a reversible session-only layer.`, inputSchema: addSchema, resultMode: "terminal",
    middlewares: [createHumanInTheLoopToolMiddleware({ interrupt: ({ args }) => ({ message: `Add this session-only layer? Item ID: ${String((args as { itemId?: string }).itemId ?? "unknown")}. The web map will not be saved.`, type: "confirmation" }) })],
    execute: async ({ itemId }) => { const map = options.getWebMap(); if (!map) return "No map is currently selected."; const layer = await addSessionLayer(map, itemId); options.onLayerAdded(layer.title, layer.type); return `${layer.title} (${layer.type}) is visible for this session. It is not saved and may not be available to built-in data exploration.`; },
  });
  return new LLMAgent({ name: options.source === "organization" ? "Organization Layer Agent" : "Living Atlas Layer Agent", description: `Use this agent when a user asks to find and add a layer from ${label}. It searches supported 2D layer items and requires confirmation before adding one.`, prompt: `You help users add layers from ${label}. Search before adding, present matches with title, type, owner, and item ID, then call the add tool only after the user identifies an item. Never say a session layer is saved or fully indexed for built-in data exploration.`, modelTier: "fast", tools: [searchTool, addTool] });
}