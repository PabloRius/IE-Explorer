import {
  Arrow,
  Chest,
  Duel,
  NPC,
  Scout,
  TaisenRoute,
  Topic,
} from "@/components/icons";
import { MapView } from "@/components/MapView";
import { getImageUrl } from "@/config";
import { chests, routes, topics } from "@/database";
import { duels } from "@/database/duels";
import { Link, Route, Routes } from "react-router";

const TITLE = "Present Inazuma";

export function PresentInazuma() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <MapView
            title={TITLE}
            imageSrc={getImageUrl(
              "maps/IEGOCS/PresentInazuma/MainBackground.png"
            )}
            width={320}
            height={216}
            markers={[
              <Link to="RiversideNorth">
                <image
                  className="marker"
                  x={184}
                  y={11}
                  width={57}
                  height={42}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/WindsorManorShadow.png"
                  )}
                />
              </Link>,
              <Link to="RiversidePitch">
                <image
                  className="marker"
                  x={247}
                  y={65}
                  width={41}
                  height={35}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/RiversideShadow.png"
                  )}
                />
              </Link>,
              <Link to="InazumaTower">
                <image
                  className="marker"
                  x={173}
                  y={151}
                  width={86}
                  height={56}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/TowerShadow.png"
                  )}
                />
              </Link>,
              <Link to="RaimonPitch">
                <image
                  className="marker"
                  x={147.3}
                  y={68.8}
                  width={68}
                  height={49}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/RaimonJrHighShadow.png"
                  )}
                />
              </Link>,
              <Link to="ShoppingAreaSouth">
                <image
                  className="marker"
                  x={66}
                  y={114}
                  width={52}
                  height={34}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/ShoppingAreaShadow.png"
                  )}
                />
              </Link>,
              <Link to="InazumaPark">
                <image
                  className="marker"
                  x={12}
                  y={100}
                  width={32}
                  height={32}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/ParkShadow.png"
                  )}
                />
              </Link>,
              <Link to="Hospital">
                <image
                  className="marker"
                  x={83}
                  y={40}
                  width={43}
                  height={35}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/HospitalShadow.png"
                  )}
                />
              </Link>,
              <Link to="RiccardosStreet">
                <image
                  className="marker"
                  x={23}
                  y={33}
                  width={51}
                  height={33}
                  href={getImageUrl(
                    "maps/IEGOCS/PresentInazuma/DiRigoHouseShadow.png"
                  )}
                />
              </Link>,
            ]}
          />
        }
      />

      {/* Windsor manor */}
      <Route path="WindsorManorGF" element={<WindsorManorGF />} />
      <Route path="WindsorManor1F" element={<WindsorManor1F />} />
      <Route path="WindsorManor2F" element={<WindsorManor2F />} />
      <Route path="WindsorManor001" element={<WindsorManor001 />} />
      <Route path="WindsorManor002" element={<WindsorManor002 />} />
      <Route path="WindsorManor003" element={<WindsorManor003 />} />
      <Route path="WindsorManor004" element={<WindsorManor004 />} />
      <Route path="WindsorManor005" element={<WindsorManor005 />} />
      <Route path="WindsorManor006" element={<WindsorManor006 />} />
      <Route path="WindsorManor101" element={<WindsorManor101 />} />
      <Route path="WindsorManor102" element={<WindsorManor102 />} />
      <Route path="WindsorManor103" element={<WindsorManor103 />} />
      <Route path="WindsorManor104" element={<WindsorManor104 />} />
      <Route path="WindsorManor105" element={<WindsorManor105 />} />
      <Route path="WindsorManor106" element={<WindsorManor106 />} />
      <Route path="WindsorManor201" element={<WindsorManor201 />} />
      <Route
        path="WindsorManorSecretRoom"
        element={<WindsorManorSecretRoom />}
      />

      {/* Riverside */}
      <Route path="RiversideNorth" element={<RiversideNorth />} />
      <Route path="RiversidePitch" element={<RiversidePitch />} />
      <Route path="RiversideStation" element={<RiversideStation />} />

      {/* Station */}
      <Route path="Station" element={<Station />} />

      {/* Raimon */}
      <Route path="RaimonPitch" element={<RaimonPitch />} />
      <Route path="OldClubRoom" element={<OldClubRoom />} />
      <Route path="OldClubSecretRoom" element={<OldClubSecretRoom />} />
      <Route path="MainBldGF" element={<MainBldGF />} />
      <Route path="MainBld1F" element={<MainBld1F />} />
      <Route path="MainBld2F" element={<MainBld2F />} />
      <Route path="MainBld3F" element={<MainBld3F />} />
      <Route path="RaimonWest" element={<RaimonWest />} />
      <Route path="WestBldGF" element={<WestBldGF />} />
      <Route path="WestBld1F" element={<WestBld1F />} />
      <Route path="WestBld2F" element={<WestBld2F />} />
      <Route path="RaimonCarPark" element={<RaimonCarPark />} />
      <Route path="RaimonGym" element={<RaimonGym />} />
      <Route path="RaimonGymInside" element={<RaimonGymInside />} />
      <Route path="RaimonDojo" element={<RaimonDojo />} />
      <Route path="RaimonDojoInside" element={<RaimonDojoInside />} />
      <Route path="RaimonStadium" element={<RaimonStadium />} />

      {/* Shopping Area */}
      <Route path="ShoppingAreaSouth" element={<ShoppingAreaSouth />} />
      <Route path="ShoppingAreaOutskirts" element={<ShoppingAreaOutskirts />} />
      <Route path="ShoppingAreaArcade" element={<ShoppingAreaArcade />} />
      <Route path="ShoppingAreaAlley" element={<ShoppingAreaAlley />} />
      <Route path="GameCentre" element={<GameCentre />} />
      <Route path="HackersHideout" element={<HackersHideout />} />
      <Route path="ShoppingAreaNorth" element={<ShoppingAreaNorth />} />
      <Route path="MagicMoves" element={<MagicMoves />} />
      <Route path="GMart" element={<GMart />} />
      <Route path="KoolKit" element={<KoolKit />} />
      <Route path="RaiRaiNoodles" element={<RaiRaiNoodles />} />

      {/* Inazuma Tower*/}
      <Route path="InazumaTower" element={<InazumaTower />} />

      {/* Inazuma Park */}
      <Route path="InazumaPark" element={<InazumaPark />} />

      {/* Hospital */}
      <Route path="Hospital" element={<Hospital />} />
      <Route path="HospitalGF" element={<HospitalGF />} />
      <Route path="Hospital1F" element={<Hospital1F />} />
      <Route path="Hospital1FOutside" element={<Hospital1FOutside />} />
      <Route path="Hospital2F" element={<Hospital2F />} />

      {/* Di Rigo House */}
      <Route path="RiccardosStreet" element={<RiccardosStreet />} />
      <Route path="DiRigoResidenceGF" element={<DiRigoResidenceGF />} />
      <Route path="DiRigoResidence1F" element={<DiRigoResidence1F />} />
      <Route path="DiRigoResidence2F" element={<DiRigoResidence2F />} />
    </Routes>
  );
}

