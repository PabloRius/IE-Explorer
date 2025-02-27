import { getImageUrl } from "@/config";

export function Scout({ x, y }: { x: number; y: number }) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 32 32"
      x={x - 6}
      y={y - 6}
      className="interactable"
    >
      <image href={getImageUrl("icons/Scout.png")} width={32} height={32} />
    </svg>
  );
}
