import { Photo, Topic } from "../../types/database";

export function PhotoTopicModal({ content }: { content: Topic | Photo }) {
  return (
    <img
      src={content.photo}
      className="min-w-15 sm:min-w-35 min-h-20 sm:min-h-30 max-w-90 max-h-52 border-3 border-b-blue-500 bg-blue-50 p-3 rounded"
    />
  );
}
