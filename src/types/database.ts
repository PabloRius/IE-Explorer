export enum Affinity {
  fire = "fire",
  wood = "wood",
  wind = "wind",
  earth = "earth",
  neutral = "neutral",
  skills = "",
}

export enum MoveType {
  shoot = "shoot",
  dribble = "dribble",
  block = "block",
  catch = "save",
  skill = "skill",
}

export enum MoveCharacteristic {
  chain = "chain",
  long = "long",
  block = "block",
  punch = "punch",
}

export enum EquipmentType {
  boots = "boots",
  bracelets = "bracelets",
  pendants = "pendants",
  gloves = "gloves",
}

export enum Game {
  "IE" = "Inazuma Eleven",
  "IE2" = "Inazuma Eleven 2",
  "IE3" = "Inazuma Eleven 3",
  "IEGO" = "Inazuma Eleven GO",
  "IEGOCS" = "Inazuma Eleven GO Chrono Stones",
  "IEGOGA" = "Inazuma Eleven GO Galaxy",
  "IEHVR" = "Inazuma Eleven Heroes Victory Road",
}

export type ShopType = "purple" | "orange" | "blue";

export class Item {
  id: number;
  name: string;
  avatar: string;
  game: Game;
  how_to_obtain: NonEmptyArray<HTO>;
  price: number | undefined;
  constructor(
    id: number,
    name: string,
    avatar: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>,
    price?: number
  ) {
    this.id = id;
    this.name = name;
    this.avatar = `/src/assets/${avatar}.png`;
    this.game = game;
    this.how_to_obtain = how_to_obtain;
    this.price = price;
  }
}

export class Shop {
  type: ShopType;
  selling: NonEmptyArray<Item>;
  game: Game;
  location: string;
  avatar: string;
  constructor(
    type: ShopType,
    game: Game,
    location: string,
    selling: NonEmptyArray<Item>
  ) {
    this.type = type;
    this.game = game;
    this.location = location;
    this.selling = selling;
    this.avatar = `/src/assets/shops/${type}.png`;
  }
}

export class BlueShop extends Shop {
  constructor(game: Game, location: string, selling: NonEmptyArray<Item>) {
    super("blue", game, location, selling);
  }
}

export class OrangeShop extends Shop {
  constructor(game: Game, location: string, selling: NonEmptyArray<Item>) {
    super("orange", game, location, selling);
  }
}

export class PurpleShop extends Shop {
  constructor(game: Game, location: string, selling: NonEmptyArray<Item>) {
    super("purple", game, location, selling);
  }
}

export class HTO {
  method: string;
  route: string | undefined;
  constructor(method: string, route?: string) {
    this.method = method;
    this.route = route;
  }
}

export class Move extends Item {
  type: MoveType;
  characteristic: MoveCharacteristic | undefined;
  affinity: Affinity;
  attributes: Record<string, number> | Record<string, string>;
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>,
    type: MoveType,
    affinity: Affinity,
    attributes: Record<string, number> | Record<string, string>,
    characteristic?: MoveCharacteristic
  ) {
    const avatar = `items/${type}`;
    super(id, name, avatar, game, how_to_obtain);
    this.type = type;
    this.affinity = affinity;
    this.characteristic = characteristic;
    this.attributes = attributes;
  }
}

export class Spirit extends Item {
  affinity: Affinity;
  attributes: Record<string, number>;
  moveName: string;
  moveAffinity: Affinity;
  moveType: MoveType;
  movePower: number;
  moveCharacteristic: MoveCharacteristic | undefined;
  skillName: string;
  skillEffect: string;
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>,
    affinity: Affinity,
    attributes: Record<string, number>,
    moveName: string,
    moveAffinity: Affinity,
    moveType: MoveType,
    movePower: number,
    skillName: string,
    skillEffect: string,
    moveCharacteristic?: MoveCharacteristic
  ) {
    const avatar = `items/spirit`;
    super(id, name, avatar, game, how_to_obtain);
    this.affinity = affinity;
    this.attributes = attributes;
    this.moveName = moveName;
    this.moveAffinity = moveAffinity;
    this.moveType = moveType;
    this.movePower = movePower;
    this.moveCharacteristic = moveCharacteristic;
    this.skillName = skillName;
    this.skillEffect = skillEffect;
  }
}

export class Consumable extends Item {
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `items/consumables/${id}`;
    super(id, name, avatar, game, how_to_obtain);
  }
}

export class KeyItem extends Item {
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `items/keyitems/${id}`;
    super(id, name, avatar, game, how_to_obtain);
  }
}

export class PalPackItem extends Item {
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `items/palpackitems/${id}`;
    super(id, name, avatar, game, how_to_obtain);
  }
}

export class Equipment extends Item {
  modifiers: Record<string, number>;
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>,
    type: EquipmentType,
    modifiers: Record<string, number>,
    price?: number,
    repAvatar?: number
  ) {
    const avatar = `equipment/${type}/${repAvatar ? repAvatar : id}`;
    super(id, name, avatar, game, how_to_obtain, price);
    this.modifiers = modifiers;
  }
}

