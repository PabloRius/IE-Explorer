import { ReactNode, useContext } from "react";
import { Link } from "react-router";
import { ModalContext } from "../contexts/ModalContext";

export function MapView({
  imageSrc,
  markers,
  width,
  height,
  title,
}: {
  imageSrc: string;
  width?: number;
  height?: number;
  markers: {
    marker: ReactNode;
    path?: string;
    label?: string;
    noredirect?: boolean;
    modalContent?: ReactNode;
    modalTitle?: string;
  }[];
  title: string;
}) {
  const { changeModal } = useContext(ModalContext);
  return (
    <div>
      <h2 className="text-center text-3xl mb-6">{title}</h2>
      <svg width="100%" viewBox={`0 0 ${width || 500} ${height || 500}`}>
        <image href={imageSrc} width={width || 500} height={height || 500} />
        {markers.map(
          (
            { marker, path, label, noredirect, modalContent, modalTitle },
            index
          ) => {
            if (!noredirect)
              return (
                <Link key={index} to={path || "/map"} aria-label={label}>
                  {marker}
                </Link>
              );
            return (
              <g
                key={index}
                onClick={() => {
                  if (!modalContent) return;
                  changeModal({
                    newContent: modalContent,
                    title: modalTitle,
                  });
                }}
              >
                {marker}
              </g>
            );
          }
        )}
      </svg>
    </div>
  );
}
