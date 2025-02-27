import { DatabasePage } from "@/pages/Database/Main";
import { GameSelector } from "@/pages/GameSelector";
import { Home } from "@/pages/Home";
import { MapPage } from "@/pages/Map/Main";
import { TeamBuilder } from "@/pages/TeamBuilder";
import { Route, Routes } from "react-router";

export function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map/*" element={<MapPage />} />
      <Route path="/database/*" element={<DatabasePage />} />
      <Route path="/team-builder/*" element={<TeamBuilder />} />
      <Route path="/select-game" element={<GameSelector />} />
    </Routes>
  );
}
