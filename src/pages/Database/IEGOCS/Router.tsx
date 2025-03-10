import { PlayersGallery } from "@/components/PlayersGallery";
import { players } from "@/database";
import { Game } from "@/types/database";
import { Route, Routes } from "react-router";
import { InventoryRouter } from "./Inventory";
import { MainNav } from "./Nav";

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<MainNav />} />
      <Route
        path="players/*"
        element={
          <PlayersGallery
            players={Object.values(players).filter((player) => {
              return player.game === Game.IEGOCS;
            })}
          />
        }
      />
      <Route path="inventory/*" element={<InventoryRouter />} />
      <Route path="movesandspirits/*" element={<>Moves and Spirits</>} />
      <Route path="teams" element={<>Teams</>} />
    </Routes>
  );
}
