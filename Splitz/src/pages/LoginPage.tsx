import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="bg-zinc-950 w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 w-full max-w-md bg-zinc-900/80 p-6 md:p-8 rounded-2xl shadow-xl border border-zinc-800 text-white">
        <form className="flex flex-col gap-8">
          <Link
            to="/"
            className="text-zinc-500 hover:text-zinc-300 transition w-max "
          >
            &larr; Back
          </Link>
          <span className="text-white font-black text-4xl flex justify-center tracking-tight mb-2">
            Spli<span className="text-rose-500">tz</span>
          </span>
          <input
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-100 placeholder:text-zinc-600 transition-all focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-100 placeholder:text-zinc-600 transition-all focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
            type="text"
            placeholder="Password"
          />
          <button
            className="w-full bg-rose-600 hover:bg-rose-500 active:scale-[0.98] text-white font-medium text-lg py-3.5 rounded-xl transition-all shadow-lg shadow-rose-900/20 mt-2"
            type="submit"
          >
            Log In
          </button>
          <div className="flex flex-col items-center gap-1.5 mt-2">
            <span className="text-sm text-zinc-500">
              Don't have an account?
            </span>
            <Link
              className="text-sm font-medium text-rose-400 hover:text-rose-300 hover:underline transition-colors"
              to="/registration"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
