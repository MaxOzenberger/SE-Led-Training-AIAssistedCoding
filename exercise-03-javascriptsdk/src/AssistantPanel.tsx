import { useEffect, useRef } from "react";
import type Portal from "@arcgis/core/portal/Portal.js";
import type WebMap from "@arcgis/core/WebMap.js";
import "@arcgis/ai-components/components/arcgis-assistant";
import "@arcgis/ai-components/components/arcgis-assistant-agent";
import "@arcgis/ai-components/components/arcgis-assistant-data-exploration-agent";
import "@arcgis/ai-components/components/arcgis-assistant-help-agent";
import "@arcgis/ai-components/components/arcgis-assistant-navigation-agent";
import { createLayerAgent } from "./layer-agents";

export default function AssistantPanel({ portal, title, getMap, onAdded }: { portal: Portal; title: string; getMap: () => WebMap | null; onAdded: (text: string) => void }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const assistant = document.createElement("arcgis-assistant") as HTMLElement & { referenceElement?: string; heading?: string; description?: string; entryMessage?: string; suggestedPrompts?: string[]; copyEnabled?: boolean };
    assistant.referenceElement = "selected-map"; assistant.heading = "Map assistant"; assistant.description = `Explore ${title} or add a session layer.`; assistant.entryMessage = `You are exploring ${title}.`; assistant.suggestedPrompts = ["What can I ask about this map?", "Find a layer to add"]; assistant.copyEnabled = true;
    ["arcgis-assistant-navigation-agent", "arcgis-assistant-data-exploration-agent", "arcgis-assistant-help-agent"].forEach((tag) => assistant.append(document.createElement(tag)));
    (["organization", "living-atlas"] as const).forEach((source) => { const agent = document.createElement("arcgis-assistant-agent") as HTMLElement & { agent?: unknown }; agent.agent = createLayerAgent({ portal, source, getWebMap: getMap, onLayerAdded: (name, type) => onAdded(`${name} (${type}) was added for this session only.`) }).registration; assistant.append(agent); });
    host.current?.append(assistant);
    return () => assistant.remove();
  }, [portal, title, getMap, onAdded]);
  return <div className="assistant-panel" ref={host} />;
}