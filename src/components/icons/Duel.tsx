import { useModal } from "@/hooks/useModal";
import { Duel as DuelType } from "@/types/database";
import { DuelModal } from "../modals/Duel";

export function Duel({ x, y, duel }: { x: number; y: number; duel: DuelType }) {
  const { changeModal } = useModal();
  return (
    <svg
      onClick={() => {
        changeModal({
          newContent: <DuelModal duel={duel} />,
          title: duel.name,
        });
      }}
      width="10"
      height="10"
      viewBox="0 0 20 20"
      x={x - 5}
      y={y - 5}
    >
      <circle
        r={5}
        cx={10}
        cy={10}
        fill="#e54c4f"
        stroke="#efa8a3"
        strokeWidth={1}
        className="interactable"
      />
    </svg>
  );
}
