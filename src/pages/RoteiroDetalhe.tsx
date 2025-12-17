"use client";

import { useParams, useNavigate } from "react-router-dom";
import MapLibre from "../components/MapLibre";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caminhadas } from "@/lib/caminhadas";
import { MapPin, Clock, ArrowLeft, Navigation } from "lucide-react";

export default function RoteiroDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caminhada = caminhadas.find((r) => r.slug === slug);

  if (!caminhada) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-background px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Roteiro não encontrado
          </h1>
          <Button onClick={() => navigate("/caminhadas")}>
            <ArrowLeft className="size-4 mr-2" />
            Voltar para Caminhadas
          </Button>
        </div>
      </div>
    );
  }

  const handleStartRoute = () => {
    navigate(`/caminhada/${caminhada.slug}/mapa`);
  };

  return (
    <div className="bg-background min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/caminhadas")}
            className="gap-2"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Button>
          <Button
            onClick={handleStartRoute}
            size="lg"
            className="gap-2 shadow-md"
          >
            <Navigation className="size-5" />
            Iniciar Roteiro
          </Button>
        </div>

        <header className="mb-8 space-y-4">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              {caminhada.titulo}
            </h1>
            <div className="flex flex-wrap gap-2">
              {caminhada.markers && caminhada.markers.length > 0 && (
                <Badge
                  variant="secondary"
                  className="gap-1.5 text-xs sm:text-sm px-2 sm:px-3 py-1"
                >
                  <MapPin className="size-3 sm:size-3.5" />
                  {caminhada.markers.length} pontos de interesse
                </Badge>
              )}
              <Badge
                variant="outline"
                className="gap-1.5 text-xs sm:text-sm px-2 sm:px-3 py-1"
              >
                <Clock className="size-3 sm:size-3.5" />
                Duração estimada: 2-3h
              </Badge>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl">
            {caminhada.descricao}
          </p>
        </header>

        <main className="space-y-6 sm:space-y-8">
          {caminhada.imagem && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={caminhada.imagem || "/placeholder.svg"}
                alt={caminhada.titulo}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          )}

          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-border">
              <h2 className="text-xl sm:text-2xl font-bold text-card-foreground flex items-center gap-2">
                <MapPin className="size-5 sm:size-6 text-primary" />
                Mapa da Caminhada
              </h2>
            </div>
            <div className="h-80 sm:h-96 w-full">
              <MapLibre markers={caminhada.markers || []} />
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border shadow-sm p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-card-foreground">
              Informações da Caminhada
            </h2>
            <div className="space-y-4 text-card-foreground/90">
              <p className="text-base sm:text-lg leading-relaxed">
                {caminhada.titulo} oferece uma experiência única para explorar a
                cultura e história de Campina Grande.
              </p>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3">
                  O que você encontrará:
                </h3>
                <ul className="space-y-2 ml-4 sm:ml-6">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>Pontos turísticos históricos e culturais</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>Horários de funcionamento dos principais locais</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>Duração estimada do percurso completo</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Informações sobre preços e ingressos quando aplicável
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Mapa interativo com todos os pontos de interesse
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
