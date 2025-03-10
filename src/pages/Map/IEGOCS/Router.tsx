import { Route, Routes } from "react-router";
import { HolyRoadStadium } from "./HolyRoadStadium";
import { MainNav } from "./Nav";
import { PresentInazuma } from "./PresentInazuma";

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<MainNav />} />
      <Route path="PresentInazuma" element={<PresentInazuma />} />
      <Route path="HolyRoadStadium/*" element={<HolyRoadStadium />} />
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
