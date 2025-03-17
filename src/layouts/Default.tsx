import { EasyAccessMenu } from "@/components/EasyAccessMenu";
import { Header } from "@components/Header";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <Header />

      <EasyAccessMenu />
      <main className="flex-grow pt-10">
        <div className="py-4 px-6 sm:px-10 relative">{children}</div>
      </main>

      <footer className="bg-gray-800 text-center py-4">
        <p className="text-gray-400">
          © 2023 Inazuma Eleven Explorer. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
