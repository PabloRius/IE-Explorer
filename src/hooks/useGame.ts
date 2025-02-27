import { GameContext } from "@/contexts/GameContext";
import { useContext } from "react";

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
