"use client";
// import { Icon } from "@iconify/react";
import MapLibre from "../components/MapLibre";

export default function MapaPage() {
  // const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col bg-background relative"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="absolute inset-0">
        <MapLibre />
      </div>
      {/* <div
        className="grow bg-background"
        style={{ width: "100%", height: "100%" }}
      >
      </div> */}
    </div>
  );
}
