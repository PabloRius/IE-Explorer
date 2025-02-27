import { PalPackItem, Game, HTO } from "@database.types";

export const palpack_items: Record<number, PalPackItem> = {
  1: new PalPackItem(1, "Raimon Reserves song", Game.IEGOCS, [
    new HTO(
      "Defeat Raimon Reserves on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  2: new PalPackItem(2, "Elite member's card", Game.IEGOCS, [
    new HTO(
      "Defeat All Saints' Allstars on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  // 6: new PalPackItem(6, "First year homework", Game.IEGOCS),
  20: new PalPackItem(20, "Strange wishlist", Game.IEGOCS, [
    new HTO(
      "Defeat Protocol Omega on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
};
