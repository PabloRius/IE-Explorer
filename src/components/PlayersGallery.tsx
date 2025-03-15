import { getImageUrl } from "@/config";
import { Affinity, Player, Position } from "@/types/database";
import { StarIcon, ZoomInIcon, ZoomOutIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface Filters {
  name: string;
  id: string | null;
  affinity: Affinity | null;
  position: Position | null;
}

const ITEMS_PER_PAGE = 20;

export function PlayersGallery({ players }: { players: Array<Player> }) {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    id: null,
    affinity: null,
    position: null,
  });
  const [filteredPlayers, setFilteredPlayers] = useState<Array<Player>>([]);
  const [cardSize, setCardSize] = useState<"small" | "big">("big");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const playersWithFilter = players
      .sort((a, b) => a.character.name.localeCompare(b.character.name))
      .filter((player) => {
        const { name } = player.character;
        const matchesName = name
          .toLowerCase()
          .includes(filters.name.toLowerCase());
        const matchesId = filters.id
          ? player.id.toString() === filters.id
          : true;
        const matchesAffinity = filters.affinity
          ? player.affinity === filters.affinity
          : true;
        const matchesPosition = filters.position
          ? player.position === filters.position
          : true;
        return matchesName && matchesId && matchesAffinity && matchesPosition;
      })
      .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    setFilteredPlayers(playersWithFilter);
  }, [players, currentPage, filters]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredPlayers.length / ITEMS_PER_PAGE));
  }, [filteredPlayers]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");

      if (id) {
        setFilters((prev) => ({ ...prev, id: id }));
      }
    }
  }, []);

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

  const clearFilters = () => {
    setFilters({
      affinity: null,
      name: "",
      id: null,
      position: null,
    });
    history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-3xl text-center mb-6">Players</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search by name..."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          className="p-2 border border-gray-300 rounded flex-grow"
        />

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
        <button
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={clearFilters}
        >
          Clear filter
        </button>

        <div className="flex flex-row gap-1.5 items-center text-center">
          Card size
          <span className="flex flex-row md:flex-col gap-1.5">
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
          </span>
        </div>
      </div>

      <div
        className={`flex flex-row flex-wrap justify-center gap-5 w-full max-w-6xl`}
      >
        {filteredPlayers.map((player) => {
          const { id, character, avatar, affinity, position } = player;
          const { name } = character;
          const isFavorite = favorites.has(id);

          return (
            <div
              key={id}
              id={id.toString()}
              className={`relative sm:w-auto flex flex-col items-center bg-gray-100 rounded-lg shadow-md ${
                cardSize === "big" ? "p-4" : "p-2"
              }`}
            >
              <img
                src={avatar}
                alt={name}
                className={`${
                  cardSize === "big" ? "h-40" : "h-32"
                } object-cover rounded-lg`}
              />

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
      <div className="mt-6 flex justify-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="p-2">
          Page {currentPage} of {totalPages}
        </span>
        {totalPages && (
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