function WindsorManorGF() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: GF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/0.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={149}
          y={63}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
        <Arrow
          x={160}
          y={140}
          direction="down"
          size="sm"
          to="../RiversideNorth"
        />,
        <Arrow
          x={82}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor001"
        />,
        <Arrow
          x={102}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor002"
        />,
        <Arrow
          x={123}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor003"
        />,
        <Arrow
          x={188}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor004"
        />,
        <Arrow
          x={209}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor005"
        />,
        <Arrow
          x={230}
          y={80}
          direction="up"
          size="sm"
          to="../WindsorManor006"
        />,
      ]}
    />
  );
}

function WindsorManor1F() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: 1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/3.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={149}
          y={84}
          direction="down"
          size="sm"
          to="../WindsorManor2F"
        />,
        <Arrow
          x={149}
          y={96}
          direction="up"
          size="sm"
          to="../WindsorManorGF"
        />,
        <Arrow
          x={82}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor101"
        />,
        <Arrow
          x={102}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor102"
        />,
        <Arrow
          x={123}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor103"
        />,
        <Arrow
          x={188}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor104"
        />,
        <Arrow
          x={209}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor105"
        />,
        <Arrow
          x={230}
          y={101}
          direction="up"
          size="sm"
          to="../WindsorManor106"
        />,
      ]}
    />
  );
}

