import { chests, photos, routes, shops, topics } from "@/database";
import { Link, Route, Routes } from "react-router";

import { MapView } from "@/components/MapView";
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
              <Link to="Parking">
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
              </Link>,
              <Link to="Field">
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
              </Link>,
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
        <Arrow x={264} y={3} direction="up" to="../Entrance" />,
        <Photo x={76} y={147} photo={photos[0]} />,
        <Topic x={177} y={157} topic={topics[2]} />,
        <Shop x={191} y={69} shop={shops[0]} />,
        // { marker: <Shop x={216} y={69} shop={shops[1]} />, noredirect: true },
        // { marker: <Shop x={239} y={69} shop={shops[2]} />, noredirect: true },
        <Chest x={96} y={104} chest={chests[2]} />,
        <NPC x={119} y={135} />,
        <NPC x={195} y={91} />,
        <NPC x={276} y={70} />,
        <Duel x={206} y={142} duel={duels[0]} />,
        <Scout x={222} y={95} />,
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
        <Arrow x={197} y={203} direction="down" to="../Parking" />,
        <Arrow x={159} y={24} direction="up" to="../Hallway" />,
        <Topic x={154} y={83} topic={topics[0]} />,
        <TaisenRoute x={210} y={24} route={routes[0]} />,
        <NPC x={191} y={125} />,
        <NPC x={198} y={118} />,
        <NPC x={146} y={117} />,
        <NPC x={161} y={117} />,
        <NPC x={167} y={55} />,
        <NPC x={137} y={29} />,
        <NPC x={139} y={35} />,
        // { marker: <Duel x={162} y={95} />, noredirect: true },
        // { marker: <Duel x={110} y={27} />, noredirect: true },
        <Scout x={198} y={26} />,
        <Scout x={104} y={37} />,
        <Scout x={127} y={113} />,
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
        <Arrow x={160} y={10} direction="up" to="../Field" />,
        <Arrow x={160} y={199} direction="down" to="../Entrance" />,
        <Chest x={122} y={143} chest={chests[3]} />,
        <NPC x={157} y={122} />,
        <NPC x={163} y={122} />,
        <NPC x={196} y={118} />,
        <NPC x={149} y={70} />,
        <Topic x={177} y={92} topic={topics[1]} />,
        <Recover x={189} y={93} />,
        <Scout x={115} y={109} />,
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
        <Arrow x={160} y={167} direction="down" to="../Hallway" />,
        // { marker: <Duel x={127} y={65} />, noredirect: true },
      ]}
    />
  );
}
