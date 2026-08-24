import { useEffect, useRef } from "react";
import type WebMap from "@arcgis/core/WebMap.js";
import "@arcgis/map-components/components/arcgis-map";

export default function MapCanvas({ itemId, onMap }: { itemId: string; onMap: (map: WebMap | null) => void }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = document.createElement("arcgis-map") as HTMLElement & { itemId?: string; map?: WebMap; view?: { map?: WebMap } };
    element.id = "selected-map";
    element.itemId = itemId;
    const expose = () => onMap(element.map ?? element.view?.map ?? null);
    element.addEventListener("arcgisViewReadyChange", expose);
    host.current?.append(element);
    const timer = window.setTimeout(expose, 1500);
    return () => { window.clearTimeout(timer); element.removeEventListener("arcgisViewReadyChange", expose); element.remove(); onMap(null); };
  }, [itemId, onMap]);
  return <div className="map-canvas" ref={host} />;
}