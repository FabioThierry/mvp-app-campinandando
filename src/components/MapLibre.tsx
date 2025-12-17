import { Map, Marker, NavigationControl } from "@vis.gl/react-maplibre";
import type { Marker as MarkerType } from "../types.d.ts";
import { MapPin } from "lucide-react";

type MapLibreProps = {
  markers?: MarkerType[];
};

export default function MapLibre({ markers }: MapLibreProps) {
  // Use the first marker's location as the initial view, or default if no markers
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
    >
      {markers?.map((marker, index) => (
        <Marker
          key={`${marker.loc.lat}-${marker.loc.lon}-${index}`}
          longitude={marker.loc.lon}
          latitude={marker.loc.lat}
          anchor="bottom"
        >
          <div
            className="text-xl font-bold"
            style={{ color: "red", fontSize: "24px" }}
          >
            <MapPin />
          </div>
          <div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap z-10"
            style={{ transform: "translateX(-50%) translateY(-100%)" }}
          >
            {marker.title}
          </div>
        </Marker>
      ))}
      <NavigationControl showCompass={false} showZoom={true} />
    </Map>
  );
}
