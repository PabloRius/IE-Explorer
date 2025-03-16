import { getImageUrl } from "@/config";
import { ModalContext } from "@/contexts/ModalContext";
import { Chest as ChestType } from "@database.types";
import { useContext } from "react";
import { ChestModal } from "../modals";

export function Chest({
  x,
  y,
  chest,
}: {
  x: number;
  y: number;
  chest: ChestType;
}) {
  const { changeModal } = useContext(ModalContext);
  const { rarity, content } = chest;
  const { name } = content;
  return (
    <svg
      onClick={() => {
        changeModal({ newContent: <ChestModal chest={chest} />, title: name });
      }}
      x={x - 7}
      y={y - 6}
      width={14}
      height={13}
      viewBox="0 0 35 33"
    >
      {
        <image
          href={getImageUrl(`routes/${rarity || "Chest"}.png`)}
          width={35}
          height={33}
          className="interactable no-pix"
        />
      }
    </svg>
  );
}
