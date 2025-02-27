import { Game } from "@database.types";
import { createContext } from "react";

type GameContextType = {
  selectedGame: Game;
  setSelectedGame: (game: Game) => void;
};

export const GameContext = createContext<GameContextType | null>(null);
