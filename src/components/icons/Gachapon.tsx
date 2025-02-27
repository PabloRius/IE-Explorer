import { getImageUrl } from "@/config";

export function Gachapon({ x, y }: { x: number; y: number }) {
  return (
    <svg x={x - 3} y={y - 12} width={12} height={12} viewBox="0 0 30 27">
      <image href={getImageUrl("icons/Gachapon.png")} width={30} height={27} />
    </svg>
  );
}
