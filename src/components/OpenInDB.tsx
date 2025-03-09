import { useModal } from "@/hooks/useModal";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Link } from "react-router";

export function OpenInDB({
  dbLink,
  className,
}: {
  dbLink: string | null;
  className?: string;
}) {
  const { quitModal } = useModal();
  return (
    dbLink && (
      <Link
        className={`flex flex-row items-center gap-1 cursor-help ${className}`}
        to={dbLink}
        onClick={() => {
          quitModal();
        }}
      >
        <p>Open in database</p>
        <OpenInNewWindowIcon />
      </Link>
    )
  );
}
