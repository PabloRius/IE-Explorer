import { chests, photos, routes, shops, topics } from "@/database";
import { Route, Routes } from "react-router";

import { MapView } from "@/components/MapView";
import { DuelModal } from "@/components/modals/Duel";
import { ShopModal } from "@/components/modals/Shop";
import { getImageUrl } from "@/config";
import { duels } from "@/database/duels";
import {
  Arrow,
  Chest,
  Duel,
  NPC,
  Photo,
  Recover,
  Scout,
  Shop,
  TaisenRoute,
  Topic,
} from "@components/icons";
import { ChestModal, PhotoTopicModal, RouteModal } from "@components/modals";

const TITLE = "Holy Road Stadium";

export function HolyRoadStadium() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <MapView
            title={TITLE}
            imageSrc={getImageUrl(
              "maps/IEGOCS/HolyRoadStadium/MainBackground.png"
            )}
            width={320}
            height={216}
            markers={[
              {
                marker: (
                  <image
                    className="marker"
                    x={97}
                    y={154}
                    width={74}
                    height={43}
                    href={getImageUrl(
                      "maps/IEGOCS/HolyRoadStadium/ParkingShadow.png"
                    )}
                  />
                ),
                path: "Parking",
                label: `${TITLE} - Parking`,
              },
              {
                marker: (
                  <image
                    className="marker"
                    x={106}
                    y={12}
                    width={137}
                    height={111}
                    href={getImageUrl(
                      "maps/IEGOCS/HolyRoadStadium/StadiumShadow.png"
                    )}
                  />
                ),
                path: "Field",
                label: `${TITLE} - Field`,
              },
            ]}
          />
        }
      />
      <Route path="Parking" element={<Parking />} />
      <Route path="Entrance" element={<Entrance />} />
      <Route path="Hallway" element={<Hallway />} />
      <Route path="Field" element={<Field />} />
    </Routes>
  );
}

export function Parking() {
  return (
    <MapView
      title={`${TITLE} - Parking`}
      imageSrc={getImageUrl("maps/IEGOCS/HolyRoadStadium/0.png")}
      width={320}
      height={208}
      markers={[
        {
          marker: <Arrow x={264} y={3} direction="up" />,
          path: "../Entrance",
          label: `${TITLE} - Entrance`,
        },
        {
          marker: <Photo x={76} y={147} photo={photos[0]} />,
          noredirect: true,
          modalContent: <PhotoTopicModal content={photos[0]} />,
          modalTitle: photos[0].name,
        },
        {
          marker: <Topic x={177} y={157} topic={topics[2]} />,
          noredirect: true,
          modalContent: <PhotoTopicModal content={topics[2]} />,
          modalTitle: topics[2].name,
        },
        {
          marker: <Shop x={191} y={69} shop={shops[0]} />,
          noredirect: true,
          modalContent: <ShopModal shop={shops[0]} />,
          modalTitle: "Equipment Shop",
        },
        // { marker: <Shop x={216} y={69} shop={shops[1]} />, noredirect: true },
        // { marker: <Shop x={239} y={69} shop={shops[2]} />, noredirect: true },
        {
          marker: <Chest x={96} y={104} chest={chests[2]} />,
          noredirect: true,
          modalContent: <ChestModal chest={chests[2]} />,
          modalTitle: chests[2].content.name,
        },
        { marker: <NPC x={119} y={135} />, noredirect: true },
        { marker: <NPC x={195} y={91} />, noredirect: true },
        { marker: <NPC x={276} y={70} />, noredirect: true },
        {
          marker: <Duel x={206} y={142} />,
          noredirect: true,
          modalContent: <DuelModal duel={duels[0]} />,
          modalTitle: duels[0].name,
        },
        { marker: <Scout x={222} y={95} />, noredirect: true },
      ]}
    />
  );
}

export function Entrance() {
  return (
    <MapView
      title={`${TITLE} - Parking`}
      imageSrc={getImageUrl("maps/IEGOCS/HolyRoadStadium/1.png")}
      width={320}
      height={208}
      markers={[
        {
          marker: <Arrow x={197} y={203} direction="down" />,
          path: "../Parking",
          label: `${TITLE} - Parking`,
        },
        {
          marker: <Arrow x={159} y={24} direction="up" />,
          path: "../Hallway",
          label: `${TITLE} - Hallway`,
        },
        {
          marker: <Topic x={154} y={83} topic={topics[0]} />,
          noredirect: true,
          modalContent: <PhotoTopicModal content={topics[0]} />,
          modalTitle: topics[0].name,
        },
        {
          marker: <TaisenRoute x={210} y={24} route={routes[0]} />,
          noredirect: true,
          modalContent: <RouteModal route={routes[0]} />,
          modalTitle: routes[0].name,
        },
        { marker: <NPC x={191} y={125} />, noredirect: true },
        { marker: <NPC x={198} y={118} />, noredirect: true },
        { marker: <NPC x={146} y={117} />, noredirect: true },
        { marker: <NPC x={161} y={117} />, noredirect: true },
        { marker: <NPC x={167} y={55} />, noredirect: true },
        { marker: <NPC x={137} y={29} />, noredirect: true },
        { marker: <NPC x={139} y={35} />, noredirect: true },
        { marker: <Duel x={162} y={95} />, noredirect: true },
        { marker: <Duel x={110} y={27} />, noredirect: true },
        { marker: <Scout x={198} y={26} />, noredirect: true },
        { marker: <Scout x={104} y={37} />, noredirect: true },
        { marker: <Scout x={127} y={113} />, noredirect: true },
      ]}
    />
  );
}

export function Hallway() {
  return (
    <MapView
      title={`${TITLE} - Hallway`}
      imageSrc={getImageUrl("maps/IEGOCS/HolyRoadStadium/2.png")}
      width={320}
      height={208}
      markers={[
        {
          marker: <Arrow x={160} y={10} direction="up" />,
          path: "../Field",
          label: `${TITLE} - Field`,
        },
        {
          marker: <Arrow x={160} y={199} direction="down" />,
          path: "../Entrance",
          label: `${TITLE} - Entrance`,
        },
        {
          marker: <Chest x={122} y={143} chest={chests[3]} />,
          noredirect: true,
          modalContent: <ChestModal chest={chests[3]} />,
          modalTitle: chests[3].content.name,
        },
        { marker: <NPC x={157} y={122} />, noredirect: true },
        { marker: <NPC x={163} y={122} />, noredirect: true },
        { marker: <NPC x={196} y={118} />, noredirect: true },
        {
          marker: <Topic x={177} y={92} topic={topics[1]} />,
          noredirect: true,
          modalContent: <PhotoTopicModal content={topics[1]} />,
          modalTitle: topics[1].name,
        },
        { marker: <NPC x={149} y={70} />, noredirect: true },
        { marker: <Recover x={189} y={93} />, noredirect: true },
        { marker: <Scout x={115} y={109} />, noredirect: true },
      ]}
    />
  );
}

export function Field() {
  return (
    <MapView
      title={`${TITLE} - Field`}
      imageSrc={getImageUrl("maps/IEGOCS/HolyRoadStadium/3.png")}
      width={320}
      height={208}
      markers={[
        {
          marker: <Arrow x={160} y={167} direction="down" />,
          path: "../Hallway",
          label: `${TITLE} - Hallway`,
        },
        { marker: <Duel x={127} y={65} />, noredirect: true },
      ]}
    />
  );
}
