import { Game, Player } from "../types/database";
import { characters } from "./characters";

export const players: Record<number, Player> = {};

function addPlayer(player: Player) {
  const { id } = player;
  if (id in players) throw new Error("Duplicated player ID");
  players[id] = player;
}

addPlayer(
  new Player(
    0,
    characters[0],
    Game.IEGOCS,
    {
      GP: 153,
      TP: 144,
      Kick: 121,
      Dribbling: 154,
      Block: 111,
      Catch: 88,
      Technique: 102,
      Speed: 109,
      Stamina: 107,
      Lucky: 116,
      Freedom: 55,
    },
    "kid",
    [],
    "wind",
    "MF"
  )
);

addPlayer(
  new Player(
    1,
    characters[1],
    Game.IEGOCS,
    {
      GP: 153,
      TP: 144,
      Kick: 169,
      Dribbling: 119,
      Block: 102,
      Catch: 66,
      Technique: 126,
      Speed: 107,
      Stamina: 112,
      Lucky: 109,
      Freedom: 51,
    },
    "kid",
    [],
    "fire",
    "FW"
  )
);

addPlayer(
  new Player(
    2,
    characters[2],
    Game.IEGOCS,
    {
      GP: 144,
      TP: 147,
      Kick: 55,
      Dribbling: 71,
      Block: 95,
      Catch: 138,
      Technique: 107,
      Speed: 100,
      Stamina: 78,
      Lucky: 83,
      Freedom: 99,
    },
    "kid",
    [],
    "fire",
    "GK"
  )
);

addPlayer(
  new Player(
    3,
    characters[3],
    Game.IEGOCS,
    {
      GP: 147,
      TP: 142,
      Kick: 66,
      Dribbling: 75,
      Block: 117,
      Catch: 71,
      Technique: 100,
      Speed: 92,
      Stamina: 95,
      Lucky: 83,
      Freedom: 70,
    },
    "kid",
    [],
    "fire",
    "DF"
  )
);

addPlayer(
  new Player(
    4,
    characters[4],
    Game.IEGOCS,
    {
      GP: 130,
      TP: 142,
      Kick: 66,
      Dribbling: 90,
      Block: 141,
      Catch: 50,
      Technique: 116,
      Speed: 119,
      Stamina: 88,
      Lucky: 102,
      Freedom: 85,
    },
    "kid",
    [],
    "wood",
    "DF"
  )
);

addPlayer(
  new Player(
    5,
    characters[5],
    Game.IEGOCS,
    {
      GP: 147,
      TP: 124,
      Kick: 83,
      Dribbling: 83,
      Block: 146,
      Catch: 54,
      Technique: 112,
      Speed: 68,
      Stamina: 107,
      Lucky: 107,
      Freedom: 95,
    },
    "kid",
    [],
    "earth",
    "DF"
  )
);

addPlayer(
  new Player(
    6,
    characters[6],
    Game.IEGOCS,
    {
      GP: 136,
      TP: 149,
      Kick: 62,
      Dribbling: 85,
      Block: 116,
      Catch: 136,
      Technique: 109,
      Speed: 112,
      Stamina: 107,
      Lucky: 85,
      Freedom: 88,
    },
    "kid",
    [],
    "earth",
    "GK"
  )
);

addPlayer(
  new Player(
    7,
    characters[7],
    Game.IEGOCS,
    {
      GP: 116,
      TP: 147,
      Kick: 62,
      Dribbling: 78,
      Block: 114,
      Catch: 131,
      Technique: 95,
      Speed: 90,
      Stamina: 109,
      Lucky: 107,
      Freedom: 63,
    },
    "kid",
    [],
    "wood",
    "GK"
  )
);

addPlayer(
  new Player(
    8,
    characters[8],
    Game.IEGOCS,
    {
      GP: 116,
      TP: 113,
      Kick: 88,
      Dribbling: 128,
      Block: 120,
      Catch: 76,
      Technique: 90,
      Speed: 100,
      Stamina: 95,
      Lucky: 83,
      Freedom: 91,
    },
    "kid",
    [],
    "wood",
    "MF"
  )
);

addPlayer(
  new Player(
    9,
    characters[9],
    Game.IEGOCS,
    {
      GP: 144,
      TP: 116,
      Kick: 76,
      Dribbling: 115,
      Block: 123,
      Catch: 90,
      Technique: 102,
      Speed: 112,
      Stamina: 81,
      Lucky: 68,
      Freedom: 89,
    },
    "kid",
    [],
    "earth",
    "DF"
  )
);

addPlayer(
  new Player(
    10,
    characters[10],
    Game.IEGOCS,
    {
      GP: 127,
      TP: 108,
      Kick: 78,
      Dribbling: 120,
      Block: 92,
      Catch: 69,
      Technique: 88,
      Speed: 77,
      Stamina: 95,
      Lucky: 83,
      Freedom: 54,
    },
    "kid",
    [],
    "earth",
    "MF"
  )
);

addPlayer(
  new Player(
    11,
    characters[11],
    Game.IEGOCS,
    {
      GP: 113,
      TP: 111,
      Kick: 120,
      Dribbling: 100,
      Block: 81,
      Catch: 64,
      Technique: 76,
      Speed: 97,
      Stamina: 88,
      Lucky: 78,
      Freedom: 73,
    },
    "kid",
    [],
    "fire",
    "FW"
  )
);
