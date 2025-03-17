import { getImageUrl } from "@/config";
import { Link, useLocation } from "react-router";

export function EasyAccessMenu() {
  const location = useLocation();

  const [currentLocation, nextLocation] = location.pathname
    .split("/")
    .slice(1, 3);

  return (
    <menu className="fixed flex flex-row gap-2 justify-center items-center flex-wrap bottom-2 right-2 bg-gray-800 z-50 p-2 rounded shadow-lg">
      {/* {window.history.length > 1 && (
        <Link
          to={"javascript:history.back()"}
          rel="prev"
          className="flex items-center justify-center"
        >
          <img
            src={getImageUrl("icons/Back.png")}
            className="w-12 aspect-auto transition-transform duration-200 hover:scale-110 hover:opacity-80"
          />
        </Link>
      )} */}

      {(currentLocation === "map" || currentLocation === "database") &&
        nextLocation && (
          <Link
            to=".."
            relative="path"
            className="flex items-center justify-center"
          >
            {location.pathname.split("/")[1] === "map" ? (
              <img
                src={getImageUrl("icons/Map.png")}
                className="w-12 aspect-auto transition-transform duration-200 hover:scale-110 hover:opacity-80"
              />
            ) : (
              <img
                src={getImageUrl("icons/Menu.png")}
                className="w-12 aspect-auto transition-transform duration-200 hover:scale-110 hover:opacity-80"
              />
            )}
          </Link>
        )}
    </menu>
  );
}
