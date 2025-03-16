import { useModal } from "@/hooks/useModal";
import { Photo as PhotoClass } from "@database.types";
import { PhotoTopicModal } from "../modals";

export function Photo({
  x,
  y,
  photo,
}: {
  x: number;
  y: number;
  photo: PhotoClass;
}) {
  const { changeModal } = useModal();

  const { avatar } = photo;

  return (
    <svg
      onClick={() => {
        changeModal({
          newContent: <PhotoTopicModal content={photo} />,
          title: photo.name,
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
