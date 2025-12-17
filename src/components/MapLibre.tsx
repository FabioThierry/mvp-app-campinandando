import { Map } from "@vis.gl/react-maplibre";

export default function MapLibre() {
  return (
    <Map
      initialViewState={{
        longitude: -35.881235,
        latitude: -7.218455,
        zoom: 14,
      }}
      // mapStyle="/styles/dark.json"
      mapStyle="https://tiles.openfreemap.org/styles/positron"
    ></Map>
  );
}