function WindsorManor2F() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: 2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/4.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={160}
          y={88}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
        <Arrow
          x={178}
          y={106}
          direction="up"
          size="sm"
          to="../WindsorManorSecretRoom"
        />,
        <Arrow
          x={113}
          y={106}
          direction="up"
          size="sm"
          to="../WindsorManor201"
        />,
      ]}
    />
  );
}

function WindsorManorSecretRoom() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Secret Room`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/5.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={115} y={138} direction="down" to="../WindsorManor2F" />,
      ]}
    />
  );
}

function WindsorManor001() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 001`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/6.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor002() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 002`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/7.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor003() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 003`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/8.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor004() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 004`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/9.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor005() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 005`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/10.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor006() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 006`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/11.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManorGF"
        />,
      ]}
    />
  );
}

function WindsorManor101() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 101`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/12.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor102() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 102`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/13.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor103() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 103`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/14.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor104() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 104`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/15.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor105() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 105`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/16.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor106() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 106`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/17.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor1F"
        />,
      ]}
    />
  );
}

function WindsorManor201() {
  return (
    <MapView
      title={`${TITLE} - Windsor Manor: Room 201`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/18.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={143}
          y={140}
          direction="down"
          size="sm"
          to="../WindsorManor2F"
        />,
      ]}
    />
  );
}

function RiversideNorth() {
  return (
    <MapView
      title={`${TITLE} - Riverside: North`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/1.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={155} y={55} direction="up" to="../WindsorManorGF" />,
        <Arrow x={187} y={204} direction="down" to="../RiversidePitch" />,
        <Topic x={172} y={104} topic={topics[5]} />,
        <Topic x={75} y={105} topic={topics[6]} />,
        <Duel x={235} y={86} duel={duels[3]} />,
        <Chest x={246} y={90} chest={chests[4]} />,
      ]}
    />
  );
}

function RiversidePitch() {
  return (
    <MapView
      title={`${TITLE} - Riverside: Pitch`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/2.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={218} y={2} direction="up" to="../RiversideNorth" />,
        <Arrow x={105} y={46} direction="left" to="../Station" />,
        <TaisenRoute x={145} y={107} route={routes[0]} />,
        <Topic x={111} y={172} topic={topics[3]} />,
        <Topic x={206} y={194} topic={topics[4]} />,
        <NPC x={148} y={190} />,
        <NPC x={101} y={119} />,
        <NPC x={192} y={112} />,
        <NPC x={165} y={96} />,
        <NPC x={121} y={31} />,
        <NPC x={167} y={47} />,
        <Scout x={210} y={58} />,
        <Duel x={187} y={34} duel={duels[1]} />,
        <Duel x={167} y={182} duel={duels[2]} />,
      ]}
    />
  );
}

function RiversideStation() {
  return (
    <MapView
      title={`${TITLE} - Riverside: Station`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/20.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={210} y={101} direction="right" to="../Station" />,
        <Arrow x={2} y={78} direction="left" to="../RaimonPitch" />,
      ]}
    />
  );
}

function Station() {
  return (
    <MapView
      title={`${TITLE} - Inazuma Station`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/19.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={221} y={104} direction="right" to="../RiversidePitch" />,
        <Arrow x={102} y={104} direction="left" to="../RiversideStation" />,
        <Topic x={214} y={120} topic={topics[7]} />,
        <Scout x={155} y={100} />,
      ]}
    />
  );
}

function RaimonPitch() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Pitch`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/21.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={314} y={197} direction="right" to="../RiversideStation" />,
        <Arrow x={3} y={197} direction="left" to="../ShoppingAreaSouth" />,
        <Arrow x={90} y={78} direction="up" size="sm" to="../OldClubRoom" />,
        <Arrow x={38} y={78} direction="left" to="../RaimonWest" />,
        <Arrow x={282} y={78} direction="right" to="../RaimonGym" />,
        <Arrow x={160} y={42} direction="up" to="../MainBldGF" />,
      ]}
    />
  );
}

function OldClubRoom() {
  return (
    <MapView
      title={`${TITLE} - Old Club Room`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/22.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={178}
          y={125}
          direction="down"
          size="sm"
          to="../RaimonPitch"
        />,
        <Arrow
          x={147}
          y={99}
          direction="up"
          size="sm"
          to="../OldClubSecretRoom"
        />,
      ]}
    />
  );
}

