import { Chest, Game } from "@database.types";
import { boots } from "./equipment";
import { key_items } from "./key_items";
import { moves } from "./moves";

export const chests: Record<number, Chest> = {
  0: new Chest(
    0,
    boots[38],
    Game.IEGOCS,
    "Starter route, after Reserve Raimon"
  ),
  1: new Chest(
    1,
    key_items[3],
    Game.IEGOCS,
    "Starter route, end of upper route"
  ),
  2: new Chest(2, boots[37], Game.IEGOCS, "HolyRoad Parking"),
  3: new Chest(3, boots[63], Game.IEGOCS, "HolyRoad Hallway"),
  4: new Chest(4, moves[223], Game.IEGOCS, "PresentInazuma/RiversideNorth"),
};
