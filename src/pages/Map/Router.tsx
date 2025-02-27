import { useGame } from "@/hooks/useGame";
import { Game } from "@database.types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { MainRouter as MainIEGOCSRouter } from "./IEGOCS/Router";

export function MapRouter() {
  const navigate = useNavigate();
  const { selectedGame } = useGame();

  useEffect(() => {
    if (!selectedGame) {
      navigate("/select-game");
    }
  }, [selectedGame, navigate]);

  if (!selectedGame) {
    return null;
  }

  switch (selectedGame) {
    case Game.IEGOCS:
      return <MainIEGOCSRouter />;

    default:
      return (
        <div className="text-center">{selectedGame} Not implemented yet</div>
      );
  }
}
