import { Item, Photo, Topic, Equipment, Emblem } from "../types/database";

export function DatabaseView({
  title,
  table,
}: {
  title: string;
  table: Record<number, Item>;
}) {
  return (
    <div className="flex flex-col items-center relative w-full">
      <h2 className="text-3xl text-center mb-4">{title}</h2>
      <table className="table-auto w-full sm:w-4/5 border-collapse">
        <tbody>
          {Object.values(table).map((row) => {
            const { name } = row;
            let { avatar } = row;
            if (row instanceof Photo || row instanceof Topic) {
              avatar = row.photo;
            }

            const isEquipment = row instanceof Equipment;
            const columnClass = isEquipment ? "w-1/4" : "w-1/3";

            return (
              <tr
                key={row.id}
                className="border-b border-gray-300 w-full h-auto"
              >
                <td
                  className={`${columnClass} h-auto p-4 align-middle text-center`}
                >
                  {name}
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
                <td
                  className={`${columnClass} h-auto p-1 sm:p-4 justify-center`}
                >
                  {row.how_to_obtain.map((hto) => {
                    return (
                      <ul>
                        <li>{hto.method}</li>
                        <li>{hto.route}</li>
                      </ul>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
