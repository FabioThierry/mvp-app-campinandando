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

import { caminhadas } from "@/lib/caminhadas";

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
                    <span className="group-data-[collapsible=icon]:hidden!">
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
                    <span className="group-data-[collapsible=icon]:hidden!">
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
                    <span className="group-data-[collapsible=icon]:hidden!">
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
              {caminhadas.map((caminhada) => (
                <SidebarMenuItem key={caminhada.slug}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === `/caminhada/${caminhada.slug}`
                    }
                  >
                    <Link to={`/caminhada/${caminhada.slug}`}>
                      <Mountain />
                      <span className="group-data-[collapsible=icon]:!hidden">
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
