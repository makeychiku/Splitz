import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 w-full max-w-md bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700 text-white">
        <form className="flex flex-col gap-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition w-max "
          >
            &larr; Back
          </Link>
          <span className="text-red-400 font-bold text-3xl flex justify-center">
            Splitz
          </span>
          <input
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-400"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-400"
            type="text"
            placeholder="Password"
          />
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition mt-2"
            type="submit"
          >
            Sign Up
          </button>
          <span className="text-sm text-gray-400 text-center mt-4">
            Already have an account?
          </span>
          <Link
            className="text-red-400 hover:underline flex justify-center"
            to="/login"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}
