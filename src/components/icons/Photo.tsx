import { Photo as PhotoClass } from "../../types/database";

export function Photo({
  x,
  y,
  photo,
}: {
  x: number;
  y: number;
  photo: PhotoClass;
}) {
  const { avatar } = photo;

  return (
    <svg
      width={15.5}
      height={14}
      viewBox="0 0 31 28"
      x={x - 3}
      y={y - 14}
      className="interactable"
    >
      <image href={avatar} width={31} height={28} />
    </svg>
  );
}
