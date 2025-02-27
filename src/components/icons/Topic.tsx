import { Topic as TopicClass } from "../../types/database";

export function Topic({
  x,
  y,
  topic,
}: {
  x: number;
  y: number;
  topic: TopicClass;
}) {
  const { avatar } = topic;

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
