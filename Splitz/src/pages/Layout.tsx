import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
        <Link className="text-white font-black text-3xl tracking-tight" to="/">
          Spli<span className="text-rose-500">tz</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            className="text-zinc-400 hover:text-white transition-colors"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-rose-900/20"
            to="/registration"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
