import { common_hto } from ".";
import { Game, HTO, KeyItem } from "@database.types";

export const key_items: Record<number, KeyItem> = {
  3: new KeyItem(3, "Small silver key", Game.IEGOCS, [
    new HTO(
      "Inside the last chest of the upper way of the Initial Route",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  8: new KeyItem(8, "Teachings of the Master", Game.IEGOCS, [
    common_hto.Chapter3,
  ]),
  18: new KeyItem(18, "T-Rex aura", Game.IEGOCS, [common_hto.Chapter1]),
};
