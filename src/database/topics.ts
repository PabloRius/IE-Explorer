import { Game, HTO, Topic } from "../types/database";

export const topics: Record<number, Topic> = {
  0: new Topic(0, "Coin collecting", Game.IEGOCS, [
    new HTO("", "HolyRoadStadium/Hallway"),
  ]),
  1: new Topic(1, "Old Football Frontiers", Game.IEGOCS, [
    new HTO("", "HolyRoadStadium/Hallway"),
  ]),
  2: new Topic(2, "Ride like the wind", Game.IEGOCS, [
    new HTO("", "HolyRoadStadium/Parking"),
  ]),
  3: new Topic(3, "Football team hopeful", Game.IEGOCS, [
    new HTO("", "PresentInazuma/RiversidePitch"),
  ]),
  4: new Topic(4, "Reformed delinquent", Game.IEGOCS, [
    new HTO("", "PresentInazuma/RiversidePitch"),
  ]),
};
