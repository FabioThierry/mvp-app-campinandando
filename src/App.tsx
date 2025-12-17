import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Caminhadas from "./pages/Caminhadas";
import Home from "./pages/Home";
import RoteiroDetalhe from "./pages/RoteiroDetalhe";
import AppContainer from "./components/AppContainer";
import { NavigationSidebar } from "./components/NavigationSidebar";
import "maplibre-gl/dist/maplibre-gl.css";
import MapaPage from "./pages/Mapa";
import CaminhadaMapaPage from "./pages/CaminhadaMapa";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./components/ui/sidebar";

const AppContent = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <NavigationSidebar />
        <SidebarInset className="overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <AppContainer>
                  <Home />
                </AppContainer>
              }
            />
            <Route
              path="/caminhadas"
              element={
                <AppContainer>
                  <Caminhadas />
                </AppContainer>
              }
            />
            <Route
              path="/caminhada/:slug"
              element={
                <AppContainer>
                  <RoteiroDetalhe />
                </AppContainer>
              }
            />
            <Route path="/mapa" element={<MapaPage />} />
            <Route
              path="/caminhada/:slug/mapa"
              element={<CaminhadaMapaPage />}
            />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
