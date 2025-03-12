import { Arrow } from "@/components/icons";
import { MapView } from "@/components/MapView";
import { getImageUrl } from "@/config";
import { Route, Routes } from "react-router";

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
              {
                marker: (
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
                ),
                path: "RiversideNorth",
                label: `${TITLE} - Windsor Manor`,
              },
              {
                marker: (
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
                ),
                path: "RiversidePitch",
                label: `${TITLE} - Riverside`,
              },
              {
                marker: (
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
                ),
                path: "InazumaTower",
                label: `${TITLE} - Tower`,
              },
              {
                marker: (
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
                ),
                path: "RaimonPitch",
                label: `${TITLE} - Raimon Jr High`,
              },
              {
                marker: (
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
                ),
                path: "ShoppingAreaSouth",
                label: `${TITLE} - Shopping Area`,
              },
              {
                marker: (
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
                ),
                path: "InazumaPark",
                label: `${TITLE} - Park`,
              },
              {
                marker: (
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
                ),
                path: "Hospital",
                label: `${TITLE} - Hospital`,
              },
              {
                marker: (
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
                ),
                path: "RiccardosStreet",
                label: `${TITLE} - Di Rigo House`,
              },
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
        {
          marker: <Arrow x={149} y={63} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
        {
          marker: <Arrow x={160} y={140} direction="down" size="sm" />,
          path: "../RiversideNorth",
          label: `${TITLE} - Riverside: North`,
        },
        {
          marker: <Arrow x={82} y={80} direction="up" size="sm" />,
          path: "../WindsorManor001",
          label: `${TITLE} - Windsor Manor: 001`,
        },
        {
          marker: <Arrow x={102} y={80} direction="up" size="sm" />,
          path: "../WindsorManor002",
          label: `${TITLE} - Windsor Manor: 002`,
        },
        {
          marker: <Arrow x={123} y={80} direction="up" size="sm" />,
          path: "../WindsorManor003",
          label: `${TITLE} - Windsor Manor: 003`,
        },
        {
          marker: <Arrow x={188} y={80} direction="up" size="sm" />,
          path: "../WindsorManor004",
          label: `${TITLE} - Windsor Manor: 004`,
        },
        {
          marker: <Arrow x={209} y={80} direction="up" size="sm" />,
          path: "../WindsorManor005",
          label: `${TITLE} - Windsor Manor: 005`,
        },
        {
          marker: <Arrow x={230} y={80} direction="up" size="sm" />,
          path: "../WindsorManor006",
          label: `${TITLE} - Windsor Manor: 006`,
        },
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
        {
          marker: <Arrow x={149} y={84} direction="down" size="sm" />,
          path: "../WindsorManor2F",
          label: `${TITLE} - Windsor Manor: 2F`,
        },
        {
          marker: <Arrow x={149} y={96} direction="up" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
        {
          marker: <Arrow x={82} y={101} direction="up" size="sm" />,
          path: "../WindsorManor101",
          label: `${TITLE} - Windsor Manor: 101`,
        },
        {
          marker: <Arrow x={102} y={101} direction="up" size="sm" />,
          path: "../WindsorManor102",
          label: `${TITLE} - Windsor Manor: 102`,
        },
        {
          marker: <Arrow x={123} y={101} direction="up" size="sm" />,
          path: "../WindsorManor103",
          label: `${TITLE} - Windsor Manor: 103`,
        },
        {
          marker: <Arrow x={188} y={101} direction="up" size="sm" />,
          path: "../WindsorManor104",
          label: `${TITLE} - Windsor Manor: 104`,
        },
        {
          marker: <Arrow x={209} y={101} direction="up" size="sm" />,
          path: "../WindsorManor105",
          label: `${TITLE} - Windsor Manor: 105`,
        },
        {
          marker: <Arrow x={230} y={101} direction="up" size="sm" />,
          path: "../WindsorManor106",
          label: `${TITLE} - Windsor Manor: 106`,
        },
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
        {
          marker: <Arrow x={160} y={88} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
        {
          marker: <Arrow x={178} y={106} direction="up" size="sm" />,
          path: "../WindsorManorSecretRoom",
          label: `${TITLE} - Windsor Manor: Secret Room`,
        },
        {
          marker: <Arrow x={113} y={106} direction="up" size="sm" />,
          path: "../WindsorManor201",
          label: `${TITLE} - Windsor Manor: 201`,
        },
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
        {
          marker: <Arrow x={115} y={138} direction="down" />,
          path: "../WindsorManor2F",
          label: `${TITLE} - Windsor Manor: 2F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor1F",
          label: `${TITLE} - Windsor Manor: 1F`,
        },
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
        {
          marker: <Arrow x={143} y={140} direction="down" size="sm" />,
          path: "../WindsorManor2F",
          label: `${TITLE} - Windsor Manor: 2F`,
        },
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
        {
          marker: <Arrow x={155} y={55} direction="up" />,
          path: "../WindsorManorGF",
          label: `${TITLE} - Windsor Manor: GF`,
        },
        {
          marker: <Arrow x={187} y={204} direction="down" />,
          path: "../RiversidePitch",
          label: `${TITLE} - Riverside: Pitch`,
        },
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
        {
          marker: <Arrow x={218} y={2} direction="up" />,
          path: "../RiversideNorth",
          label: `${TITLE} - Riverside: North`,
        },
        {
          marker: <Arrow x={105} y={46} direction="left" />,
          path: "../Station",
          label: `${TITLE} - Station`,
        },
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
        {
          marker: <Arrow x={210} y={101} direction="right" />,
          path: "../Station",
          label: `${TITLE} - Station`,
        },
        {
          marker: <Arrow x={2} y={78} direction="left" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
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
        {
          marker: <Arrow x={221} y={104} direction="right" />,
          path: "../RiversidePitch",
          label: `${TITLE} - Riverside: Pitch`,
        },
        {
          marker: <Arrow x={102} y={104} direction="left" />,
          path: "../RiversideStation",
          label: `${TITLE} - Riverside: Station`,
        },
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
        {
          marker: <Arrow x={314} y={197} direction="right" />,
          path: "../RiversideStation",
          label: `${TITLE} - Riverside: Station`,
        },
        {
          marker: <Arrow x={3} y={197} direction="left" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area: South`,
        },
        {
          marker: <Arrow x={90} y={78} direction="up" size="sm" />,
          path: "../OldClubRoom",
          label: `${TITLE} - Raimon: Old Club Room`,
        },
        {
          marker: <Arrow x={38} y={78} direction="left" />,
          path: "../RaimonWest",
          label: `${TITLE} - Raimon: West`,
        },
        {
          marker: <Arrow x={282} y={78} direction="right" />,
          path: "../RaimonGym",
          label: `${TITLE} - Raimon: Gym`,
        },
        {
          marker: <Arrow x={160} y={42} direction="up" />,
          path: "../MainBldGF",
          label: `${TITLE} - Raimon: Main Building GF`,
        },
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
        {
          marker: <Arrow x={178} y={125} direction="down" size="sm" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
        {
          marker: <Arrow x={147} y={99} direction="up" size="sm" />,
          path: "../OldClubSecretRoom",
          label: `${TITLE} - Raimon: Old Club Secret Room`,
        },
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
        {
          marker: <Arrow x={174} y={110} direction="down" size="sm" />,
          path: "../OldClubRoom",
          label: `${TITLE} - Raimon: Old Club`,
        },
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
        {
          marker: <Arrow x={160} y={164} direction="down" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
        {
          marker: <Arrow x={46} y={122} direction="left" />,
          path: "../RaimonWest",
          label: `${TITLE} - Raimon: West`,
        },
        {
          marker: <Arrow x={273} y={122} direction="right" />,
          path: "../RaimonGym",
          label: `${TITLE} - Raimon: Gym`,
        },
        {
          marker: <Arrow x={169} y={60} direction="up" size="sm" />,
          path: "../MainBld1F",
          label: `${TITLE} - Raimon: Main Building 1F`,
        },
        {
          marker: <Arrow x={130} y={42} direction="up" />,
          path: "../RaimonStadium",
          label: `${TITLE} - Raimon: Stadium`,
        },
        {
          marker: <Arrow x={190} y={42} direction="up" />,
          path: "../RaimonStadium",
          label: `${TITLE} - Raimon: Stadium`,
        },
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
        {
          marker: <Arrow x={151} y={66} direction="down" size="sm" />,
          path: "../MainBld2F",
          label: `${TITLE} - Raimon: Main Building 2F`,
        },
        {
          marker: <Arrow x={151} y={76} direction="up" size="sm" />,
          path: "../MainBldGF",
          label: `${TITLE} - Raimon: Main Building GF`,
        },
        {
          marker: <Arrow x={160} y={50} direction="up" size="sm" />,
          path: "../RaimonStadium",
          label: `${TITLE} - Raimon: Stadium`,
        },
        {
          marker: <Arrow x={46} y={130} direction="left" />,
          path: "../WestBld1F",
          label: `${TITLE} - Raimon: West Building 1F`,
        },
        {
          marker: <Arrow x={273} y={130} direction="right" />,
          path: "../RaimonGymInside",
          label: `${TITLE} - Raimon: Gym inside`,
        },
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
        {
          marker: <Arrow x={151} y={66} direction="down" size="sm" />,
          path: "../MainBld3F",
          label: `${TITLE} - Raimon: Main Building 2F`,
        },
        {
          marker: <Arrow x={151} y={76} direction="up" size="sm" />,
          path: "../MainBld1F",
          label: `${TITLE} - Raimon: Main Building GF`,
        },
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
        {
          marker: <Arrow x={169} y={66} direction="down" size="sm" />,
          path: "../MainBld2F",
          label: `${TITLE} - Raimon: Main Building 2F`,
        },
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
        {
          marker: <Arrow x={210} y={141} direction="right" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
        {
          marker: <Arrow x={137} y={91} direction="left" />,
          path: "../WestBldGF",
          label: `${TITLE} - Raimon: West Building GF`,
        },
        {
          marker: <Arrow x={176} y={21} direction="right" />,
          path: "../RaimonStadium",
          label: `${TITLE} - Raimon: Stadium`,
        },
        {
          marker: <Arrow x={150} y={2} direction="up" />,
          path: "../RaimonCarPark",
          label: `${TITLE} - Raimon: Car Park`,
        },
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
        {
          marker: <Arrow x={215} y={96} direction="right" />,
          path: "../RaimonWest",
          label: `${TITLE} - Raimon: West`,
        },
        {
          marker: <Arrow x={146} y={101} direction="right" size="sm" />,
          path: "../WestBld1F",
          label: `${TITLE} - Raimon: West Building 1F`,
        },
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
        {
          marker: <Arrow x={142} y={115} direction="right" size="sm" />,
          path: "../WestBld2F",
          label: `${TITLE} - Raimon: West Building 2F`,
        },
        {
          marker: <Arrow x={152} y={115} direction="left" size="sm" />,
          path: "../WestBldGF",
          label: `${TITLE} - Raimon: West Building GF`,
        },
        {
          marker: <Arrow x={192} y={29} direction="right" />,
          path: "../MainBld1F",
          label: `${TITLE} - Raimon: Main Building 1F`,
        },
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
        {
          marker: <Arrow x={144} y={100} direction="right" size="sm" />,
          path: "../WestBld1F",
          label: `${TITLE} - Raimon: West Building 1F`,
        },
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
        {
          marker: <Arrow x={161} y={204} direction="down" />,
          path: "../RaimonWest",
          label: `${TITLE} - Raimon: West`,
        },
        {
          marker: <Arrow x={68} y={74} direction="left" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        }, // TODO: missing route
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
        {
          marker: <Arrow x={89} y={137} direction="left" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
        {
          marker: <Arrow x={160} y={94} direction="right" />,
          path: "../RaimonGymInside",
          label: `${TITLE} - Raimon: Gym inside`,
        },
        {
          marker: <Arrow x={141} y={2} direction="up" />,
          path: "../RaimonDojo",
          label: `${TITLE} - Raimon: Dojo`,
        },
        {
          marker: <Arrow x={109} y={21} direction="left" />,
          path: "../RaimonStadium",
          label: `${TITLE} - Raimon: Stadium`,
        },
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
        {
          marker: <Arrow x={97} y={43} direction="left" />,
          path: "../MainBld1F",
          label: `${TITLE} - Raimon: Main Building 1F`,
        },
        {
          marker: <Arrow x={97} y={112} direction="left" />,
          path: "../RaimonGym",
          label: `${TITLE} - Raimon: Gym`,
        },
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
        {
          marker: <Arrow x={147} y={204} direction="down" />,
          path: "../RaimonGym",
          label: `${TITLE} - Raimon: Gym`,
        },
        {
          marker: <Arrow x={179} y={109} direction="right" />,
          path: "../RaimonDojoInside",
          label: `${TITLE} - Raimon: Dojo inside`,
        }, // TODO: missing route
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
      markers={[
        {
          marker: <Arrow x={104} y={104} direction="left" />,
          path: "../RaimonDojo",
          label: `${TITLE} - Raimon: Dojo`,
        },
      ]}
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
        {
          marker: <Arrow x={13} y={120} direction="left" />,
          path: "../RaimonWest",
          label: `${TITLE} - Raimon: West`,
        },
        {
          marker: <Arrow x={300} y={120} direction="right" />,
          path: "../RaimonGym",
          label: `${TITLE} - Raimon: Gym`,
        },
        {
          marker: <Arrow x={122} y={141} direction="down" />,
          path: "../MainBldGF",
          label: `${TITLE} - Raimon: Main Building GF`,
        },
        {
          marker: <Arrow x={198} y={141} direction="down" />,
          path: "../MainBldGF",
          label: `${TITLE} - Raimon: Main Building GF`,
        },
        {
          marker: <Arrow x={160} y={172} direction="down" />,
          path: "../MainBld1F",
          label: `${TITLE} - Raimon: Main Building 1F`,
        }, // TODO: missing route
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
        {
          marker: <Arrow x={318} y={69} direction="right" />,
          path: "../RaimonPitch",
          label: `${TITLE} - Raimon: Pitch`,
        },
        {
          marker: <Arrow x={160} y={195} direction="down" />,
          path: "../ShoppingAreaOutskirts",
          label: `${TITLE} - Shopping Area: Outskirts`,
        },
        {
          marker: <Arrow x={4} y={69} direction="left" />,
          path: "../InazumaPark",
          label: `${TITLE} - Inazuma Park`,
        },
        {
          marker: <Arrow x={160} y={53} direction="up" />,
          path: "../ShoppingAreaArcade",
          label: `${TITLE} - Shopping Area: Arcade`,
        },
        {
          marker: <Arrow x={78} y={46} direction="up" />,
          path: "../ShoppingAreaAlley",
          label: `${TITLE} - Shopping Area: Alley`,
        },
        {
          marker: <Arrow x={230} y={52} direction="up" size="sm" />,
          path: "../MagicMoves",
          label: `${TITLE} - Shopping Area: Magic Moves`,
        },
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
        {
          marker: <Arrow x={84} y={176} direction="left" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area: South`,
        },
        {
          marker: <Arrow x={306} y={49} direction="right" />,
          path: "../InazumaTower",
          label: `${TITLE} - Inazuma Tower`,
        },
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
        {
          marker: <Arrow x={161} y={206} direction="down" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area: South`,
        },
        {
          marker: <Arrow x={161} y={2} direction="up" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        },
        {
          marker: <Arrow x={129} y={98} direction="left" />,
          path: "../ShoppingAreaAlley",
          label: `${TITLE} - Shopping Area: Alley`,
        },
        {
          marker: <Arrow x={149} y={114} direction="left" size="sm" />,
          path: "../RaiRaiNoodles",
          label: `${TITLE} - Shopping Area: Rai Rai Noodles`,
        },
        {
          marker: <Arrow x={170} y={160} direction="right" size="sm" />,
          path: "../GMart",
          label: `${TITLE} - Shopping Area: G-Mart`,
        },
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
        {
          marker: <Arrow x={198} y={103} direction="right" />,
          path: "../ShoppingAreaArcade",
          label: `${TITLE} - Shopping Area: Arcade`,
        },
        {
          marker: <Arrow x={189} y={136} direction="right" />,
          path: "../GameCentre",
          label: `${TITLE} - Shopping Area: Game Centre`,
        },
        {
          marker: <Arrow x={133} y={205} direction="down" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area: South`,
        },
        {
          marker: <Arrow x={159} y={2} direction="up" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        },
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
        {
          marker: <Arrow x={85} y={104} direction="left" />,
          path: "../ShoppingAreaAlley",
          label: `${TITLE} - Shopping Area: Alley`,
        },
        {
          marker: <Arrow x={222} y={60} direction="up" />,
          path: "../HackersHideout",
          label: `${TITLE} - Hackers' Hideout`,
        },
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
      markers={[
        {
          marker: <Arrow x={160} y={145} direction="down" />,
          path: "../GameCentre",
          label: `${TITLE} - Game Centre`,
        },
      ]}
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
        {
          marker: <Arrow x={96} y={202} direction="down" />,
          path: "../ShoppingAreaAlley",
          label: `${TITLE} - Shopping Area: Alley`,
        },
        {
          marker: <Arrow x={162} y={168} direction="down" />,
          path: "../ShoppingAreaArcade",
          label: `${TITLE} - Shopping Area: Arcade`,
        },
        {
          marker: <Arrow x={5} y={143} direction="left" />,
          path: "../RiccardosStreet",
          label: `${TITLE} - Riccardo's Street`,
        },
        {
          marker: <Arrow x={160} y={4} direction="up" />,
          path: "../Hospital",
          label: `${TITLE} - Hospital`,
        },
        {
          marker: <Arrow x={315} y={143} direction="right" />,
          path: "../RaimonCarPark",
          label: `${TITLE} - Raimon: Car Park`,
        },
        {
          marker: <Arrow x={120} y={121} direction="up" size="sm" />,
          path: "../KoolKit",
          label: `${TITLE} - Shopping Area: Kool Kit`,
        },
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
        {
          marker: <Arrow x={160} y={205} direction="down" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        },
        {
          marker: <Arrow x={160} y={17} direction="up" />,
          path: "../DiRigoResidenceGF",
          label: `${TITLE} - Di Rigo Residence GF`,
        },
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
        {
          marker: <Arrow x={160} y={91} direction="up" />,
          path: "../DiRigoResidence1F",
          label: `${TITLE} - Di Rigo Residence 1F`,
        },
        {
          marker: <Arrow x={160} y={151} direction="down" />,
          path: "../RiccardosStreet",
          label: `${TITLE} - Riccardo's Street`,
        },
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
        {
          marker: <Arrow x={160} y={93} direction="down" />,
          path: "../DiRigoResidenceGF",
          label: `${TITLE} - Di Rigo Residence GF`,
        },
        {
          marker: <Arrow x={134} y={65} direction="right" />,
          path: "../DiRigoResidence2F",
          label: `${TITLE} - Di Rigo Residence 2F`,
        },
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
        {
          marker: <Arrow x={126} y={84} direction="left" />,
          path: "../DiRigoResidenceGF",
          label: `${TITLE} - Di Rigo Residence GF`,
        },
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
        {
          marker: <Arrow x={160} y={151} direction="down" size="sm" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area : South`,
        },
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
        {
          marker: <Arrow x={119} y={90} direction="left" size="sm" />,
          path: "../ShoppingAreaArcade",
          label: `${TITLE} - Shopping Area: Arcade`,
        },
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
        {
          marker: <Arrow x={160} y={163} direction="down" size="sm" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        },
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
        {
          marker: <Arrow x={174} y={125} direction="down" size="sm" />,
          path: "../ShoppingAreaArcade",
          label: `${TITLE} - Shopping Area: Arcade`,
        },
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
        {
          marker: <Arrow x={9} y={139} direction="left" />,
          path: "../ShoppingAreaOutskirts",
          label: `${TITLE} - Shopping Area: Outskirts`,
        },
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
        {
          marker: <Arrow x={316} y={177} direction="right" />,
          path: "../ShoppingAreaSouth",
          label: `${TITLE} - Shopping Area: South`,
        },
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
        {
          marker: <Arrow x={160} y={198} direction="down" />,
          path: "../ShoppingAreaNorth",
          label: `${TITLE} - Shopping Area: North`,
        },
        {
          marker: <Arrow x={160} y={60} direction="up" />,
          path: "../HospitalGF",
          label: `${TITLE} - Hospital GF`,
        },
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
        {
          marker: <Arrow x={102} y={55} direction="left" />,
          path: "../Hospital1F",
          label: `${TITLE} - Hospital 1F`,
        },
        {
          marker: <Arrow x={160} y={162} direction="down" />,
          path: "../Hospital",
          label: `${TITLE} - Hospital`,
        },
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
        {
          marker: <Arrow x={70} y={56} direction="left" />,
          path: "../Hospital2F",
          label: `${TITLE} - Hospital 2F`,
        },
        {
          marker: <Arrow x={70} y={71} direction="left" />,
          path: "../HospitalGF",
          label: `${TITLE} - Hospital GF`,
        },
        {
          marker: <Arrow x={133} y={79} direction="down" />,
          path: "../Hospital1FOutside",
          label: `${TITLE} - Hospital 1F Outside`,
        },
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
      markers={[
        {
          marker: <Arrow x={160} y={65} direction="up" />,
          path: "../Hospital1F",
          label: `${TITLE} - Hospital 1F`,
        },
      ]}
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
      markers={[
        {
          marker: <Arrow x={128} y={103} direction="left" />,
          path: "../Hospital1F",
          label: `${TITLE} - Hospital 1F`,
        },
      ]}
    />
  );
}
