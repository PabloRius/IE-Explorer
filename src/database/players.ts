import { Game, Player } from "../types/database";
import { characters } from "./characters";

export const players: Record<number, Player> = {
  0: new Player(0, characters[1], Game.IEGOCS, {}, "kid", []),
};
