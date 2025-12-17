"use client";
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
    <div className="relative w-full h-[calc(100vh-3.5rem)]">
      <MapLibre markers={markers} />
    </div>
  );
}
