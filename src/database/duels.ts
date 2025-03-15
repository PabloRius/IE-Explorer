import { Duel } from "@database.types";
import { palpack_items } from "./palpack_items";
import { players } from "./players";

export const duels: Record<number, Duel> = {};

function addDuel(duel: Duel) {
  const { id } = duel;
  if (id in duels) throw new Error("Duplicated duel ID");
  duels[id] = duel;
}

addDuel(
  new Duel(
    0,
    "The Best Friends",
    [
      { player: players[7], scoutable: false },
      { player: players[8], scoutable: false },
      { player: players[9], scoutable: false },
      { player: players[10], scoutable: false },
      { player: players[11], scoutable: false },
    ],
    []
  )
);

addDuel(
  new Duel(
    1,
    "Point Takens",
    [
      { player: players[12], scoutable: false },
      { player: players[13], scoutable: false },
      { player: players[14], scoutable: false },
      { player: players[15], scoutable: false },
      { player: players[16], scoutable: false },
    ],
    [palpack_items[12]]
  )
);

addDuel(
  new Duel(
    2,
    "Tackle Terrors",
    [
      { player: players[17], scoutable: false },
      { player: players[18], scoutable: false },
      { player: players[19], scoutable: false },
      { player: players[20], scoutable: false },
      { player: players[21], scoutable: false },
    ],
    []
  )
);
