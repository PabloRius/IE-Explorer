import { Game, HTO, Topic } from "../types/database";

export const topics: Record<number, Topic> = {};

function addTopic(topic: Topic) {
  const { id } = topic;
  if (id in topics) throw new Error("Duplicated topic ID");
  topics[id] = topic;
}

addTopic(
  new Topic(
    0,
    "Coin collecting",
    Game.IEGOCS,
    new HTO("", "HolyRoadStadium/Hallway")
  )
);

addTopic(
  new Topic(
    1,
    "Old Football Frontiers",
    Game.IEGOCS,
    new HTO("", "HolyRoadStadium/Hallway")
  )
);

addTopic(
  new Topic(
    2,
    "Ride like the wind",
    Game.IEGOCS,
    new HTO("", "HolyRoadStadium/Parking")
  )
);

addTopic(
  new Topic(
    3,
    "Football team hopeful",
    Game.IEGOCS,
    new HTO("", "PresentInazuma/RiversidePitch")
  )
);

addTopic(
  new Topic(
    4,
    "Reformed delinquent",
    Game.IEGOCS,
    new HTO("", "PresentInazuma/RiversidePitch")
  )
);

addTopic(
  new Topic(
    5,
    "Bonsai Gardener",
    Game.IEGOCS,
    new HTO("", "PresentInazuma/RiversideNorth")
  )
);

addTopic(
  new Topic(
    6,
    "New shop",
    Game.IEGOCS,
    new HTO("", "PresentInazuma/RiversideNorth")
  )
);

addTopic(
  new Topic(7, "Tearjerker", Game.IEGOCS, new HTO("", "PresentInazuma/Station"))
);
