import { createContext } from "react";

interface AlertContextType {
  message: string | null;
  alert: (
    message: string,
    type: "info" | "error" | "warning" | "success"
  ) => void;
  type: "info" | "error" | "warning" | "success" | null;
  active: boolean;
}

const defaultAlertContext: AlertContextType = {
  message: null,
  alert: () => {},
  type: null,
  active: false,
};

export const AlertContext = createContext(defaultAlertContext);
