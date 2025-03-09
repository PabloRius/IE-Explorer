import { GetDBLink } from "@/utils/getDbLink";
import { Photo, Topic } from "../../types/database";
import { OpenInDB } from "../OpenInDB";

export function PhotoTopicModal({ content }: { content: Topic | Photo }) {
  const { photo } = content;
  const { dbLink } = GetDBLink({ item: content });
  return (
    <>
      <img
        src={photo}
        className="min-w-15 sm:min-w-35 min-h-20 sm:min-h-30 max-w-90 max-h-52 border-3 border-b-blue-500 bg-blue-50 p-3 rounded no-pix"
      />
      <OpenInDB dbLink={dbLink} />
    </>
  );
}
