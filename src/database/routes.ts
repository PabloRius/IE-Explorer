import { matches } from ".";
import { Block, Game, Route } from "../types/database";
import { chests } from "./chests";

export const routes: Record<number, Route> = {
  0: new Route(
    0,
    "The Starter Route",
    Game.IEGOCS,
    "HolyRoadStadium/Entrance", // TODO: This is wrong
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
