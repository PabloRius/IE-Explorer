import { Game, HTO, PalPackItem } from "@database.types";

export const palpack_items: Record<number, PalPackItem> = {};

function addPalPackItem(item: PalPackItem) {
  const { id } = item;
  if (id in palpack_items) throw new Error("Duplicated PalPack Item ID");
  palpack_items[id] = item;
}

addPalPackItem(
  new PalPackItem(
    1,
    "Raimon Reserves song",
    Game.IEGOCS,
    new HTO(
      "Defeat Raimon Reserves on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    )
  )
);

addPalPackItem(
  new PalPackItem(
    2,
    "Elite member's card",
    Game.IEGOCS,
    new HTO(
      "Defeat All Saints' Allstars on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    )
  )
);

addPalPackItem(
  new PalPackItem(
    11,
    "Mysterious menu",
    Game.IEGOCS,
    new HTO(
      "Defeat Light Fantastic in the riverside north",
      "PresentInazuma/RiversideNorth"
    )
  )
);

addPalPackItem(
  new PalPackItem(
    12,
    "Skull badge",
    Game.IEGOCS,
    new HTO(
      "Defeat Point Takens in the riverside pitch",
      "PresentInazuma/RiversidePitch"
    )
  )
);

addPalPackItem(
  new PalPackItem(
    20,
    "Strange wishlist",
    Game.IEGOCS,
    new HTO(
      "Defeat Protocol Omega on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    )
  )
);
