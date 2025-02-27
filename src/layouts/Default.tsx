import { Header } from "@components/Header";
import { Link, useLocation } from "react-router";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <Header />

      <main className="flex-grow pt-20 sm:pt-24">
        {location.pathname !== "/" && (
          <Link
            to=".."
            relative="path"
            className="mx-4 hover:mx-6 text-gray-300 cursor-pointer transition-all"
          >
            {"← Go back"}
          </Link>
        )}
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
