import { Link } from "react-router";

export function TextNav({ tables }: { tables: Record<string, string> }) {
  return (
    <nav className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center my-10">
      {Object.keys(tables).map((tableLink) => {
        return (
          <Link
            key={tableLink}
            to={`${tableLink}`}
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center rounded transition text-lg font-bold"
          >
            {tables[tableLink]}
          </Link>
        );
      })}
    </nav>
  );
}
