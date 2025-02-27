import { Character } from "@database.types";
import { teams } from ".";

export const characters: Record<number, Character> = {
  0: new Character(0, "Mark Evans", "Mamoru Endou", "male", [
    teams[0],
    teams[1],
  ]),
  1: new Character(1, "Arion Sherwind", "Tenma Matsukaze", "male", [teams[1]]),
};
