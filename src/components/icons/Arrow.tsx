export function Arrow({
  x,
  y,
  direction,
}: {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right";
}) {
  return direction === "up" ? (
    <svg width={15} height={16} viewBox="0 0 30 32" x={x - 7.5} y={y}>
      <image
        href="/src/assets/icons/ArrowUp.png"
        width={30}
        height={32}
        className="interactable"
      />
    </svg>
  ) : direction === "down" ? (
    <svg width={15} height={16} viewBox="0 0 30 32" x={x - 7.5} y={y - 16}>
      <image
        href="/src/assets/icons/ArrowDown.png"
        width={30}
        height={32}
        className="interactable"
      />
    </svg>
  ) : direction === "left" ? (
    <svg width={16} height={15} viewBox="0 0 32 30" x={x} y={y - 7.5}>
      <image
        href="/src/assets/icons/ArrowLeft.png"
        width={32}
        height={30}
        className="interactable"
      />
    </svg>
  ) : (
    <svg width={16} height={15} viewBox="0 0 32 30" x={x - 16} y={y - 7.5}>
      <image
        href="/src/assets/icons/ArrowRight.png"
        width={32}
        height={30}
        className="interactable"
      />
    </svg>
  );
}
