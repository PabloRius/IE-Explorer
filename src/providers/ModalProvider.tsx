import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalLayout({
  children,
  title,
  quitModal,
}: {
  children: ReactNode;
  title?: string;
  quitModal: () => void;
}) {
  console.log(title);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
    >
      <div className="relative flex flex-col items-center justify-between gap-4 w-auto max-w-screen h-auto max-h-[80%] overflow-y-scroll no-scrollbar rounded py-3.5 px-10 bg-gradient-to-br from-gray-800 to-gray-600 shadow-md text-white">
        <div className="absolute top-2.5 right-2.5 cursor-pointer">
          <Cross1Icon
            onClick={() => {
              quitModal();
            }}
          />
        </div>
        {title && <h3 className="text-center text-2xl font-bold">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [active, setActive] = useState<boolean>(false);

  const changeModal = ({
    newContent,
    title,
  }: {
    newContent: ReactNode;
    title?: string;
  }) => {
    setContent(
      <ModalLayout quitModal={quitModal} title={title}>
        {newContent}
      </ModalLayout>
    );
    setActive(true);
  };
  const quitModal = () => {
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.height = "100%";
      document.body.style.overflowY = "hidden";
      document.body.style.marginRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.marginRight = "";
    }
  }, [active]);

  return (
    <ModalContext.Provider
      value={{
        content,
        active,
        changeModal,
      }}
    >
      <div className={active ? `inset-0 z-50 overflow-hidden height:100%` : ""}>
        {children}
      </div>
    </ModalContext.Provider>
  );
}