function OldClubSecretRoom() {
  return (
    <MapView
      title={`${TITLE} - Old Club Secret Room`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/23.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={174}
          y={110}
          direction="down"
          size="sm"
          to="../OldClubRoom"
        />,
      ]}
    />
  );
}

function MainBldGF() {
  return (
    <MapView
      title={`${TITLE} - Main Building GF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/24.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={160} y={164} direction="down" to="../RaimonPitch" />,
        <Arrow x={46} y={122} direction="left" to="../RaimonWest" />,
        <Arrow x={273} y={122} direction="right" to="../RaimonGym" />,
        <Arrow x={169} y={60} direction="up" size="sm" to="../MainBld1F" />,
        <Arrow x={130} y={42} direction="up" to="../RaimonStadium" />,
        <Arrow x={190} y={42} direction="up" to="../RaimonStadium" />,
      ]}
    />
  );
}

function MainBld1F() {
  return (
    <MapView
      title={`${TITLE} - Main Building 1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/25.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={151} y={66} direction="down" size="sm" to="../MainBld2F" />,
        <Arrow x={151} y={76} direction="up" size="sm" to="../MainBldGF" />,
        <Arrow x={160} y={50} direction="up" size="sm" to="../RaimonStadium" />,
        <Arrow x={46} y={130} direction="left" to="../WestBld1F" />,
        <Arrow x={273} y={130} direction="right" to="../RaimonGymInside" />,
      ]}
    />
  );
}

function MainBld2F() {
  return (
    <MapView
      title={`${TITLE} - Main Building 2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/26.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={151} y={66} direction="down" size="sm" to="../MainBld3F" />,
        <Arrow x={151} y={76} direction="up" size="sm" to="../MainBld1F" />,
      ]}
    />
  );
}

function MainBld3F() {
  return (
    <MapView
      title={`${TITLE} - Main Building 3F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/27.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={169} y={66} direction="down" size="sm" to="../MainBld2F" />,
      ]}
    />
  );
}

function RaimonWest() {
  return (
    <MapView
      title={`${TITLE} - Raimon: West`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/28.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={210} y={141} direction="right" to="../RaimonPitch" />,
        <Arrow x={137} y={91} direction="left" to="../WestBldGF" />,
        <Arrow x={176} y={21} direction="right" to="../RaimonStadium" />,
        <Arrow x={150} y={2} direction="up" to="../RaimonCarPark" />,
      ]}
    />
  );
}

function WestBldGF() {
  return (
    <MapView
      title={`${TITLE} - West Building GF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/29.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={215} y={96} direction="right" to="../RaimonWest" />,
        <Arrow x={146} y={101} direction="right" size="sm" to="../WestBld1F" />,
      ]}
    />
  );
}

function WestBld1F() {
  return (
    <MapView
      title={`${TITLE} - West Building 1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/30.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={142} y={115} direction="right" size="sm" to="../WestBld2F" />,
        <Arrow x={152} y={115} direction="left" size="sm" to="../WestBldGF" />,
        <Arrow x={192} y={29} direction="right" to="../MainBld1F" />,
      ]}
    />
  );
}

function WestBld2F() {
  return (
    <MapView
      title={`${TITLE} - West Building 2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/31.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={144} y={100} direction="right" size="sm" to="../WestBld1F" />,
      ]}
    />
  );
}

function RaimonCarPark() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Car Park`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/32.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={161} y={204} direction="down" to="../RaimonWest" />,
        <Arrow x={68} y={74} direction="left" to="../ShoppingAreaNorth" />,
      ]}
    />
  );
}

function RaimonGym() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Gym`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/33.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={89} y={137} direction="left" to="../RaimonPitch" />,
        <Arrow x={160} y={94} direction="right" to="../RaimonGymInside" />,
        <Arrow x={141} y={2} direction="up" to="../RaimonDojo" />,
        <Arrow x={109} y={21} direction="left" to="../RaimonStadium" />,
      ]}
    />
  );
}

function RaimonGymInside() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Gym inside`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/34.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={97} y={43} direction="left" to="../MainBld1F" />,
        <Arrow x={97} y={112} direction="left" to="../RaimonGym" />,
      ]}
    />
  );
}

