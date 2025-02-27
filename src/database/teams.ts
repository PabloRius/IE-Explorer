import { Team } from "../types/database";

export const teams: Record<number, Team> = {
  0: new Team(0, "Raimon", "/src/assets/teams/Raimon.png"),
  1: new Team(1, "Raimon (GO)", "/src/assets/teams/RaimonGO.png"),
};
