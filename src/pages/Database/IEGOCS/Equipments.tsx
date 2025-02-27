import { Route, Routes } from "react-router";

import { boots, bracelets, gloves, pendants } from "@/database";
import { EquipmentType } from "@database.types";

import { DatabaseView } from "@/components/DatabaseView";
import { TextNav } from "@components/navs/TextNav";

export function EquipmentsRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TextNav
            tables={{
              boots: EquipmentType.boots,
              gloves: EquipmentType.gloves,
              bracelets: EquipmentType.bracelets,
              pendants: EquipmentType.pendants,
            }}
          />
        }
      />
      <Route
        path="boots"
        element={<DatabaseView title="Boots" table={boots} />}
      />
      <Route
        path="gloves"
        element={<DatabaseView title="Gloves" table={gloves} />}
      />
      <Route
        path="pendants"
        element={<DatabaseView title="Pendants" table={pendants} />}
      />
      <Route
        path="bracelets"
        element={<DatabaseView title="Bracelets" table={bracelets} />}
      />
    </Routes>
  );
}
