import { GameContext } from "@/contexts/GameContext";
import { Game } from "@/types/database";
import { useState } from "react";

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [selectedGame, setSelectedGame] = useState<Game>(Game.IEGOCS);

  const changeGame = (newGame: Game) => {
    setSelectedGame(newGame);
  };

  return (
    <GameContext.Provider value={{ selectedGame, setSelectedGame: changeGame }}>
      {children}
    </GameContext.Provider>
  );
}
