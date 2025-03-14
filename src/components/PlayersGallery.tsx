import { getImageUrl } from "@/config";
import { Affinity, Player, Position } from "@/types/database";
import { StarIcon, ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface Filters {
  name: string;
  affinity: Affinity | null;
  position: Position | null;
}

export function PlayersGallery({ players }: { players: Array<Player> }) {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    affinity: null,
    position: null,
  });
  const [cardSize, setCardSize] = useState<"small" | "big">("big");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setHighlightedId(id);
          setTimeout(() => {
            setHighlightedId(null);
          }, 1500);
        }, 200);
      }
    }
  }, []);

  // Toggle favorite status for a player
  const toggleFavorite = (playerId: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(playerId)) {
        newFavorites.delete(playerId);
      } else {
        newFavorites.add(playerId);
      }
      return newFavorites;
    });
  };

  // Filter players based on name, affinity, and position
  const filteredPlayers = players.filter((player) => {
    const { name } = player.character;
    const matchesName = name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesAffinity = filters.affinity
      ? player.affinity === filters.affinity
      : true;
    const matchesPosition = filters.position
      ? player.position === filters.position
      : true;
    return matchesName && matchesAffinity && matchesPosition;
  });

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-3xl text-center mb-6">Players</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-4xl">
        {/* Name Filter */}
        <input
          type="text"
          placeholder="Search by name..."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          className="p-2 border border-gray-300 rounded flex-grow"
        />

        {/* Affinity Filter */}
        <select
          value={filters.affinity || ""}
          onChange={(e) =>
            setFilters({
              ...filters,
              affinity: e.target.value as Affinity | null,
            })
          }
          className="p-2 border border-gray-300 rounded"
        >
          <option value="" className="text-black">
            All Affinities
          </option>
          {(["earth", "fire", "neutral", "wind", "wood"] as Affinity[]).map(
            (affinity) => (
              <option key={affinity} value={affinity} className="text-black">
                {affinity}
              </option>
            )
          )}
        </select>

        {/* Position Filter */}
        <select
          value={filters.position || ""}
          onChange={(e) =>
            setFilters({
              ...filters,
              position: e.target.value as Position | null,
            })
          }
          className="p-2 border border-gray-300 rounded"
        >
          <option value="" className="text-black">
            All Positions
          </option>
          {(["GK", "FW", "MF", "DF"] as Position[]).map((position) => (
            <option key={position} value={position} className="text-black">
              {position}
            </option>
          ))}
        </select>

        {/* Card Size Toggle */}
        <div className="flex flex-row gap-1.5 items-center">
          Card size
          <button
            disabled={cardSize === "small"}
            onClick={(event) => {
              event.preventDefault();
              setCardSize("small");
            }}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <ZoomOutIcon className="cursor-pointer" />
          </button>
          <button
            disabled={cardSize === "big"}
            onClick={(event) => {
              event.preventDefault();
              setCardSize("big");
            }}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <ZoomInIcon className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Players Gallery */}
      <div
        className={`flex flex-row flex-wrap justify-center gap-5 w-full max-w-6xl`}
      >
        {filteredPlayers.map((player) => {
          const { id, character, avatar, affinity, position } = player;
          const { name } = character;
          const isFavorite = favorites.has(id); // Check if the player is favorited

          return (
            <div
              key={id}
              id={id.toString()}
              className={`relative w-[35%] sm:w-auto flex flex-col  items-center bg-gray-100 rounded-lg shadow-md ${
                cardSize === "big" ? "p-4" : "p-2"
              } ${highlightedId === id.toString() ? "animate-blink" : ""}`}
            >
              {/* Player Image */}
              <img
                src={avatar}
                alt={name}
                className={` ${
                  cardSize === "big" ? "h-40" : "h-32"
                } object-cover rounded-lg no-pix`}
              />

              {/* Affinity and Position Icons */}
              <div className="absolute top-2 left-2 flex gap-2">
                {!filters.affinity && (
                  <img
                    src={getImageUrl(`icons/${affinity}.png`)}
                    alt={affinity}
                    className={`${
                      cardSize === "small" ? "w-4 h-4" : "w-6 h-6"
                    }`}
                  />
                )}
                {!filters.position && (
                  <img
                    src={getImageUrl(`icons/${position}.png`)}
                    alt={position}
                    className={`${
                      cardSize === "small" ? "w-7 h-4" : "w-13 h-6"
                    }`}
                  />
                )}
              </div>

              {/* Star Icon (Favorite Button) */}
              <button
                onClick={() => toggleFavorite(id)}
                className="absolute top-2 right-2 p-1 rounded-full transition-colors"
              >
                <StarIcon
                  className={`w-5 h-5 cursor-pointer hover:text-yellow-500 ${
                    isFavorite ? "text-yellow-500" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Player Name */}
              {cardSize === "big" && (
                <p
                  className={`text-center mt-2 ${
                    cardSize === "big" ? "text-l" : "text-sm"
                  } font-semibold text-gray-800 text-wrap w-max`}
                >
                  {name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
