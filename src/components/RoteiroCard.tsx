import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Roteiro {
  titulo: string;
  descricao: string;
  slug: string;
  imagem: string;
}

export default function RoteiroCard({ roteiro }: { roteiro: Roteiro }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/roteiro/${roteiro.slug}`);
  };

  return (
    <Card className="w-full flex flex-col h-full min-h-[280px]">
      {roteiro.imagem && (
        <div className="relative h-32 w-full">
          <img
            src={roteiro.imagem}
            alt={roteiro.titulo}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      <CardHeader className="pb-3 grow pt-4">
        <CardTitle className="text-lg sm:text-xl">{roteiro.titulo}</CardTitle>
        <CardDescription className="text-sm sm:text-base line-clamp-3 flex-grow">
          {roteiro.descricao}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button onClick={handleClick} className="w-full">
          Ver Roteiro
        </Button>
      </CardContent>
    </Card>
  );
}