function RaimonDojo() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Dojo`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/35.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={147} y={204} direction="down" to="../RaimonGym" />,
        <Arrow x={179} y={109} direction="right" to="../RaimonDojoInside" />,
      ]}
    />
  );
}

function RaimonDojoInside() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Dojo inside`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/36.png")}
      width={320}
      height={208}
      markers={[<Arrow x={104} y={104} direction="left" to="../RaimonDojo" />]}
    />
  );
}

function RaimonStadium() {
  return (
    <MapView
      title={`${TITLE} - Raimon: Stadium`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/37.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={13} y={120} direction="left" to="../RaimonWest" />,
        <Arrow x={300} y={120} direction="right" to="../RaimonGym" />,
        <Arrow x={122} y={141} direction="down" to="../MainBldGF" />,
        <Arrow x={198} y={141} direction="down" to="../MainBldGF" />,
        <Arrow x={160} y={172} direction="down" to="../MainBld1F" />, // TODO: missing route
      ]}
    />
  );
}

function ShoppingAreaSouth() {
  return (
    <MapView
      title={`${TITLE} - Shopping Area: South`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/38.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={318} y={69} direction="right" to="../RaimonPitch" />,
        <Arrow
          x={160}
          y={195}
          direction="down"
          to="../ShoppingAreaOutskirts"
        />,
        <Arrow x={4} y={69} direction="left" to="../InazumaPark" />,
        <Arrow x={160} y={53} direction="up" to="../ShoppingAreaArcade" />,
        <Arrow x={78} y={46} direction="up" to="../ShoppingAreaAlley" />,
        <Arrow x={230} y={52} direction="up" size="sm" to="../MagicMoves" />,
      ]}
    />
  );
}

function ShoppingAreaOutskirts() {
  return (
    <MapView
      title={`${TITLE} - Shopping Area: Outskirts`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/39.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={84} y={176} direction="left" to="../ShoppingAreaSouth" />,
        <Arrow x={306} y={49} direction="right" to="../InazumaTower" />,
      ]}
    />
  );
}

function ShoppingAreaArcade() {
  return (
    <MapView
      title={`${TITLE} - Shopping Area: Arcade`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/40.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={161} y={206} direction="down" to="../ShoppingAreaSouth" />,
        <Arrow x={161} y={2} direction="up" to="../ShoppingAreaNorth" />,
        <Arrow x={129} y={98} direction="left" to="../ShoppingAreaAlley" />,
        <Arrow
          x={149}
          y={114}
          direction="left"
          size="sm"
          to="../RaiRaiNoodles"
        />,
        <Arrow x={170} y={160} direction="right" size="sm" to="../GMart" />,
      ]}
    />
  );
}

function ShoppingAreaAlley() {
  return (
    <MapView
      title={`${TITLE} - Shopping Area: Alley`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/41.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={198} y={103} direction="right" to="../ShoppingAreaArcade" />,
        <Arrow x={189} y={136} direction="right" to="../GameCentre" />,
        <Arrow x={133} y={205} direction="down" to="../ShoppingAreaSouth" />,
        <Arrow x={159} y={2} direction="up" to="../ShoppingAreaNorth" />,
      ]}
    />
  );
}

function GameCentre() {
  return (
    <MapView
      title={`${TITLE} - Game Centre`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/42.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={85} y={104} direction="left" to="../ShoppingAreaAlley" />,
        <Arrow x={222} y={60} direction="up" to="../HackersHideout" />,
      ]}
    />
  );
}

function HackersHideout() {
  return (
    <MapView
      title={`${TITLE} - Hackers' Hideout`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/43.png")}
      width={320}
      height={208}
      markers={[<Arrow x={160} y={145} direction="down" to="../GameCentre" />]}
    />
  );
}

function ShoppingAreaNorth() {
  return (
    <MapView
      title={`${TITLE} - Shopping Area: North`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/44.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={96} y={202} direction="down" to="../ShoppingAreaAlley" />,
        <Arrow x={162} y={168} direction="down" to="../ShoppingAreaArcade" />,
        <Arrow x={5} y={143} direction="left" to="../RiccardosStreet" />,
        <Arrow x={160} y={4} direction="up" to="../Hospital" />,
        <Arrow x={315} y={143} direction="right" to="../RaimonCarPark" />,
        <Arrow x={120} y={121} direction="up" size="sm" to="../KoolKit" />,
      ]}
    />
  );
}

