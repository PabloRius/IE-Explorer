import { DefaultLayout } from "@/layouts/Default";
import { DatabaseRouter } from "./Router";

export function DatabasePage() {
  return (
    <DefaultLayout>
      <h2 className="text-4xl font-bold mb-4 text-center">
        Inazuma Eleven Database Explorer
      </h2>

      <div className="max-w-4xl mx-auto">
        <DatabaseRouter />
      </div>
    </DefaultLayout>
  );
}
