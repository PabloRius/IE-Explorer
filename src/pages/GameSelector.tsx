import { getImageUrl } from "@/config";
import { useGame } from "@/hooks/useGame";
import { DefaultLayout } from "@/layouts/Default";
import { Game } from "@database.types";
import { useNavigate } from "react-router";

const games: Record<string, Game> = {
  IE: Game.IE,
  IE2: Game.IE2,
  IE3: Game.IE3,
  IEGO: Game.IEGO,
  IEGOCS: Game.IEGOCS,
  IEGOGA: Game.IEGOGA,
  IEHVR: Game.IEHVR,
};

export function GameSelector() {
  const { setSelectedGame } = useGame();
  const navigate = useNavigate();

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);

    navigate("/");
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-4xl font-bold mb-8">Select a Game</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(games).map((gameKey) => {
            return (
              <div
                key={gameKey}
                onClick={() => handleGameSelect(games[gameKey])}
                className="transition text-lg font-bold flex flex-col items-center cursor-pointer hover:scale-[110%]"
              >
                <img
                  className="no-pix"
                  src={getImageUrl(`navs/${gameKey}.png`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}
