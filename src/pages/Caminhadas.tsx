import RoteiroCard from "@/components/RoteiroCard";
import { caminhadas } from "@/lib/caminhadas";
import { Waypoints } from "lucide-react";

export default function CaminhadasPage() {
  return (
    <div className="bg-background min-h-[calc(100vh-3.5rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
        <header className="mb-8 sm:mb-10 space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
              <Waypoints className="size-6 sm:size-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Roteiros de Campina Grande
              </h1>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-pretty max-w-3xl leading-relaxed">
            Escolha um dos nossos roteiros cuidadosamente planejados para
            conhecer os principais pontos turísticos e culturais da cidade
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {caminhadas.map((caminhada) => (
              <RoteiroCard key={caminhada.slug} roteiro={caminhada} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
