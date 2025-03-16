import { ReactNode } from "react";

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
  markers: Array<ReactNode>;
  title: string;
}) {
  return (
    <div>
      <h2 className="text-center text-3xl mb-6">{title}</h2>
      <svg width="100%" viewBox={`0 0 ${width || 500} ${height || 500}`}>
        <image href={imageSrc} width={width || 500} height={height || 500} />
        {markers.map((icon) => {
          return icon;
        })}
      </svg>
    </div>
  );
}
