import { BlueShop, Game, Shop } from "@/types/database";
import { boots, bracelets, gloves, pendants } from "./equipment";

export const shops: Record<number, Shop> = {
  0: new BlueShop(Game.IEGOCS, "HolyRoadStadium/Parking", [
    boots[37],
    gloves[37],
    bracelets[1],
    pendants[0],
  ]),
};
