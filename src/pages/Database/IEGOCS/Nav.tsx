import { ImageNav } from "@components/navs/ImageNav";

export function MainNav() {
  return (
    <ImageNav
      tables={{
        players: "Players",
        inventory: "Inventory",
        movesandspirits: "Moves and Spirits",
        teams: "Teams",
      }}
    />
  );
}
