import { Block, Game, Route } from "../types/database";
import { chests } from "./chests";
import { matches } from ".";

export const routes: Record<number, Route> = {
  0: new Route(
    0,
    "The Starter Route",
    Game.IEGOCS,
    "HolyRoadStadium/Entrance",
    [
      [null, null],
      [null, null, null],
      [null, null],
      [null, null, null],
      [null, null],
      [matches[0], null, null],
      [chests[0], null],
      [matches[1], null, null],
      [matches[2], null],
      [
        new Block(
          "Win all matches from the starting point to here with an S Rank."
        ),
        chests[1],
        null,
      ],
      [null, null],
      [null, null, null],
    ]
  ),
};
