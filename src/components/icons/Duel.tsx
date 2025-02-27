export function Duel({ x, y }: { x: number; y: number }) {
  return (
    <svg width="10" height="10" viewBox="0 0 20 20" x={x - 5} y={y - 5}>
      <circle
        r={5}
        cx={10}
        cy={10}
        fill="#e54c4f"
        stroke="#efa8a3"
        strokeWidth={1}
        className="interactable"
      />
    </svg>
  );
}
