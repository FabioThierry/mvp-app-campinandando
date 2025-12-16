import { useParams } from "react-router-dom";
import Map from "../components/Map";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Roteiro {
  titulo: string;
  descricao: string;
  slug: string;
  imagem: string;
}

export default function RoteiroDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Array de roteiros mockados para obter a imagem
  const roteiros: Roteiro[] = [
    {
      titulo: "Roteiro Centro Histórico",
      descricao:
        "Conheça os principais pontos históricos do centro de Campina Grande.",
      slug: "roteiro-centro-historico",
      imagem:
        "https://paraibacultural.com.br/wp-content/uploads/2024/10/Centro-historico-de-Campina-Grande-Rua-Maciel-Pinheiro-2024-web.jpg",
    },
    {
      titulo: "Roteiro Religioso",
      descricao: "Visite as principais igrejas e templos religiosos da cidade.",
      slug: "roteiro-religioso",
      imagem:
        "https://images.unsplash.com/photo-1583276405136-859d6d5a7b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Cultural",
      descricao:
        "Explore museus, centros culturais e espaços artísticos da cidade.",
      slug: "roteiro-cultural",
      imagem:
        "https://images.unsplash.com/photo-1577830111137-1f880870f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Bairros Tradicionais",
      descricao:
        "Conheça os bairros mais tradicionais e característicos de Campina Grande.",
      slug: "roteiro-bairros-tradicionais",
      imagem:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Gastronômico",
      descricao:
        "Experimente a culinária local e saboreie pratos típicos da região.",
      slug: "roteiro-gastronomico",
      imagem:
        "https://images.unsplash.com/photo-1555396273-367ea445c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Parque do Povo",
      descricao:
        "Explore o maior parque de eventos da Paraíba e suas atrações.",
      slug: "roteiro-parque-do-povo",
      imagem:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Ecoturismo",
      descricao:
        "Trilhas ecológicas e áreas verdes ao redor de Campina Grande.",
      slug: "roteiro-ecoturismo",
      imagem:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      titulo: "Roteiro Artesanato Local",
      descricao: "Descubra os pontos de venda de artesanato típico da região.",
      slug: "roteiro-artesanato-local",
      imagem:
        "https://images.unsplash.com/photo-157952363821-66ae7ae386d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];

  const roteiro = roteiros.find((r) => r.slug === slug);
  if (!roteiro) {
    return <div>Roteiro não encontrado.</div>;
  }
  const handleClick = () => {
    navigate(`/roteiro/${roteiro.slug}/teste`);
  };

  return (
    <div className="bg-background p-4 pb-6 min-h-screen">
      <div className="mt-6">
        <Button onClick={handleClick}>Iniciar Roteiro</Button>
      </div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mt-6 mb-2">
          {roteiro ? roteiro.titulo : `Roteiro de Campina Grande: ${slug}`}
        </h1>
        <p className="text-muted-foreground">
          {roteiro ? roteiro.descricao : `Detalhes do roteiro ${slug}`}
        </p>
      </header>

      <main>
        {roteiro && roteiro.imagem && (
          <div className="mb-6">
            <img
              src={roteiro.imagem}
              alt={roteiro.titulo}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-2xl font-semibold mb-4">Mapa do Roteiro</h3>
          <div className="h-80 w-full rounded-lg overflow-hidden pb-4 mb-4">
            <Map isDark={false} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Informações do Roteiro
          </h2>
          <p>
            Este é um exemplo de página de detalhes do roteiro com slug: {slug}
          </p>
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
