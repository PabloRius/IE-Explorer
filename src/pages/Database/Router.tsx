import { Route, Routes } from "react-router";
import { Game } from "@database.types";
import { ImageNav } from "@components/navs/ImageNav";

import { MainRouter } from "./IEGOCS/Router";

export function DatabaseRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ImageNav
            tables={{
              IE: Game.IE,
              IE2: Game.IE2,
              IE3: Game.IE3,
              IEGO: Game.IEGO,
              IEGOCS: Game.IEGOCS,
              IEGOGA: Game.IEGOGA,
              IEHVR: Game.IEHVR,
            }}
          />
        }
      />
      {/* <Route path="/map/IE" element={<Main />} /> */}
      {/* <Route path="/map/IE2" element={<Main />} /> */}
      {/* <Route path="/map/IE2" element={<Main />} /> */}
      {/* <Route path="/map/IEGO" element={<Main />} /> */}
      <Route path="IEGOCS/*" element={<MainRouter />} />
      {/* <Route path="/map/IEGOGA" element={<Main />} /> */}
      {/* <Route path="/map/IEVR" element={<Main />} /> */}
    </Routes>
  );
}
