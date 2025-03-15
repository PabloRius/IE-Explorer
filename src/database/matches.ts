import { Game, Match } from "@database.types";
import { emblems, kits, moves, palpack_items } from ".";

export const matches: Record<number, Match> = {};

function addMatch(match: Match) {
  const { id } = match;
  if (id in matches) throw new Error("Duplicated route ID");
  matches[id] = match;
}

addMatch(
  new Match(0, "Raimon Reserves", Game.IEGOCS, 17, [
    emblems[17],
    kits[17],
    palpack_items[1],
  ])
);

addMatch(
  new Match(1, "All Saints' Allstars", Game.IEGOCS, 113, [
    emblems[113],
    palpack_items[2],
    moves[222],
  ])
);

addMatch(
  new Match(2, "Protocol Omega", Game.IEGOCS, 25, [
    emblems[25],
    palpack_items[20],
    moves[164],
    moves[28],
    moves[62],
  ])
);
