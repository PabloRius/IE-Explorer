import { common_hto } from ".";
import { Emblem, Game, HTO } from "@database.types";

export const emblems: Record<number, Emblem> = {
  0: new Emblem(0, "Raimon", Game.IEGOCS, [common_hto.Chapter1]),
  17: new Emblem(17, "Raimon Reserves", Game.IEGOCS, [
    new HTO(
      "Defeat Raimon Reserves on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  24: new Emblem(24, "The Sherwinds", Game.IEGOCS, [common_hto.Chapter1]),
  25: new Emblem(25, "Protocol Omega", Game.IEGOCS, [
    new HTO(
      "Defeat Protocol Omega on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
  58: new Emblem(58, "Original 1", Game.IEGOCS, [common_hto.Chapter1]),
  59: new Emblem(59, "Original 2", Game.IEGOCS, [common_hto.Chapter1]),
  60: new Emblem(60, "Original 3", Game.IEGOCS, [common_hto.Chapter1]),
  61: new Emblem(61, "Original 4", Game.IEGOCS, [common_hto.Chapter1]),
  62: new Emblem(62, "Original 5", Game.IEGOCS, [common_hto.Chapter1]),
  63: new Emblem(63, "Original 6", Game.IEGOCS, [common_hto.Chapter1]),
  64: new Emblem(64, "Original 7", Game.IEGOCS, [common_hto.Chapter1]),
  65: new Emblem(65, "Original 8", Game.IEGOCS, [common_hto.Chapter1]),
  66: new Emblem(66, "Original 9", Game.IEGOCS, [common_hto.Chapter1]),
  67: new Emblem(67, "Original 10", Game.IEGOCS, [common_hto.Chapter1]),
  68: new Emblem(68, "Original 11", Game.IEGOCS, [common_hto.Chapter1]),
  69: new Emblem(69, "Original 12", Game.IEGOCS, [common_hto.Chapter1]),
  70: new Emblem(70, "Original 13", Game.IEGOCS, [common_hto.Chapter1]),
  71: new Emblem(71, "Original 14", Game.IEGOCS, [common_hto.Chapter1]),
  72: new Emblem(72, "Original 15", Game.IEGOCS, [common_hto.Chapter1]),
  73: new Emblem(73, "Original 16", Game.IEGOCS, [common_hto.Chapter1]),
  74: new Emblem(74, "Original 17", Game.IEGOCS, [common_hto.Chapter1]),
  75: new Emblem(75, "Original 18", Game.IEGOCS, [common_hto.Chapter1]),
  76: new Emblem(76, "Original 19", Game.IEGOCS, [common_hto.Chapter1]),
  77: new Emblem(77, "Original 20", Game.IEGOCS, [common_hto.Chapter1]),
  78: new Emblem(78, "Original 21", Game.IEGOCS, [common_hto.Chapter1]),
  79: new Emblem(79, "Original 22", Game.IEGOCS, [common_hto.Chapter1]),
  80: new Emblem(80, "Original 23", Game.IEGOCS, [common_hto.Chapter1]),
  81: new Emblem(81, "Original 24", Game.IEGOCS, [common_hto.Chapter1]),
  82: new Emblem(82, "Original 25", Game.IEGOCS, [common_hto.Chapter1]),
  83: new Emblem(83, "Original 26", Game.IEGOCS, [common_hto.Chapter1]),
  84: new Emblem(84, "Original 27", Game.IEGOCS, [common_hto.Chapter1]),
  85: new Emblem(85, "Original 28", Game.IEGOCS, [common_hto.Chapter1]),
  86: new Emblem(86, "Original 29", Game.IEGOCS, [common_hto.Chapter1]),
  87: new Emblem(87, "Original 30", Game.IEGOCS, [common_hto.Chapter1]),
  88: new Emblem(88, "Original 31", Game.IEGOCS, [common_hto.Chapter1]),
  89: new Emblem(89, "Original 32", Game.IEGOCS, [common_hto.Chapter1]),
  90: new Emblem(90, "Original 33", Game.IEGOCS, [common_hto.Chapter1]),
  91: new Emblem(91, "Original 34", Game.IEGOCS, [common_hto.Chapter1]),
  113: new Emblem(113, "All Saints' Allstars", Game.IEGOCS, [
    new HTO(
      "Defeat All Saints' Allstars on the Starter Route (upper route)",
      "HolyRoadStadium/Entrance"
    ),
  ]),
};
