import { getImageUrl } from "@/config";
import { useModal } from "@/hooks/useModal";
import { GetDBLink } from "@/utils/getDbLink";
import { Cross1Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Item, Route as RouteClass } from "../../types/database";
import { OpenInDB } from "../OpenInDB";

function MatchSupportMenu({
  title,
  rewards,
}: {
  title: string;
  rewards: Item[];
}) {
  const { quitModal } = useModal();
  return (
    <>
      <h4 className="text-1xl">{title}</h4>
      <table className="table-auto py-10 px-2">
        <tbody className="flex flex-col gap-3">
          {rewards.map((reward) => {
            const { name, avatar } = reward;
            const { dbLink } = GetDBLink({ item: reward });
            return (
              <tr key={name} className="flex flex-row items-center gap-3">
                <td className="w-8 h-8 place-items-center">
                  <img
                    src={avatar}
                    className="w-auto max-w-8 max-h-8 no-pix"
                    alt={name}
                  />
                </td>
                <td className="text-xs flex-1">{name}</td>
                <td>
                  <Link
                    to={dbLink}
                    onClick={() => {
                      quitModal();
                    }}
                  >
                    <OpenInNewWindowIcon />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
function BlockSupportMenu({ condition }: { condition: Item | string }) {
  if (condition instanceof Item) {
    const { name, avatar } = condition;
    const { dbLink } = GetDBLink({ item: condition });
    return (
      <>
        <img
          src={avatar}
          className="border-3 border-b-blue-500 bg-blue-50 p-3 rounded"
        />
        <p>{name}</p>
        <OpenInDB dbLink={dbLink} />
      </>
    );
  } else {
    return <p>{condition}</p>;
  }
}
function ChestSupportMenu({ item }: { item: Item }) {
  const { name, avatar } = item;
  const { dbLink } = GetDBLink({ item });
  return (
    <>
      <img
        src={avatar}
        className="border-3 border-b-blue-500 bg-blue-50 p-3 rounded"
      />
      <p>{name}</p>
      <OpenInDB dbLink={dbLink} />
    </>
  );
}

export function RouteModal({ route }: { route: RouteClass }) {
  const [supportMenu, setSupportMenu] = useState<ReactNode | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { id, coords } = route;

  const changeSupportMenu = (newMenu: ReactNode) => {
    setSupportMenu(
      <div className="flex flex-col items-center justify-center gap-6 px-2 py-7 h-[100%] bg-gradient-to-br from-gray-800 to-gray-600 shadow-md text-white">
        {newMenu}
        <div className="absolute top-2.5 right-2.5 cursor-pointer z-50">
          <Cross1Icon
            onClick={() => {
              setSupportMenu(null);
            }}
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollWidth, scrollHeight, clientWidth, clientHeight } =
        scrollContainerRef.current;

      scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
      scrollContainerRef.current.scrollTop = (scrollHeight - clientHeight) / 2;
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="overflow-scroll w-[100%]">
      {supportMenu && (
        <div className="absolute bg-white w-50 h-[100%] right-0 top-0 shadow-2xl">
          {supportMenu}
        </div>
      )}
      <svg width={848} height={240} viewBox="0 0 848 240">
        <image
          href={getImageUrl(`routes/${id}.png`)}
          width={848}
          height={240}
          className="no-pix"
        />
        {coords.map((node, index) => {
          if (!node) return;
          const { x, y, type } = node;
          if (type === "match") {
            const { match } = node;
            const { avatar, name, rewards } = match;
            return (
              <image
                key={index}
                x={x - 23}
                y={y - 34}
                width={48}
                height={48}
                href={avatar}
                className="no-pix interactable"
                onClick={() => {
                  changeSupportMenu(
                    <MatchSupportMenu title={name} rewards={rewards} />
                  );
                }}
              />
            );
          } else if (type === "block") {
            const { block } = node;
            const { avatar, condition } = block;
            return (
              <image
                key={index}
                x={x - 11}
                y={y - 30}
                width={26}
                height={38}
                href={avatar}
                className="no-pix interactable"
                onClick={() => {
                  changeSupportMenu(<BlockSupportMenu condition={condition} />);
                }}
              />
            );
          } else if (type === "chest") {
            const { chest } = node;
            const { content } = chest;
            return (
              <image
                key={index}
                x={x - 17}
                y={y - 24}
                width={35}
                height={33}
                href={getImageUrl(`routes/Chest.png`)}
                className="no-pix interactable"
                onClick={() => {
                  changeSupportMenu(<ChestSupportMenu item={content} />);
                }}
              />
            );
          }
        })}
      </svg>
    </div>
  );
}
