import { DefaultLayout } from "@/layouts/Default";
import { MapRouter } from "./Router";

export function MapPage() {
  return (
    <DefaultLayout>
      <h2 className="text-4xl font-bold mb-4 text-center">
        Inazuma Eleven Map Explorer
      </h2>

      <div className="max-w-4xl mx-auto">
        <MapRouter />
      </div>
    </DefaultLayout>
  );
}
