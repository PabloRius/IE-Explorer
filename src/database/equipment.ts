import { Equipment, EquipmentType, Game, HTO } from "@database.types";
import { common_hto } from ".";

export const boots: Record<number, Equipment> = {
  0: new Equipment(
    0,
    "Raimon boots",
    Game.IEGOCS,
    [common_hto.Chapter1],
    EquipmentType.boots,
    {
      kick: 1,
      speed: 1,
    }
  ),
  37: new Equipment(
    37,
    "Panther boots",
    Game.IEGOCS,
    [
      new HTO("Inside a blue chest", "HolyRoadStadium/Parking"),
      new HTO("Buyable in the Blue Shop", "HolyRoadStadium/Parking"),
    ],
    EquipmentType.boots,
    {
      kick: 0,
      speed: 4,
    },
    170
  ),
  38: new Equipment(
    38,
    "Echo boots",
    Game.IEGOCS,
    [
      new HTO(
        "Inside a blue chest after defeating Raimon Reserves on Initial Route",
        "HolyRoadStadium/Entrance"
      ),
    ],
    EquipmentType.boots,
    {
      kick: 9,
      speed: 5,
    }
  ),
  43: new Equipment(
    43,
    "Sherwind boots",
    Game.IEGOCS,
    [common_hto.Chapter1],
    EquipmentType.boots,
    {
      kick: 0,
      speed: 2,
    }
  ),
  63: new Equipment(
    63,
    "Tonghanian boots",
    Game.IEGOCS,
    [new HTO("Inside a blue chest", "HolyRoadStadium/Hallway")],
    EquipmentType.boots,
    {
      kick: 6,
      speed: 2,
    }
  ),
};

export const gloves: Record<number, Equipment> = {
  0: new Equipment(
    0,
    "Raimon gloves",
    Game.IEGOCS,
    [common_hto.Chapter1],
    EquipmentType.gloves,
    {
      catch: 1,
      technique: 1,
    }
  ),
  37: new Equipment(
    37,
    "Panther gloves",
    Game.IEGOCS,
    [new HTO("Buyable in the Blue Shop", "HolyRoadStadium/Parking")],
    EquipmentType.gloves,
    {
      catch: 0,
      technique: 4,
    },
    200
  ),
  42: new Equipment(
    42,
    "Sherwind gloves",
    Game.IEGOCS,
    [common_hto.Chapter1],
    EquipmentType.gloves,
    {
      catch: 0,
      technique: 2,
    }
  ),
};

export const pendants: Record<number, Equipment> = {
  0: new Equipment(
    0,
    "Drop pendant",
    Game.IEGOCS,
    [new HTO("Buyable in the Blue Shop", "HolyRoadStadium/Parking")],
    EquipmentType.pendants,
    { dribble: 2, block: 2 },
    280
  ),
};

export const bracelets: Record<number, Equipment> = {
  1: new Equipment(
    1,
    "Leather bracelet",
    Game.IEGOCS,
    [new HTO("Buyable in the Blue Shop", "HolyRoadStadium/Parking")],
    EquipmentType.bracelets,
    { luck: 1, stamina: 3 },
    250
  ),
};
