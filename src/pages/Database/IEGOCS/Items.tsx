import { Route, Routes } from "react-router";
import {
  consumables,
  key_items,
  palpack_items,
  photos,
  topics,
} from "@/database";

import { DatabaseView } from "@/components/DatabaseView";
import { TextNav } from "@components/navs/TextNav";

export function ItemsRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TextNav
            tables={{
              consumables: "Consumables",
              key_items: "Key Items",
              palpack_items: "PalPack Items",
              photos: "Photos",
              topics: "Topics",
            }}
          />
        }
      />
      <Route
        path="consumables"
        element={<DatabaseView title="Consumables" table={consumables} />}
      />
      <Route
        path="key_items"
        element={<DatabaseView title="Key Items" table={key_items} />}
      />
      <Route
        path="palpack_items"
        element={<DatabaseView title="PalPack Items" table={palpack_items} />}
      />
      <Route
        path="photos"
        element={<DatabaseView title="Photos" table={photos} />}
      />
      <Route
        path="topics"
        element={<DatabaseView title="Topics" table={topics} />}
      />
    </Routes>
  );
}
