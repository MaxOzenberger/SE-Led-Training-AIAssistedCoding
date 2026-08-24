import IdentityManager from "@arcgis/core/identity/IdentityManager.js";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
import Layer from "@arcgis/core/layers/Layer.js";
import Portal from "@arcgis/core/portal/Portal.js";
import PortalItem from "@arcgis/core/portal/PortalItem.js";
import type WebMap from "@arcgis/core/WebMap.js";

const portalUrl = "https://www.arcgis.com";
const supportedLayerTypes = new Set(["Feature Service", "Map Service", "Image Service", "Vector Tile Service", "Tile Layer"]);

export interface CatalogItem { id: string; title: string; owner: string; snippet: string; thumbnailUrl: string | null; modified: number }
export interface SessionLayerCandidate extends CatalogItem { type: string }
export interface SignedInUser { fullName: string; username: string; thumbnailUrl: string | null }

export async function signIn(clientId: string) {
  IdentityManager.registerOAuthInfos([new OAuthInfo({ appId: clientId, popup: true, portalUrl })]);
  await IdentityManager.getCredential(`${portalUrl}/sharing`);
  const portal = new Portal({ url: portalUrl, authMode: "immediate" });
  await portal.load();
  if (!portal.user) throw new Error("ArcGIS Online did not return a named user account.");
  return { portal, user: { fullName: portal.user.fullName || portal.user.username || "ArcGIS user", username: portal.user.username || "unknown", thumbnailUrl: portal.user.thumbnailUrl || null } };
}

export function signOut() { IdentityManager.destroyCredentials(); }

export async function queryWebMaps(portal: Portal, scope: "mine" | "organization", search: string): Promise<CatalogItem[]> {
  const owner = scope === "mine" ? `owner:${portal.user?.username ?? ""}` : `orgid:${portal.id ?? ""}`;
  const response = await portal.queryItems({ query: `type:"Web Map" AND ${owner}${search.trim() ? ` AND title:${search.trim()}` : ""}`, sortField: "modified", sortOrder: "desc", num: 50 });
  return response.results.filter((item) => Boolean(item.id)).map((item) => ({ id: item.id!, title: item.title || "Untitled web map", owner: item.owner || "Unknown", snippet: item.snippet || "No map summary is available.", thumbnailUrl: item.thumbnailUrl || null, modified: typeof item.modified === "number" ? item.modified : item.modified?.getTime() ?? 0 }));
}

async function queryLayers(portal: Portal, sourceQuery: string, search: string): Promise<SessionLayerCandidate[]> {
  const response = await portal.queryItems({ query: `${sourceQuery}${search.trim() ? ` AND (${search.trim()})` : ""}`, sortField: "num-views", sortOrder: "desc", num: 30 });
  return response.results.filter((item) => Boolean(item.id) && supportedLayerTypes.has(item.type || "")).slice(0, 5).map((item) => ({ id: item.id!, title: item.title || "Untitled layer", type: item.type || "Unknown", owner: item.owner || "Unknown", snippet: item.snippet || "No layer summary is available.", thumbnailUrl: item.thumbnailUrl || null, modified: typeof item.modified === "number" ? item.modified : item.modified?.getTime() ?? 0 }));
}

export const queryOrganizationLayers = (portal: Portal, search: string) => queryLayers(portal, `orgid:${portal.id ?? ""}`, search);
export async function queryLivingAtlasLayers(portal: Portal, search: string) {
  const groups = await portal.queryGroups({ query: 'title:"Living Atlas"', num: 10 });
  const group = groups.results.find((candidate) => candidate.title?.includes("Living Atlas"));
  if (!group) throw new Error("The ArcGIS Living Atlas group could not be found.");
  return queryLayers(portal, `group:${group.id}`, search);
}

export async function addSessionLayer(webMap: WebMap, itemId: string) {
  const layer = await Layer.fromPortalItem({ portalItem: new PortalItem({ id: itemId }) });
  webMap.add(layer);
  return { title: layer.title || "Untitled layer", type: layer.type || "Unknown" };
}