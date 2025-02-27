import { Route, Routes } from "react-router";
import { emblems, kits } from "@database";

import { DatabaseView } from "@components/DatabaseView";
import { ImageNav } from "@components/navs/ImageNav";
import { EquipmentsRouter } from "./Equipments";
import { ItemsRouter } from "./Items";

export function InventoryRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ImageNav
            tables={{
              items: "Items",
              equipment: "Equipments",
              kits: "Kits",
              emblems: "Emblems",
            }}
          />
        }
      />
      <Route path="items/*" element={<ItemsRouter />} />
      <Route path="equipment/*" element={<EquipmentsRouter />} />
      <Route path="kits" element={<DatabaseView title="Kits" table={kits} />} />
      <Route
        path="emblems"
        element={<DatabaseView title="Emblems" table={emblems} />}
      />
    </Routes>
  );
}
