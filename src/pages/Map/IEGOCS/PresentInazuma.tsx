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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
    />
  );
}

function DiRigoResidenceGF() {
  return (
    <MapView
      title={`${TITLE} - DiRigoResidenceGF`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/46.png")}
      width={320}
      height={208}
      markers={[]}
    />
  );
}

function DiRigoResidence1F() {
  return (
    <MapView
      title={`${TITLE} - DiRigoResidence1F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/47.png")}
      width={320}
      height={208}
      markers={[]}
    />
  );
}

function DiRigoResidence2F() {
  return (
    <MapView
      title={`${TITLE} - DiRigoResidence2F`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/48.png")}
      width={320}
      height={208}
      markers={[]}
    />
  );
}

function MagicMoves() {
  return (
    <MapView
      title={`${TITLE} - MagicMoves`}
      imageSrc={getImageUrl("maps/IEGOCS/PresentInazuma/49.png")}
      width={320}
      height={208}
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
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
      markers={[]}
    />
  );
}
