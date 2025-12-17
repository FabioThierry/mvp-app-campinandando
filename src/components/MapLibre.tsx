import { Map, Marker, NavigationControl } from "@vis.gl/react-maplibre";
import type { Marker as MarkerType } from "../types.d.ts";
import { MapPin } from "lucide-react";

type MapLibreProps = {
  markers?: MarkerType[];
};

export default function MapLibre({ markers }: MapLibreProps) {
  const initialView =
    markers && markers.length > 0
      ? {
          longitude: markers[0].loc.lon,
          latitude: markers[0].loc.lat,
          zoom: 14,
        }
      : {
          longitude: -35.881235,
          latitude: -7.218455,
          zoom: 14,
        };

  return (
    <Map
      initialViewState={initialView}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      style={{ width: "100%", height: "100%" }}
    >
      {markers?.map((marker, index) => (
        <Marker
          key={`${marker.loc.lat}-${marker.loc.lon}-${index}`}
          longitude={marker.loc.lon}
          latitude={marker.loc.lat}
          anchor="bottom"
        >
          <div
            className="relative flex flex-col items-center animate-in zoom-in duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <div className="relative bg-primary text-primary-foreground rounded-full p-2 shadow-lg border-2 border-background">
                <MapPin className="size-5" />
              </div>
            </div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card text-card-foreground px-3 py-1.5 rounded-md shadow-lg border border-border text-xs font-medium whitespace-nowrap max-w-[200px] truncate backdrop-blur-sm">
              {marker.title}
            </div>
          </div>
        </Marker>
      ))}
      <NavigationControl
        showCompass={false}
        showZoom={true}
        position="top-right"
        style={{ margin: "16px" }}
      />
    </Map>
  );
}
