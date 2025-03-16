import { ModalContext } from "@/contexts/ModalContext";
import { Topic as TopicClass } from "@database.types";
import { useContext } from "react";
import { PhotoTopicModal } from "../modals";

export function Topic({
  x,
  y,
  topic,
}: {
  x: number;
  y: number;
  topic: TopicClass;
}) {
  const { changeModal } = useContext(ModalContext);

  const { avatar } = topic;

  return (
    <svg
      onClick={() => {
        changeModal({
          newContent: <PhotoTopicModal content={topic} />,
          title: topic.name,
        });
      }}
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
