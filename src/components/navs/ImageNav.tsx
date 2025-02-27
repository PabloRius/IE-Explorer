import { getImageUrl } from "@/config";
import { Link } from "react-router";

export function ImageNav({ tables }: { tables: Record<string, string> }) {
  return (
    <nav className="flex flex-wrap justify-center gap-4 text-center my-10">
      {Object.keys(tables).map((tableKey) => {
        return (
          <Link
            key={tableKey}
            to={`${tableKey}`}
            className="transition text-lg font-bold flex flex-col items-center"
          >
            <img className="no-pix" src={getImageUrl(`navs/${tableKey}.png`)} />
          </Link>
        );
      })}
    </nav>
  );
}
