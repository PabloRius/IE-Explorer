import { useState } from "react";
import { AlertContext } from "../contexts/AlertContext";

interface AlertProviderProps {
  children: React.ReactNode;
}

export function Alertprovider({ children }: AlertProviderProps) {
  const [active, setActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<
    "info" | "error" | "warning" | "success" | null
  >(null);

  const alert = (
    message: string,
    type: "info" | "error" | "warning" | "success"
  ) => {
    setActive(true);
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        active,
        message,
        type,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
