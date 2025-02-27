import { Route, Routes } from "react-router";
import { MainNav } from "./Nav";
import { InventoryRouter } from "./Inventory";

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<MainNav />} />
      <Route path="players/*" element={<>Players</>} />
      <Route path="inventory/*" element={<InventoryRouter />} />
      <Route path="movesandspirits/*" element={<>Moves and Spirits</>} />
      <Route path="teams" element={<>Teams</>} />
    </Routes>
  );
}
