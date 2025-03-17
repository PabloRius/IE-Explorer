import { getImageUrl } from "@/config";
import { Link, useLocation } from "react-router";

export function EasyAccessMenu() {
  const location = useLocation();

  return (
    <menu className="fixed flex flex-row gap-2 justify-center items-center flex-wrap bottom-2 right-2 bg-gray-800 z-50 p-2 rounded shadow-lg">
      {window.history.length > 1 && (
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center"
        >
          <img
            src={getImageUrl("icons/Back.png")}
            className="w-12 aspect-auto transition-transform duration-200 hover:scale-110 hover:opacity-80"
          />
        </button>
      )}

      {location.pathname !== "/" && (
        <Link
          to=".."
          relative="path"
          className="flex items-center justify-center"
        >
          <img
            src={getImageUrl("icons/Map.png")}
            className="w-12 aspect-auto transition-transform duration-200 hover:scale-110 hover:opacity-80"
          />
        </Link>
      )}
    </menu>
  );
}
