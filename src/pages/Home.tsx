import { Link } from "react-router-dom";
import { Mountain, Waypoints, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="flex flex-col items-center justify-center space-y-10 max-w-2xl w-full px-6">
        <div className="relative animate-in fade-in zoom-in duration-700">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
          <img
            src="/campinandando_grande.jpg"
            alt="Campinandando Logo"
            className="relative w-56 h-56 rounded-full object-cover border-4 border-primary shadow-2xl"
          />
        </div>

        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1 className="text-5xl font-bold text-foreground text-balance">
            Bem-vindo ao Campinandando
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
            Explore os melhores roteiros de caminhada pela cidade de Campina
            Grande
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            asChild
            size="lg"
            className="flex-1 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link
              to="/caminhadas"
              className="flex items-center justify-center gap-2"
            >
              <Waypoints className="size-5" />
              Ver Caminhadas
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex-1 text-lg font-semibold hover:bg-muted transition-all hover:scale-105 bg-transparent"
          >
            <Link to="/mapa" className="flex items-center justify-center gap-2">
              <Map className="size-5" />
              Ver Mapa
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-lg mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Waypoints className="size-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Roteiros Guiados
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Map className="size-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Mapas Interativos
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Mountain className="size-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Pontos Turísticos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