export class Photo extends Item {
  photo: string;
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `items/photo`;
    super(id, name, avatar, game, how_to_obtain);
    this.photo = `/src/assets/photos/${id}.png`;
  }
}

export class Topic extends Item {
  photo: string;
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `items/topic`;
    super(id, name, avatar, game, how_to_obtain);
    this.photo = `/src/assets/topics/${id}.png`;
  }
}

export class Emblem extends Item {
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `emblems/${id}`;
    super(id, name, avatar, game, how_to_obtain);
  }
}

export class Kit extends Item {
  constructor(
    id: number,
    name: string,
    game: Game,
    how_to_obtain: NonEmptyArray<HTO>
  ) {
    const avatar = `kits/${id}`;
    super(id, name, avatar, game, how_to_obtain);
  }
}

export class Match {
  id: number;
  name: string;
  avatar: string;
  game: Game;
  rewards: Item[];
  constructor(
    id: number,
    name: string,
    game: Game,
    emblemId: number,
    rewards: Item[]
  ) {
    this.id = id;
    this.name = name;
    this.avatar = `/src/assets/emblems/${emblemId}.png`;
    this.game = game;
    this.rewards = rewards;
  }
}

export class Chest {
  id: number;
  content: Item;
  avatar: string;
  location: string;
  game: Game;
  constructor(
    id: number,
    content: Item,
    game: Game,
    location: string,
    rarity?: "silver" | "gold"
  ) {
    this.id = id;
    this.content = content;
    this.game = game;
    this.avatar = `/src/assets/routes/${rarity || "Chest"}.png`;
    this.location = location;
  }
}
export class Block {
  avatar: string;
  condition: Item | string;
  constructor(condition: Item | string) {
    this.avatar = "/src/assets/routes/Block.png";
    this.condition = condition;
  }
}
type BaseRouteNode = { x: number; y: number };
type MatchRouteNode = BaseRouteNode & { type: "match"; match: Match };
type ChestRouteNode = BaseRouteNode & { type: "chest"; chest: Chest };
type BlockRouteNode = BaseRouteNode & {
  type: "block";
  block: Block;
};
type RouteNode = MatchRouteNode | ChestRouteNode | BlockRouteNode | null;

export class Route {
  id: number;
  name: string;
  avatar: string;
  game: Game;
  location: string;
  coords: RouteNode[];
  constructor(
    id: number,
    name: string,
    game: Game,
    location: string,
    nodes: (
      | [Match | Chest | Block | null, Match | Chest | Block | null]
      | [
          Match | Chest | Block | null,
          Match | Chest | Block | null,
          Match | Chest | Block | null
        ]
    )[]
  ) {
    this.id = id;
    this.name = name;
    this.avatar = "/src/assets/icons/Route.png";
    this.game = game;
    this.location = location;
    this.coords = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (!nodes[i][j]) {
          this.coords.push(null);
        } else {
          if (nodes[i][j] instanceof Match) {
            this.coords.push({
              type: "match",
              x: 50 + 68 * i,
              y: nodes[i].length === 2 ? 77 : 48 + 66 * j,
              match: nodes[i][j] as Match,
            });
          } else if (nodes[i][j] instanceof Chest) {
            this.coords.push({
              type: "chest",
              x: 50 + 68 * i,
              y: nodes[i].length === 2 ? 77 : 48 + 66 * j,
              chest: nodes[i][j] as Chest,
            });
          } else if (nodes[i][j] instanceof Block) {
            this.coords.push({
              type: "block",
              x: 50 + 68 * i,
              y: nodes[i].length === 2 ? 77 : 48 + 66 * j,
              block: nodes[i][j] as Block,
            });
          }
        }
      }
    }
  }
}

export class Team {
  id: number;
  name: string;
  avatar: string;
  constructor(id: number, name: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }
}

type NonEmptyArray<T> = [T, ...T[]];

export class Character {
  id: number;
  name: string;
  oriName: string;
  gender: "male" | "female" | "other";
  mainAffiliation: Team;
  affiliations: Team[];
  constructor(
    id: number,
    name: string,
    oriName: string,
    gender: "male" | "female" | "other",
    affiliations: NonEmptyArray<Team>
  ) {
    this.id = id;
    this.name = name;
    this.oriName = oriName;
    this.gender = gender;
    this.mainAffiliation = affiliations[0];
    this.affiliations = affiliations;
  }
}

export class Player {
  id: number;
  character: Character;
  stats: Record<string, number>;
  moves: Move[];
  game: Game;
  age: "kid" | "adult";
  avatar: string;
  constructor(
    id: number,
    character: Character,
    game: Game,
    stats: Record<string, number>,
    age: "kid" | "adult",
    moves: Move[]
  ) {
    this.id = id;
    this.character = character;
    this.game = game;
    this.avatar = "WIP";
    this.stats = stats;
    this.moves = moves;
    this.age = age;
  }
}
