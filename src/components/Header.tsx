import { getImageUrl } from "@/config";
import { useGame } from "@/hooks/useGame";
import { Link } from "react-router";

export function Header() {
  const { selectedGame } = useGame();
  return (
    <header
      className={`sm:fixed sm:min-h-20 sm:h-auto z-0 top-0 left-0 w-screen flex sm:flex-row flex-col justify-between items-center py-4 px-6 sm:px-10 gap-4 sm:gap-6 bg-gray-800 shadow-lg transition-opacity duration-200`}
    >
      <h1 className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors text-center">
        <Link to="/">Inazuma Eleven Explorer</Link>
      </h1>
      <nav className="flex flex-row flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center items-center">
        {[
          { route: "map", title: "Map" },
          { route: "database", title: "Database" },
          { route: "team-builder", title: "Team Builder" },
        ].map((routeObj) => {
          const { route, title } = routeObj;
          return (
            <Link
              key={route}
              to={`/${route}`}
              className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors capitalize text-center"
            >
              {title}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-4 text-center">
        <Link
          to="/select-game"
          className="bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          {/* Placeholder for the game icon */}
          <div className="w-10 h-10  flex items-center justify-center text-sm">
            <img
              src={getImageUrl(`navs/${selectedGame}.png`)}
              className="no-pix"
            />
          </div>
          <span className="text-xs">{selectedGame || "Select Game"}</span>
        </Link>
      </div>
    </header>
  );
}
