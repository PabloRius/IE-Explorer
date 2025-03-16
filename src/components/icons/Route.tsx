import { useModal } from "@/hooks/useModal";
import { Route as RouteClass } from "@database.types";
import { RouteModal } from "../modals";

export function Route({
  x,
  y,
  route,
}: {
  x: number;
  y: number;
  route: RouteClass;
}) {
  const { changeModal } = useModal();

  const { avatar } = route;
  return (
    <svg
      onClick={() => {
        changeModal({
          newContent: <RouteModal route={route} />,
          title: route.name,
        });
      }}
      width={12}
      height={10}
      viewBox="0 0 32 28"
      x={x - 6}
      y={y - 5}
      className="interactable"
    >
      <image href={avatar} width={32} height={28} />
    </svg>
  );
}
