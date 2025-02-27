import { DefaultLayout } from "@/layouts/Default";
import { Link } from "react-router";

export function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
        <h2 className="text-6xl font-bold mb-6 text-center text-yellow-400 animate-bounce">
          Welcome to Inazuma Eleven Explorer
        </h2>
        <p className="mb-12 text-center text-lg text-gray-200">
          Explore the world of Inazuma Eleven, discover players, and build your
          dream team!
        </p>
        <nav className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Link
            to="/map"
            className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            <span className="text-2xl font-semibold">Map</span>
          </Link>
          <Link
            to="/database"
            className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            <span className="text-2xl font-semibold">Database</span>
          </Link>
          <Link
            to="/team-builder"
            className="bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            <span className="text-2xl font-semibold">Team Builder</span>
          </Link>
        </nav>
      </div>
    </DefaultLayout>
  );
}
