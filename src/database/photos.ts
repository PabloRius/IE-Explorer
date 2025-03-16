import { Game, HTO, Photo } from "../types/database";

export const photos: Record<number, Photo> = {
  0: new Photo(
    0,
    "Parking ticket machine",
    Game.IEGOCS,
    new HTO("", "HolyRoadStadium/Parking")
  ),
};
