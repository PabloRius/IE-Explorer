import { Game, HTO, Move } from "../types/database";

export const moves: Record<number, Move> = {
  // 1: new Move(
  //   1,
  //   "Mystifying Mist",
  //   Game.IEGOCS,
  //   MoveType.block,
  //   Affinity.wood,
  //   { Power: 100, TP: 27, Difficulty: 45, "Spirit Damage": 10 }
  // ),
  // 6: new Move(6, "Thief's Eye", Game.IEGOCS, MoveType.block, Affinity.wood, {
  //   Power: 50,
  //   TP: 19,
  //   Difficulty: 20,
  //   "Spirit Damage": 5,
  // }),
  // 19: new Move(
  //   19,
  //   "Great Wall",
  //   Game.IEGOCS,
  //   MoveType.block,
  //   Affinity.earth,
  //   { Power: 80, TP: 27, Difficulty: 45, "Spirit Damage": 15 },
  //   MoveCharacteristic.block
  // ),
  // 23: new Move(
  //   23,
  //   "Fractal Repeller",
  //   Game.IEGOCS,
  //   MoveType.block,
  //   Affinity.earth,
  //   { Power: 100, TP: 27, Difficulty: 135, "Spirit Damage": 10 }
  // ),
  // 24: new Move(24, "Hyper-Swiper", Game.IEGOCS, MoveType.block, Affinity.wind, {
  //   Power: 50,
  //   TP: 19,
  //   Difficulty: 20,
  //   "Spirit Damage": 5,
  // }),
  28: new Move(
    28,
    "Tesla Coil",
    Game.IEGOCS,
    [
      new HTO(
        "Defeat Protocol Omega on the Starter Route (upper route)",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "block",
    "wood",
    {
      Power: 80,
      TP: 27,
      Difficulty: 45,
      "Spirit Damage": 20,
    }
  ),
  // 42: new Move(
  //   42,
  //   "Electric Impedance",
  //   Game.IEGOCS,
  //   MoveType.block,
  //   Affinity.neutral,
  //   { Power: 80, TP: 27, Difficulty: 45, "Spirit Damage": 15 },
  //   MoveCharacteristic.block
  // ),
  // 46: new Move(
  //   46,
  //   "Combustion Catch",
  //   Game.IEGOCS,
  //   MoveType.catch,
  //   Affinity.fire,
  //   { Power: 60, TP: 25, Difficulty: 20, "Stun Damage": -10 }
  // ),
  // 48: new Move(
  //   48,
  //   "Whip Crack",
  //   Game.IEGOCS,
  //   MoveType.catch,
  //   Affinity.wind,
  //   {
  //     Power: 60,
  //     TP: 20,
  //     Difficulty: 20,
  //     "Stun Damage": -10,
  //   },
  //   MoveCharacteristic.punch
  // ),
  // 54: new Move(
  //   54,
  //   "Shot Stopper",
  //   Game.IEGOCS,
  //   MoveType.catch,
  //   Affinity.fire,
  //   {
  //     Power: 130,
  //     TP: 45,
  //     Difficulty: 75,
  //     "Stun Damage": -20,
  //   },
  //   MoveCharacteristic.punch
  // ),
  // 55: new Move(55, "God Hand", Game.IEGOCS, MoveType.catch, Affinity.earth, {
  //   Power: 65,
  //   TP: 30,
  //   Difficulty: 30,
  //   "Stun Damage": -20,
  // }),
  62: new Move(
    62,
    "Stomper Stopper",
    Game.IEGOCS,
    [
      new HTO(
        "Defeat Protocol Omega on the Starter Route (upper route)",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "save",
    "wood",
    {
      Power: 80,
      TP: 30,
      Difficulty: 30,
      "Stun Damage": -10,
    }
  ),
  // 72: new Move(72, "Fist Beam", Game.IEGOCS, MoveType.catch, Affinity.fire, {
  //   Power: 140,
  //   TP: 45,
  //   Difficulty: 75,
  //   "Stun Damage": -10,
  // }),
  // 76: new Move(
  //   76,
  //   "Jumping Whack",
  //   Game.IEGOCS,
  //   MoveType.catch,
  //   Affinity.earth,
  //   { Power: 100, TP: 35, Difficulty: 45, "Stun Damage": -10 },
  //   MoveCharacteristic.punch
  // ),
  // 84: new Move(
  //   84,
  //   "Illusion Ball",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.wood,
  //   { Power: 100, TP: 32, Difficulty: 45, "Spirit Damage": 10 }
  // ),
  // 93: new Move(
  //   93,
  //   "Easy Breezy",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.wind,
  //   { Power: 70, TP: 28, Difficulty: 30, "Spirit Damage": 5 }
  // ),
  // 100: new Move(
  //   100,
  //   "Dance on air",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.earth,
  //   { Power: 140, TP: 40, Difficulty: 75, "Spirit Damage": 30 }
  // ),
  // 106: new Move(
  //   106,
  //   "Acrobatic Keep",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.earth,
  //   { Power: 120, TP: 36, Difficulty: 60, "Spirit Damage": 20 }
  // ),
  // 107: new Move(
  //   107,
  //   "Heart Beat",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.fire,
  //   { Power: 100, TP: 32, Difficulty: 45, "Spirit Damage": 10 }
  // ),
  // 108: new Move(108, "Spin Out", Game.IEGOCS, MoveType.dribble, Affinity.wind, {
  //   Power: 90,
  //   TP: 32,
  //   Difficulty: 45,
  //   "Spirit Damage": 20,
  // }),
  // 113: new Move(
  //   113,
  //   "Transporter Device",
  //   Game.IEGOCS,
  //   MoveType.dribble,
  //   Affinity.wood,
  //   { Power: 70, TP: 28, Difficulty: 30, "Spirit Damage": 5 }
  // ),
  // 130: new Move(
  //   130,
  //   "Zephyr Shot",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.wind,
  //   { Power: 60, TP: 35, Difficulty: 30, "Stun Damage": 20 },
  //   MoveCharacteristic.chain
  // ),
  // 131: new Move(
  //   131,
  //   "Doomsword Slash",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.fire,
  //   { Power: 80, TP: 35, Difficulty: 30, "Stun Damage": 10 }
  // ),
  // 142: new Move(
  //   142,
  //   "Fortissimo Foot",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.wood,
  //   { Power: 110, TP: 45, Difficulty: 45, "Stun Damage": 10 },
  //   MoveCharacteristic.chain
  // ),
  // 147: new Move(
  //   147,
  //   "Entropic Arrows",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.neutral,
  //   { Power: 160, TP: 55, Difficulty: 75, "Stun Damage": 15 }
  // ),
  // 163: new Move(
  //   163,
  //   "Bouncing Bunny",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.wood,
  //   { Power: 60, TP: 30, Difficulty: 20, "Stun Damage": 15 }
  // ),
  164: new Move(
    164,
    "Spin Meister",
    Game.IEGOCS,
    [
      new HTO(
        "Defeat Protocol Omega on the Starter Route (upper route)",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "shoot",
    "wind",
    { Power: 60, TP: 30, Difficulty: 20, "Stun Damage": 15 }
  ),
  // 166: new Move(
  //   166,
  //   "Plasma Ball",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.wind,
  //   { Power: 80, TP: 50, Difficulty: 60, "Stun Damage": 35 },
  //   MoveCharacteristic.long
  // ),
  // 167: new Move(
  //   167,
  //   "Fission and Fusion",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.neutral,
  //   { Power: 130, TP: 50, Difficulty: 60, "Stun Damage": 10 },
  //   MoveCharacteristic.long
  // ),
  177: new Move(
    177,
    "Gaussian Goal",
    Game.IEGOCS,
    [
      new HTO(
        "Defeat Protocol Omega on the Starter Route (upper route)",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "shoot",
    "wood",
    { Power: 80, TP: 50, Difficulty: 60, "Stun Damage": 35 },
    "chain"
  ),
  // 188: new Move(
  //   188,
  //   "Accelerator Gears",
  //   Game.IEGOCS,
  //   MoveType.shoot,
  //   Affinity.earth,
  //   { Power: 120, TP: 50, Difficulty: 60, "Stun Damage": 15 }
  // ),
  222: new Move(
    222,
    "Dribble Boost",
    Game.IEGOCS,
    [
      new HTO(
        "Defeat All Saints' Allstars on the Starter Route (upper route)",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "skill",
    "skills",
    { effect: "Raises a player's dribble stat by 10" }
  ),
  223: new Move(
    223,
    "Catch Boost",
    Game.IEGOCS,
    [
      new HTO(
        "Inside a chest in the riverside north",
        "HolyRoadStadium/Entrance"
      ),
    ],
    "skill",
    "skills",
    { effect: "Raises a player's catch stat by 10" }
  ),
};
