import { Character } from "@database.types";
import { teams } from ".";

const characters: Record<number, Character> = {};
function addCharacter(character: Character) {
  const { id } = character;
  if (id in characters) throw new Error("Duplicated character ID");
  characters[id] = character;
}

addCharacter(
  new Character(0, "Arion Sherwind", "Tenma Matsukaze", "male", [
    teams[1],
    teams[2],
    teams[3],
    teams[4],
    teams[5],
  ])
);
addCharacter(
  new Character(1, "Victor Blade", "Kyosuke Tsurugi", "male", [
    teams[1],
    teams[3],
    teams[4],
    teams[5],
    teams[6],
    teams[7],
  ])
);

addCharacter(
  new Character(2, "Samguk Han", "Sangoku Taichi", "male", [teams[1]])
);

addCharacter(
  new Character(3, "Subaru Honda", "Kurumada Gouichi", "male", [teams[1]])
);

addCharacter(
  new Character(4, "Gabriel Garcia", "Kirino Ranmaru", "male", [
    teams[1],
    teams[3],
    teams[4],
  ])
);

addCharacter(
  new Character(5, "Wanli Changcheng", "Amagi Daichi", "male", [teams[1]])
);

addCharacter(
  new Character(6, "Jean-Pierre Lapin", "Nishinozo Shinsuke", "male", [
    teams[1],
    teams[1],
    teams[3],
    teams[4],
    teams[5],
  ])
);
