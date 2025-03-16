import { useModal } from "@/hooks/useModal";
import { Shop as ShopType } from "@/types/database";
import { ShopModal } from "../modals/Shop";

export function Shop({ x, y, shop }: { x: number; y: number; shop: ShopType }) {
  const { changeModal } = useModal();

  const { avatar } = shop;
  return (
    <svg
      onClick={() => {
        changeModal({
          newContent: <ShopModal shop={shop} />,
          title: "Equipment Shop",
        });
      }}
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
