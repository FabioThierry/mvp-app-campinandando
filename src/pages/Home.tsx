import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-md w-full px-4">
        <img
          src="/campinandando_grande.jpg"
          alt="Campinandando Logo"
          className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
        />
        <Link
          to="/caminhadas"
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors w-full max-w-xs text-center shadow-md"
        >
          Ver Caminhadas
        </Link>
      </div>
    </div>
  );
}
