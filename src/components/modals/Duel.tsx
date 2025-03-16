import { getImageUrl } from "@/config";
import { GetDBLink } from "@/utils/getDbLink";
import { Duel } from "@database.types";
import { OpenInDB } from "../OpenInDB";

export function DuelModal({ duel }: { duel: Duel }) {
  const { players, rewards } = duel;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 w-full">
      <div className="flex flex-col gap-2 flex-1 w-full md:w-2/3 h-max">
        <h2 className="text-lg font-bold mb-2 text-center">Players</h2>
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {players.map((player) => {
            const { player: playerData } = player;
            const { id, character, avatar, affinity, position } = playerData;
            const { name } = character;
            const { dbLink } = GetDBLink({ item: playerData });

            return (
              <div
                key={id}
                className="relative w-auto flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-2"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="h-16 md:h-20 aspect-square rounded-lg no-pix"
                />

                <div className="absolute top-2 left-2 flex gap-1">
                  <img
                    src={getImageUrl(`icons/${affinity}.png`)}
                    alt={affinity}
                    className="w-3 h-3 md:w-4 md:h-4"
                  />

                  <img
                    src={getImageUrl(`icons/${position}.png`)}
                    alt={position}
                    className="w-7 h-3 md:w-8 md:h-4"
                  />
                </div>

                <p className="text-center mt-1 text-xs md:text-sm font-semibold text-gray-800 text-wrap w-max">
                  {name}
                </p>
                <OpenInDB dbLink={dbLink} className="text-gray-900 text-xs" />
              </div>
            );
          })}
        </div>
      </div>

      {rewards && rewards.length > 0 && (
        <div className="flex flex-col w-full md:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center">Rewards</h2>
          <div className="flex flex-row flex-wrap gap-3 justify-center">
            {rewards.map((reward) => {
              const { id, name, avatar } = reward;
              const { dbLink } = GetDBLink({ item: reward });
              return (
                <div
                  key={id}
                  className="w-auto flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-2"
                >
                  <img
                    src={avatar}
                    alt={name}
                    className="h-16 md:h-20 aspect-square rounded-lg no-pix"
                  />
                  <p className="text-center mt-1 text-xs md:text-sm font-semibold text-gray-800 text-wrap w-max">
                    {name}
                  </p>
                  <OpenInDB dbLink={dbLink} className="text-gray-900 text-xs" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
