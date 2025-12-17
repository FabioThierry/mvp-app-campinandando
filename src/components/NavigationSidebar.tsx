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
} from "@/components/ui/sidebar";
import { Waypoints, Map, Home, Mountain } from "lucide-react";
import { caminhadas } from "@/lib/caminhadas";

export function NavigationSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex flex-col items-center gap-3 p-4">
              <Link
                to="/"
                className="flex items-center gap-2 group transition-transform hover:scale-105"
              >
                <Mountain className="size-8 text-sidebar-primary transition-colors" />
                <span className="font-bold text-lg text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                  Campinandando
                </span>
              </Link>
              <div className="w-full flex justify-center border-t border-sidebar-border pt-3 group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:pt-0">
                <SidebarTrigger className="hover:bg-sidebar-accent rounded-md" />
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs uppercase tracking-wider text-sidebar-foreground/70 px-2 mb-2">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/"}
                  tooltip="Início"
                  className="transition-all hover:translate-x-1"
                >
                  <Link to="/">
                    <Home className="size-5" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Início
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/caminhadas"}
                  tooltip="Caminhadas"
                  className="transition-all hover:translate-x-1"
                >
                  <Link to="/caminhadas">
                    <Waypoints className="size-5" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Caminhadas
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/mapa"}
                  tooltip="Mapa"
                  className="transition-all hover:translate-x-1"
                >
                  <Link to="/mapa">
                    <Map className="size-5" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Mapa
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs uppercase tracking-wider text-sidebar-foreground/70 px-2 mb-2">
            Roteiros
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {caminhadas.map((caminhada) => (
                <SidebarMenuItem key={caminhada.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === `/caminhada/${caminhada.slug}` ||
                      location.pathname === `/caminhada/${caminhada.slug}/mapa`
                    }
                    tooltip={caminhada.titulo}
                    className="transition-all hover:translate-x-1"
                  >
                    <Link to={`/caminhada/${caminhada.slug}`}>
                      <Mountain className="size-4" />
                      <span className="group-data-[collapsible=icon]:hidden text-sm">
                        {caminhada.titulo}
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
