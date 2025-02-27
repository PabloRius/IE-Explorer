import { Shop as ShopType } from "@/types/database";

export function Shop({ x, y, shop }: { x: number; y: number; shop: ShopType }) {
  const { avatar } = shop;
  return (
    <svg
      x={x - 6}
      y={y - 6}
      width={12}
      height={12}
      viewBox="0 0 32 28"
      className="interactable"
    >
      <image href={avatar} width={32} height={28} />
    </svg>
  );
}
