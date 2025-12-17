import { useState } from "react";
import { useParams } from "react-router-dom";
import MapLibre from "../components/MapLibre";
import { caminhadas } from "../lib/caminhadas";

export default function CaminhadaMapaPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find the caminhada that matches the slug
  const caminhada = caminhadas.find((c) => c.slug === slug);

  // Use the markers from the specific caminhada, fallback to empty array if not found
  const markers = caminhada?.markers || [];

  return (
    <div
      className="w-full h-screen flex flex-col bg-background"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        className="grow bg-background"
        style={{ width: "100%", height: "100%" }}
      >
        <MapLibre markers={markers} />
      </div>
    </div>
  );
}
