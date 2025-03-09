import { createContext, ReactNode } from "react";

interface ModalContextType {
  content: ReactNode;
  active: boolean;
  changeModal: ({
    newContent,
    title,
  }: {
    newContent: ReactNode;
    title?: string;
  }) => void;
  quitModal: () => void;
}

const defaultModalContext: ModalContextType = {
  content: null,
  active: false,
  changeModal: () => {},
  quitModal: () => {},
};

export const ModalContext = createContext(defaultModalContext);
