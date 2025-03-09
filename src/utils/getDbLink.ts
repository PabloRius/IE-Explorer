import {
  Consumable,
  Emblem,
  Equipment,
  Item,
  KeyItem,
  Kit,
  Move,
  PalPackItem,
  Photo,
  Topic,
} from "@/types/database";

export function GetDBLink({ item }: { item: Item }): { dbLink: string } {
  const { id } = item;
  const routePrefix = item instanceof Move ? "/movesandspirits" : "/inventory";
  const baseRoute =
    item instanceof Consumable
      ? "/items/consumables"
      : item instanceof KeyItem
      ? "/items/key_items"
      : item instanceof PalPackItem
      ? "/items/palpack_items"
      : item instanceof Photo
      ? "/items/photos"
      : item instanceof Topic
      ? "/items/topics"
      : item instanceof Equipment
      ? "/equipment"
      : item instanceof Kit
      ? "/kits"
      : item instanceof Emblem
      ? "/emblems"
      : null;
  const routeSuffix = item instanceof Equipment ? "/" + item.type : "";
  return { dbLink: `/database${routePrefix}${baseRoute}${routeSuffix}#${id}` };
}
