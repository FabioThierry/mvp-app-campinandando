import {
  Map,
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Layer,
  Source,
} from "@vis.gl/react-maplibre";
import type { Marker as MarkerType } from "../types.d.ts";
import { MapPin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { dataLayer } from "@/lib/map-style.ts";

type MapLibreProps = {
  markers?: MarkerType[];
};

export default function MapLibre({ markers }: MapLibreProps) {
  const [allData, setAllData] = useState(null);
  useEffect(() => {
    /* global fetch */
    fetch("public/campina_grande_ufcg.geojson")
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, []);

  const data = useMemo(() => {
    return allData;
  }, [allData]);

  const initialView =
    markers && markers.length > 0
      ? {
          longitude: markers[0].loc.lon,
          latitude: markers[0].loc.lat,
          zoom: 17,
        }
      : {
          longitude: -35.881235,
          latitude: -7.218455,
          zoom: 15,
        };

  return (
    <Map
      initialViewState={initialView}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      style={{ width: "100%", height: "100%" }}
    >
      <Source type="geojson" data={data}>
        <Layer {...dataLayer} />
      </Source>
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
        showCompass={true}
        showZoom={true}
        position="top-right"
        style={{ margin: "16px" }}
      />
      <GeolocateControl position="top-right" style={{ margin: "16px" }} />
      <FullscreenControl position="top-right" style={{ margin: "16px" }} />
      <ScaleControl />
    </Map>
  );
}
