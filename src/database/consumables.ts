import { Consumable, Game } from "@database.types";

export const consumables: Record<number, Consumable> = {
  0: new Consumable(0, "Itty-bitty sandwich", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
  1: new Consumable(1, "Bog standwich", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
  6: new Consumable(6, "Hyper bar", Game.IEGOCS, [{ method: "", route: "" }]),
  27: new Consumable(27, "Soft drink", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
  28: new Consumable(28, "Isotonic drink", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
  33: new Consumable(33, "Super water", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
  51: new Consumable(51, "Restorative draught S", Game.IEGOCS, [
    { method: "", route: "" },
  ]),
};
