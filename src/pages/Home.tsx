import { Link } from "react-router-dom";
import { Mountain, Waypoints, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-linear-to-br from-background via-background to-muted/30 px-4">
      <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 max-w-2xl w-full py-8">
        <div className="relative animate-in fade-in zoom-in duration-700">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
          <img
            src="/campinandando_grande.jpg"
            alt="Campinandando Logo"
            className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-primary shadow-2xl"
          />
        </div>

        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-4">
            Bem-vindo ao CampinAAndando
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Explore os melhores roteiros de caminhada pela cidade de Campina
            Grande
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            asChild
            size="lg"
            className="flex-1 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
            className="flex-1 text-base sm:text-lg font-semibold hover:bg-muted transition-all hover:scale-105 bg-transparent"
          >
            <Link to="/mapa" className="flex items-center justify-center gap-2">
              <Map className="size-5" />
              Ver Mapa
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg mt-4 sm:mt-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
          <Button
            variant="ghost"
            asChild
            className="flex flex-col items-center gap-2 text-center h-auto py-3 px-2"
          >
            <Link to="/caminhadas">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                <Waypoints className="size-5 sm:size-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Roteiros Guiados
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex flex-col items-center gap-2 text-center h-auto py-3 px-2"
          >
            <Link to="/mapa">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                <Map className="size-5 sm:size-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Mapas Interativos
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="flex flex-col items-center gap-2 text-center h-auto py-3 px-2"
          >
            <Link to="/caminhadas">
              <div className="bg-primary/10 p-2 sm:p-3 rounded-lg">
                <Mountain className="size-5 sm:size-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Pontos Turísticos
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
