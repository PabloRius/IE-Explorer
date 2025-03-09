import { GetDBLink } from "@/utils/getDbLink";
import { Chest, Equipment, Item } from "../../types/database";
import { OpenInDB } from "../OpenInDB";

export function ChestModal({ chest }: { chest: Chest }) {
  const { content } = chest;
  const { avatar } = content;
  const { dbLink } =
    content instanceof Item ? GetDBLink({ item: content }) : { dbLink: null };
  return (
    <>
      <img
        src={avatar}
        className="min-w-35 min-h-25 max-w-52 max-h-52 border-3 border-b-blue-500 bg-blue-50 p-3 rounded"
      />
      {content instanceof Equipment && (
        <div className="overflow-x-auto">
          <table className="table-auto">
            <tbody>
              {Object.entries((content as Equipment).modifiers).map(
                ([modifierName, modifierValue], index) => (
                  <tr key={index}>
                    <td className="px-4 py-0.5 capitalize">{modifierName}</td>
                    <td className="px-4 py-0.5">{modifierValue}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
      <OpenInDB dbLink={dbLink} />
    </>
  );
}
