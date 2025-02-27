import { Route, Routes } from "react-router";
import { MainNav } from "./Nav";
import { HolyRoadStadiumMap } from "./HolyRoadStadiumMap";

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<MainNav />} />
      <Route path="PresentInazuma" element={<>Present, Inazuma</>} />
      <Route path="HolyRoadStadium/*" element={<HolyRoadStadiumMap />} />
      <Route path="Sanctum" element={<>Sanctum</>} />
      <Route path="Okinawa" element={<>Okinawa</>} />
      <Route path="FFStadium" element={<>Futbol Frontier Stadium</>} />
      <Route path="PastInazuma" element={<>Past, Inazuma</>} />
      <Route path="Tonghana" element={<>Tonghana</>} />
      <Route path="SengokuJapan" element={<>Sengoku era, Japan</>} />
      <Route path="MedievalFrance" element={<>Medieval era, France</>} />
      <Route
        path="ThreeKingdomsChina"
        element={<>Three Kingdoms era, China</>}
      />
      <Route path="EdoKyoto" element={<>Edo era, Kyoto</>} />
      <Route path="Jurassic" element={<>Jurassic</>} />
      <Route path="Camelot" element={<>Camelot</>} />
      <Route path="SanEldor" element={<>San Eldor</>} />
      <Route path="Dreamland" element={<>Dreamland</>} />
    </Routes>
  );
}
