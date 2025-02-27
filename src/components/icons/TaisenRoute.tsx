import { Route as RouteClass } from "../../types/database";

export function TaisenRoute({
  x,
  y,
  route,
}: {
  x: number;
  y: number;
  route: RouteClass;
}) {
  const { avatar } = route;
  return (
    <svg
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
