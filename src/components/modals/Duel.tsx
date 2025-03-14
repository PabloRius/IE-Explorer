import { getImageUrl } from "@/config";
import { Duel, Equipment, Item } from "@database.types";

export function DuelModal({ duel }: { duel: Duel }) {
  const { players, rewards } = duel;

  return (
    <div className="flex gap-6 p-4 w-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold mb-2 text-center">Players</h2>
        <div className="flex flex-row flex-wrap gap-3 w-auto max-w-90 justify-center">
          {players.map((player, index) => {
            const { player: playerData, scoutable } = player;
            const { id, character, avatar, affinity, position } = playerData;
            const { name } = character;
            return (
              <div
                key={id}
                className="relative w-max flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-2"
              >
                <img
                  src={avatar}
                  alt={name}
                  className="h-24 aspect-square rounded-lg no-pix"
                />

                <div className="absolute top-2 left-2 flex gap-2">
                  <img
                    src={getImageUrl(`icons/${affinity}.png`)}
                    alt={affinity}
                    className="w-4 h-4"
                  />

                  <img
                    src={getImageUrl(`icons/${position}.png`)}
                    alt={position}
                    className="w-10 h-4"
                  />
                </div>

                <p className="text-center mt-1 text-sm font-semibold text-gray-800 text-wrap w-max">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-2 text-center">Rewards</h2>
        <div className="flex flex-col gap-3">
          {rewards.map((reward, index) => (
            <div key={index} className="p-2 border rounded bg-yellow-50">
              {reward instanceof Equipment ? (
                <div>
                  <h3 className="font-semibold">{reward.name} (Equipment)</h3>
                  <table className="table-auto text-sm mt-1">
                    <tbody>
                      {Object.entries(reward.modifiers).map(
                        ([modName, modValue], i) => (
                          <tr key={i}>
                            <td className="px-2 py-0.5 capitalize">
                              {modName}
                            </td>
                            <td className="px-2 py-0.5">{modValue}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="font-semibold">{(reward as Item).name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
