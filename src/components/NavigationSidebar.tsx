import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { BadgeInfo, Map, Home, Mountain } from "lucide-react";

interface Roteiro {
  titulo: string;
  descricao: string;
  slug: string;
  imagem: string;
}

// Array de roteiros mockados para Campina Grande - eventualmente virá de uma API ou store
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
      "https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2017/12/500x300/CATEDRAL-DE-NOSSA-SENHORA-DA-CONCEI%C3%87%C3%83O-7.webp?fallback=https%3A%2F%2Fcdn.jornaldaparaiba.com.br%2Fwp-content%2Fuploads%2F2017%2F12%2FCATEDRAL-DE-NOSSA-SENHORA-DA-CONCEI%25C3%2587%25C3%2583O.jpg%3Fxid%3D544363&xid=544363",
  },
  {
    titulo: "Roteiro Cultural",
    descricao:
      "Explore museus, centros culturais e espaços artísticos da cidade.",
    slug: "roteiro-cultural",
    imagem:
      "https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2023/10/piramidepp.jpg?xid=644354",
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
    descricao: "Explore o maior parque de eventos da Paraíba e suas atrações.",
    slug: "roteiro-parque-do-povo",
    imagem:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    titulo: "Roteiro Ecoturismo",
    descricao: "Trilhas ecológicas e áreas verdes ao redor de Campina Grande.",
    slug: "roteiro-ecoturismo",
    imagem:
      "https://images.unsplash.com/photo-1469474968028-5623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    titulo: "Roteiro Artesanato Local",
    descricao: "Descubra os pontos de venda de artesanato típico da região.",
    slug: "roteiro-artesanato-local",
    imagem:
      "https://images.unsplash.com/photo-157952363821-66ae7ae386d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export function NavigationSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col items-center gap-2 p-2">
              <Link to="/" className="flex items-center justify-center">
                <Mountain className="size-6" />
              </Link>
              <div className="pt-2">
                <SidebarTrigger />
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/"}>
                  <Link to="/">
                    <Home />
                    <span className="group-data-[collapsible=icon]:!hidden">
                      Início
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/mapa"}
                >
                  <Link to="/mapa">
                    <Map />
                    <span className="group-data-[collapsible=icon]:!hidden">
                      Mapa
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/sobre"}
                >
                  <Link to="/sobre">
                    <BadgeInfo />
                    <span className="group-data-[collapsible=icon]:!hidden">
                      Sobre
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:!hidden">
            Roteiros
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {roteiros.map((roteiro) => (
                <SidebarMenuItem key={roteiro.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === `/roteiro/${roteiro.slug}`}
                  >
                    <Link to={`/roteiro/${roteiro.slug}`}>
                      <Mountain />
                      <span className="group-data-[collapsible=icon]:!hidden">
                        {roteiro.titulo}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
