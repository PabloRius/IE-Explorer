import { Game, Match } from "@database.types";
import { emblems, kits, palpack_items, moves } from ".";

export const matches: Record<number, Match> = {
  0: new Match(0, "Raimon Reserves", Game.IEGOCS, 17, [
    emblems[17],
    kits[17],
    palpack_items[1],
  ]),
  1: new Match(1, "All Saints' Allstars", Game.IEGOCS, 113, [
    emblems[113],
    palpack_items[2],
    moves[222],
  ]),
  2: new Match(2, "Protocol Omega", Game.IEGOCS, 25, [
    emblems[25],
    palpack_items[20],
    moves[164],
  ]),
};
