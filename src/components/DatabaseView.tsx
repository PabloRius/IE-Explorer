import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { Link } from "react-router";
import { Emblem, Equipment, Item, Photo, Topic } from "../types/database";

export function DatabaseView({
  title,
  table,
}: {
  title: string;
  table: Record<number, Item>;
}) {
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [table]);
  return (
    <div className="flex flex-col items-center relative w-full">
      <h2 className="text-3xl text-center mb-4">{title}</h2>
      <table className="table-auto w-full sm:w-4/5 border-collapse">
        <tbody>
          {Object.values(table).map((row) => {
            const { id, name, how_to_obtain } = row;
            let { avatar } = row;
            if (row instanceof Photo || row instanceof Topic) {
              const { photo } = row;
              avatar = photo;
            }

            const isEquipment = row instanceof Equipment;
            const columnClass = isEquipment ? "w-1/4" : "w-1/3";

            return (
              <tr
                key={id}
                id={id.toString()}
                className="border-b border-gray-300 w-full h-auto"
              >
                <td
                  className={`${columnClass} h-auto p-4 align-middle text-center`}
                >
                  {row instanceof Photo || row instanceof Topic ? (
                    <Link
                      to={`/map/${how_to_obtain[0].route}`}
                      className="flex flex-row items-center justify-center gap-2"
                    >
                      {name} <OpenInNewWindowIcon />
                    </Link>
                  ) : (
                    name
                  )}
                </td>
                <td
                  className={`${columnClass} h-auto p-1 sm:p-4 justify-center`}
                >
                  <img
                    src={avatar}
                    alt={name}
                    className={`${
                      row instanceof Photo || row instanceof Topic
                        ? "w-full h-auto"
                        : "max-h-16 max-w-full"
                    } m-auto ${row instanceof Emblem && "no-pix"}`}
                  />
                </td>
                {isEquipment && (
                  <td className={`${columnClass} h-auto p-4 align-middle`}>
                    <table className="table-auto w-full border-collapse">
                      <tbody>
                        {Object.entries(row.modifiers).map(
                          ([attribute, value]) => (
                            <tr key={attribute} className="border-0">
                              <td className="p-1 text-right capitalize">
                                {attribute}
                              </td>
                              <td className="p-1 text-left">{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </td>
                )}
                {how_to_obtain &&
                  !(row instanceof Photo) &&
                  !(row instanceof Topic) && (
                    <td
                      className={`${columnClass} h-auto p-1 sm:p-4 justify-center`}
                    >
                      {how_to_obtain.map((hto, hto_index) => {
                        const { method, route } = hto;
                        const finalRoute = "/map/" + route;
                        return (
                          <ul
                            key={`${name}_${hto_index}`}
                            className="list-disc text-sm"
                          >
                            {route && (
                              <Link to={finalRoute}>
                                <li>{method}</li>
                              </Link>
                            )}
                            {!route && <li>{method}</li>}
                          </ul>
                        );
                      })}
                    </td>
                  )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
