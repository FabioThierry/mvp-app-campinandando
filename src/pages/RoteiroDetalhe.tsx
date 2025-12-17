import { useParams } from "react-router-dom";
import MapLibre from "../components/MapLibre";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { caminhadas } from "@/lib/caminhadas";

export default function RoteiroDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const caminhada = caminhadas.find((r) => r.slug === slug);
  if (!caminhada) {
    return <div>Roteiro não encontrado.</div>;
  }
  const handleClick = () => {
    navigate(`/caminhada/${caminhada.slug}/mapa`);
  };

  return (
    <div className="bg-background p-4 pb-6 min-h-screen">
      <div className="mt-6">
        <Button onClick={handleClick}>Iniciar Roteiro</Button>
      </div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mt-6 mb-2">
          {caminhada ? caminhada.titulo : `Roteiro de Campina Grande: ${slug}`}
        </h1>
        <p className="text-muted-foreground">
          {caminhada ? caminhada.descricao : `Detalhes do roteiro ${slug}`}
        </p>
      </header>

      <main>
        {caminhada && caminhada.imagem && (
          <div className="mb-6">
            <img
              src={caminhada.imagem}
              alt={caminhada.titulo}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-2xl font-semibold mb-4">Mapa da caminhada</h3>
          <div className="h-80 w-full rounded-lg overflow-hidden pb-4 mb-4">
            <MapLibre markers={caminhada?.markers || []} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Informações da caminhada
          </h2>
          <p>{caminhada.titulo}</p>
          <p>
            Aqui você encontrará informações detalhadas sobre o roteiro,
            incluindo:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Pontos turísticos</li>
            <li>Horários de funcionamento</li>
            <li>Duração estimada</li>
            <li>Preços e ingressos</li>
            <li>Mapa da região</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
