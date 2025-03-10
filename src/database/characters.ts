import { Character } from "@database.types";
import { teams } from ".";

export const characters: Record<number, Character> = {
  0: new Character(1, "Arion Sherwind", "Tenma Matsukaze", "male", [
    teams[1],
    teams[2],
    teams[3],
    teams[4],
    teams[5],
  ]),
  1: new Character(2, "Victor Blade", "Kyosuke Tsurugi", "male", [
    teams[1],
    teams[3],
    teams[4],
    teams[5],
    teams[6],
    teams[7],
  ]),
  2: new Character(2, "Samguk Han", "Sangoku Taichi", "male", [teams[1]]),
  3: new Character(3, "Subaru Honda", "Kurumada Gouichi", "male", [teams[1]]),
  4: new Character(4, "Gabriel Garcia", "Kirino Ranmaru", "male", [
    teams[1],
    teams[3],
    teams[4],
  ]),
  5: new Character(5, "Wanli Changcheng", "Amagi Daichi", "male", [teams[1]]),
  6: new Character(6, "Jean-Pierre Lapin", "Nishinozo Shinsuke", "male", [
    teams[1],
    teams[1],
    teams[3],
    teams[4],
    teams[5],
  ]),
};
