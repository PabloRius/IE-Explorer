export function NPC({ x, y }: { x: number; y: number }) {
  return (
    <svg width="10" height="10" viewBox="0 0 20 20" x={x - 5} y={y - 5}>
      <circle
        r={5}
        fill="#1b51b5"
        stroke="#a0bbf7"
        strokeWidth={1}
        cx={10}
        cy={10}
      />
    </svg>
  );
}
