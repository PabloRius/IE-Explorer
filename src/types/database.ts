import { getImageUrl } from "@/config";

export type Affinity =
  | "fire"
  | "wood"
  | "wind"
  | "earth"
  | "neutral"
  | "skills";

type MoveType = "shoot" | "dribble" | "block" | "save" | "skill";

type MoveCharacteristic = "long" | "block" | "chain" | "punch";

type EquipmentType = "boots" | "bracelets" | "pendants" | "gloves";

export enum Game {
  "IE" = "Inazuma Eleven",
  "IE2" = "Inazuma Eleven 2",
  "IE3" = "Inazuma Eleven 3",
  "IEGO" = "Inazuma Eleven GO",
  "IEGOCS" = "Inazuma Eleven GO Chrono Stones",
  "IEGOGA" = "Inazuma Eleven GO Galaxy",
  "IEHVR" = "Inazuma Eleven Heroes Victory Road",
}

type ShopType = "purple" | "orange" | "blue";

export type Position = "FW" | "MF" | "DF" | "GK";

export class Item {
  id: number;
  name: string;
  avatar: string;
  game: Game;
  how_to_obtain: Array<HTO>;
  price: number | undefined;
  constructor(
    id: number,
    name: string,
    avatar: string,
    game: Game,
    how_to_obtain: Array<HTO>,
    price?: number
  ) {
    this.id = id;
    this.name = name;
    this.avatar = getImageUrl(`${avatar}.png`);
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
    this.avatar = getImageUrl(`shops/${type}.png`);
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
    how_to_obtain: Array<HTO>,
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
  type: EquipmentType;
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
    this.type = type;
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
    this.photo = getImageUrl(`photos/${id}.png`);
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
    this.photo = getImageUrl(`topics/${id}.png`);
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
    this.avatar = getImageUrl(`emblems/${emblemId}.png`);
    this.game = game;
    this.rewards = rewards;
  }
}

export type ChestRarity = undefined | "silver" | "gold";

export class Chest {
  id: number;
  content: Item;
  rarity: ChestRarity;
  game: Game;

  location: string;
  constructor(
    id: number,
    content: Item,
    game: Game,
    location: string,
    rarity?: ChestRarity
  ) {
    this.id = id;
    this.content = content;
    this.game = game;
    this.rarity = rarity;
    this.location = location;
  }
}
export class Block {
  avatar: string;
  condition: Item | string;
  constructor(condition: Item | string) {
    this.avatar = getImageUrl("routes/Block.png");
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
    this.avatar = getImageUrl("icons/Route.png");
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
type LengthFiveArray<T> = [T, T, T, T, T];

export class Character {
  id: number;
  name: string;
  oriName: string;
  nickname: string;
  gender: "male" | "female" | "other";
  mainAffiliation?: Team;
  affiliations: Team[];
  constructor(
    id: number,
    name: string,
    oriName: string,
    nickname: string,
    gender: "male" | "female" | "other",
    affiliations: Array<Team>
  ) {
    this.id = id;
    this.name = name;
    this.oriName = oriName;
    this.nickname = nickname;
    this.gender = gender;
    this.mainAffiliation = affiliations[0] || undefined;
    this.affiliations = affiliations;
  }
}

export class Player {
  id: number;
  character: Character;
  game: Game;
  stats: Record<string, number>;
  age: "kid" | "adult";
  moves: Move[];
  avatar: string;
  affinity: Affinity;
  position: Position;
  constructor(
    id: number,
    character: Character,
    game: Game,
    stats: Record<string, number>,
    age: "kid" | "adult",
    moves: Move[],
    affinity: Affinity,
    position: Position,
    avatar?: number
  ) {
    this.id = id;
    this.character = character;
    this.game = game;
    this.stats = stats;
    this.age = age;
    this.moves = moves;
    this.avatar = getImageUrl(`players/${avatar || id}.png`);
    this.affinity = affinity;
    this.position = position;
  }
}

export class Duel {
  id: number;
  name: string;
  players: LengthFiveArray<{
    player: Player;
    scoutable: boolean;
    versionExclusive?: string;
  }>;
  rewards: Array<Item>;
  constructor(
    id: number,
    name: string,
    players: LengthFiveArray<{
      player: Player;
      scoutable: boolean;
      versionExclusive?: string;
    }>,
    rewards: Array<Item>
  ) {
    this.id = id;
    this.name = name;
    this.players = players;
    this.rewards = rewards;
  }
}
