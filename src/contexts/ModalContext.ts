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
}

const defaultModalContext: ModalContextType = {
  content: null,
  active: false,
  changeModal: () => {},
};

export const ModalContext = createContext(defaultModalContext);