function RiccardosStreet() {
  return (
    <MapView
      title={`${TITLE} - Riccardo's Street`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/45.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={160} y={205} direction="down" to="../ShoppingAreaNorth" />,
        <Arrow x={160} y={17} direction="up" to="../DiRigoResidenceGF" />,
      ]}
    />
  );
}

function DiRigoResidenceGF() {
  return (
    <MapView
      title={`${TITLE} - Di Rigo Residence GF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/46.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={160} y={91} direction="up" to="../DiRigoResidence1F" />,
        <Arrow x={160} y={151} direction="down" to="../RiccardosStreet" />,
      ]}
    />
  );
}

function DiRigoResidence1F() {
  return (
    <MapView
      title={`${TITLE} - Di Rigo Residence 1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/47.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={160} y={93} direction="down" to="../DiRigoResidenceGF" />,
        <Arrow x={134} y={65} direction="right" to="../DiRigoResidence2F" />,
      ]}
    />
  );
}

function DiRigoResidence2F() {
  return (
    <MapView
      title={`${TITLE} - Di Rigo Residence 2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/48.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={126} y={84} direction="left" to="../DiRigoResidenceGF" />,
      ]}
    />
  );
}

function MagicMoves() {
  return (
    <MapView
      title={`${TITLE} - Magic Moves`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/49.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={160}
          y={151}
          direction="down"
          size="sm"
          to="../ShoppingAreaSouth"
        />,
      ]}
    />
  );
}

function GMart() {
  return (
    <MapView
      title={`${TITLE} - G-Mart`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/50.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={119}
          y={90}
          direction="left"
          size="sm"
          to="../ShoppingAreaArcade"
        />,
      ]}
    />
  );
}

function KoolKit() {
  return (
    <MapView
      title={`${TITLE} - Kool Kit`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/51.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={160}
          y={163}
          direction="down"
          size="sm"
          to="../ShoppingAreaNorth"
        />,
      ]}
    />
  );
}

function RaiRaiNoodles() {
  return (
    <MapView
      title={`${TITLE} - Rai Rai Noodles`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/52.png")}
      width={320}
      height={208}
      markers={[
        <Arrow
          x={174}
          y={125}
          direction="down"
          size="sm"
          to="../ShoppingAreaArcade"
        />,
      ]}
    />
  );
}

function InazumaTower() {
  return (
    <MapView
      title={`${TITLE} - Inazuma Tower`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/59.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={9} y={139} direction="left" to="../ShoppingAreaOutskirts" />,
      ]}
    />
  );
}

function InazumaPark() {
  return (
    <MapView
      title={`${TITLE} - Inazuma Park`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/58.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={316} y={177} direction="right" to="../ShoppingAreaSouth" />,
      ]}
    />
  );
}

function Hospital() {
  return (
    <MapView
      title={`${TITLE} - Hospital`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/53.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={160} y={198} direction="down" to="../ShoppingAreaNorth" />,
        <Arrow x={160} y={60} direction="up" to="../HospitalGF" />,
      ]}
    />
  );
}

function HospitalGF() {
  return (
    <MapView
      title={`${TITLE} - Hospital: GF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/54.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={102} y={55} direction="left" to="../Hospital1F" />,
        <Arrow x={160} y={162} direction="down" to="../Hospital" />,
      ]}
    />
  );
}

function Hospital1F() {
  return (
    <MapView
      title={`${TITLE} - Hospital: 1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/55.png")}
      width={320}
      height={208}
      markers={[
        <Arrow x={70} y={56} direction="left" to="../Hospital2F" />,
        <Arrow x={70} y={71} direction="left" to="../HospitalGF" />,
        <Arrow x={133} y={79} direction="down" to="../Hospital1FOutside" />,
      ]}
    />
  );
}

function Hospital1FOutside() {
  return (
    <MapView
      title={`${TITLE} - Hospital: 1F outside`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/56.png")}
      width={320}
      height={208}
      markers={[<Arrow x={160} y={65} direction="up" to="../Hospital1F" />]}
    />
  );
}

function Hospital2F() {
  return (
    <MapView
      title={`${TITLE} - Hospital: 2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/57.png")}
      width={320}
      height={208}
      markers={[<Arrow x={128} y={103} direction="left" to="../Hospital1F" />]}
    />
  );
}
