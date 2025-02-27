import { BrowserRouter } from "react-router";
import App from "./App";
import { Alertprovider } from "./providers/AlertProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { GameProvider } from "./providers/GameProvider";
import { ModalProvider } from "./providers/ModalProvider";

export function ContextualApp() {
  return (
    <Alertprovider>
      <ModalProvider>
        <AuthProvider>
          <BrowserRouter>
            <GameProvider>
              <App />
            </GameProvider>
          </BrowserRouter>
        </AuthProvider>
      </ModalProvider>
    </Alertprovider>
  );
}
