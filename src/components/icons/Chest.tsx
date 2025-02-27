import { Chest as ChestClass } from "../../types/database";

export function Chest({
  x,
  y,
  chest,
}: {
  x: number;
  y: number;
  chest: ChestClass;
}) {
  const { avatar } = chest;
  return (
    <>
      <svg x={x - 7} y={y - 6} width={14} height={13} viewBox="0 0 35 33">
        {
          <image
            href={avatar}
            width={35}
            height={33}
            className="interactable no-pix"
          />
        }
      </svg>
    </>
  );
}
