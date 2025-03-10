import { getImageUrl } from "@/config";
import { Team } from "../types/database";

export const teams: Record<number, Team> = {
  0: new Team(0, "Raimon", getImageUrl("teams/Raimon.png")),
  1: new Team(1, "Raimon (GO)", getImageUrl("teams/RaimonGO.png")),
  2: new Team(2, "Tenmas", getImageUrl("teams/Tenmas.png")),
  3: new Team(3, "New Inazuma Japan", getImageUrl("teams/NewInazumaJapan.png")),
  4: new Team(4, "Chrono Storm", getImageUrl("teams/ChronoStorm.png")),
  5: new Team(5, "Earth Eleven", getImageUrl("teams/EarthEleven.png")),
  6: new Team(
    6,
    "Order of Black Templars",
    getImageUrl("teams/OrderOfBlackTemplars.png")
  ),
  7: new Team(7, "Falam Medius", getImageUrl("teams/FalamMedius.png")),
};
