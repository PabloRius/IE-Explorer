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
                path: "WindsorManor",
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
                path: "Riverside",
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
                path: "Tower",
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
                path: "RaimonJrHigh",
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
                path: "ShoppingArea",
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
                path: "Park",
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
                path: "DiRigoHouse",
                label: `${TITLE} - Di Rigo House`,
              },
            ]}
          />
        }
      />
      <Route path="WindsorManor"></Route>
      <Route path="Riverside"></Route>
      <Route path="Tower"></Route>
      <Route path="RaimonJrHigh"></Route>
      <Route path="ShoppingArea"></Route>
      <Route path="Park"></Route>
      <Route path="Hospital"></Route>
      <Route path="DiRigoHouse"></Route>
    </Routes>
  );
}
