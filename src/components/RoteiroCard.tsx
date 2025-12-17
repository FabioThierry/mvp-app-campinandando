"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Caminhadas } from "../types";

export default function RoteiroCard({ roteiro }: { roteiro: Caminhadas }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/caminhada/${roteiro.slug}`);
  };

  return (
    <Card className="group w-full flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      {roteiro.imagem && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={roteiro.imagem || "/placeholder.svg"}
            alt={roteiro.titulo}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {roteiro.markers && roteiro.markers.length > 0 && (
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
              <MapPin className="size-3" />
              {roteiro.markers.length} pontos
            </div>
          )}
        </div>
      )}
      <CardHeader className="pb-3 flex-grow pt-5 space-y-2">
        <CardTitle className="text-lg sm:text-xl font-bold text-balance leading-tight group-hover:text-primary transition-colors">
          {roteiro.titulo}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base line-clamp-3 text-pretty leading-relaxed">
          {roteiro.descricao}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-5">
        <Button
          onClick={handleClick}
          className="w-full font-medium transition-all hover:shadow-md"
        >
          Ver Roteiro
        </Button>
      </CardContent>
    </Card>
  );
}
