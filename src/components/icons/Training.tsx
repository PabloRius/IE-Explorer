export function Training({ x, y }: { x: number; y: number }) {
  return (
    <svg width={13} height={15} viewBox="0 0 26 30" x={x - 6} y={y - 15}>
      <image href="/src/assets/icons/Training.png" width={26} height={30} />
    </svg>
  );
}
