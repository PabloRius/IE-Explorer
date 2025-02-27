import { common_hto } from ".";
import { Game, HTO, Kit } from "@database.types";

export const kits: Record<number, Kit> = {
  0: new Kit(0, "Raimon kit", Game.IEGOCS, [common_hto.Chapter1]),
  17: new Kit(17, "Reserve kit", Game.IEGOCS, [
    new HTO(
      "Defeat Raimon Reserves on the Starter Route (upper route) (once)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  42: new Kit(42, "Sherwind kit", Game.IEGOCS, [common_hto.Chapter1]),
};
