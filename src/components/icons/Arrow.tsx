import { getImageUrl } from "@/config";

export function Arrow({
  x,
  y,
  direction,
  size,
}: {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right";
  size?: "sm" | "lg";
}) {
  return direction === "up" ? (
    <svg
      width={size ? (size === "sm" ? 7 : 15) : 15}
      height={size ? (size === "sm" ? 8 : 16) : 16}
      viewBox="0 0 30 32"
      x={x - (size ? (size === "sm" ? 3.5 : 7.5) : 7.5)}
      y={y}
    >
      <image
        href={getImageUrl("icons/ArrowUp.png")}
        width={30}
        height={32}
        className="interactable"
      />
    </svg>
  ) : direction === "down" ? (
    <svg
      width={size ? (size === "sm" ? 7 : 15) : 15}
      height={size ? (size === "sm" ? 8 : 16) : 16}
      viewBox="0 0 30 32"
      x={x - (size ? (size === "sm" ? 3.5 : 7.5) : 7.5)}
      y={y - (size ? (size === "sm" ? 8 : 16) : 16)}
    >
      <image
        href={getImageUrl("icons/ArrowDown.png")}
        width={30}
        height={32}
        className="interactable"
      />
    </svg>
  ) : direction === "left" ? (
    <svg
      width={size ? (size === "sm" ? 8 : 16) : 16}
      height={size ? (size === "sm" ? 7 : 15) : 15}
      viewBox="0 0 32 30"
      x={x}
      y={y - (size ? (size === "sm" ? 3.75 : 7.5) : 7.5)}
    >
      <image
        href={getImageUrl("icons/ArrowLeft.png")}
        width={32}
        height={30}
        className="interactable"
      />
    </svg>
  ) : (
    <svg
      width={size ? (size === "sm" ? 8 : 16) : 16}
      height={size ? (size === "sm" ? 7 : 15) : 15}
      viewBox="0 0 32 30"
      x={x - (size ? (size === "sm" ? 8 : 16) : 16)}
      y={y - (size ? (size === "sm" ? 3.75 : 7.5) : 7.5)}
    >
      <image
        href={getImageUrl("icons/ArrowRight.png")}
        width={32}
        height={30}
        className="interactable"
      />
    </svg>
  );
}
