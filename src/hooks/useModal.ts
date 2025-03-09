import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useGame must be used within a ModalProvider");
  }
  return context;
}
