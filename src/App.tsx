import { useContext } from "react";
import { Alert } from "./components/Alert";
import { AlertContext } from "./contexts/AlertContext";
import { ModalContext } from "./contexts/ModalContext";
import { Page } from "./routes/Page";

function App() {
  const { message, type, active: alertActive } = useContext(AlertContext);
  const { content: modalContent, active: modalActive } =
    useContext(ModalContext);
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-gray-800 to-gray-600 shadow-md text-white">
      <Page />
      <Alert active={alertActive} message={message} type={type} />
      {modalActive && modalContent}
    </div>
  );
}

export default App;
