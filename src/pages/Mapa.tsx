import { useState } from "react";
// import { Icon } from "@iconify/react";
import Map from "../components/Map";
import MapLibre from "../components/MapLibre";

export default function MapaPage() {
  // const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col bg-background"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="grow bg-background"
        style={{ width: "100%", height: "100%" }}
      >
        <MapLibre />
      </div>
    </div>
  );
}
