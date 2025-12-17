import { useState } from "react";
import RoteiroCard from "@/components/RoteiroCard";
import { caminhadas } from "@/lib/caminhadas";

export default function CaminhadasPage() {
  return (
    <div className="bg-background p-4 pb-6 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mt-6 mb-2">
          Roteiros de Campina Grande
        </h1>
        <p className="text-muted-foreground">
          Escolha um dos nossos roteiros cuidadosamente planejados para conhecer
          a cidade
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {caminhadas.map((caminhada, index) => (
            <RoteiroCard key={index} roteiro={caminhada} />
          ))}
        </div>
      </main>
    </div>
  );
}
