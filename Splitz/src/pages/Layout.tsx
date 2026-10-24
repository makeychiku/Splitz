import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <header className="bg-gray-900 px-6 py-4 flex items-center justify-between">
        <Link className="text-red-400 font-bold text-4xl" to="/">
          Splitz
        </Link>
        <div className="flex items-center gap-6 text-xl font-medium">
          <Link className="text-white hover:text-gray-300" to="/login">
            Log In
          </Link>
          <Link className="text-white hover:text-gray-300" to="/registration">
            Sign Up
          </Link>
        </div>
      </header>
    </div>
  );
}
