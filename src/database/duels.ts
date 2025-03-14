import { Duel } from "@database.types";
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
      { player: players[7], scoutable: false },
      { player: players[7], scoutable: false },
      { player: players[7], scoutable: false },
      { player: players[7], scoutable: false },
    ],
    []
  )
);
