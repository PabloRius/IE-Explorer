import { Character } from "@database.types";
import { teams } from ".";

export const characters: Record<number, Character> = {};

function addCharacter(character: Character) {
  const { id } = character;
  if (id in characters) throw new Error("Duplicated character ID");
  characters[id] = character;
}

addCharacter(
  new Character(0, "Arion Sherwind", "Tenma Matsukaze", "Arion", "male", [
    teams[1],
    teams[2],
    teams[3],
    teams[4],
    teams[5],
  ])
);
addCharacter(
  new Character(1, "Victor Blade", "Kyosuke Tsurugi", "Victor", "male", [
    teams[1],
    teams[3],
    teams[4],
    teams[5],
    teams[6],
    teams[7],
  ])
);

addCharacter(
  new Character(2, "Samguk Han", "Sangoku Taichi", "Samguk", "male", [teams[1]])
);

addCharacter(
  new Character(3, "Subaru Honda", "Kurumada Gouichi", "Subaru", "male", [
    teams[1],
  ])
);

addCharacter(
  new Character(4, "Gabriel Garcia", "Kirino Ranmaru", "Gabi", "male", [
    teams[1],
    teams[3],
    teams[4],
  ])
);

addCharacter(
  new Character(5, "Wanli Changcheng", "Amagi Daichi", "Wanli", "male", [
    teams[1],
  ])
);

addCharacter(
  new Character(6, "Jean-Pierre Lapin", "Nishinozo Shinsuke", "JP", "male", [
    teams[1],
    teams[1],
    teams[3],
    teams[4],
    teams[5],
  ])
);

addCharacter(new Character(7, "Evita Gowell", "Paa", "Goe", "female", []));

addCharacter(new Character(8, "Amy Sargent", "Mio", "Amy", "female", []));

addCharacter(new Character(9, "Aaron Newgate", "Shintou", "Aaron", "male", []));

addCharacter(new Character(10, "Sloan Steddy", "Guu", "Steddy", "male", []));

addCharacter(new Character(11, "Frank Redmond", "Choki", "Reddy", "male", []));

addCharacter(new Character(12, "Ted Ledd", "Pencil", "HB", "male", []));

addCharacter(
  new Character(13, "Perla Sizzors", "Scissor", "Sizzors", "female", [])
);

addCharacter(new Character(14, "Sita Square", "Tri", "Square", "female", []));

addCharacter(
  new Character(15, "Pero Tractor", "Bundoki", "Tractor", "male", [])
);

addCharacter(
  new Character(16, "Nuno Vertigo", "Hachimaki", "Vertigo", "male", [])
);

addCharacter(
  new Character(17, "Abel Bumpkin", "Shimen", "Bumpkin", "male", [])
);

addCharacter(new Character(18, "Tuff Weedon", "Genta", "Tuff", "male", []));

addCharacter(
  new Character(19, "Gen Tillmann", "Kyoshou", "Tillmann", "male", [])
);

addCharacter(
  new Character(20, "Orel Knighter", "Hard", "Knighter", "male", [])
);

addCharacter(new Character(21, "Ruff Weedon", "Ganta", "Ruff", "male", []));
