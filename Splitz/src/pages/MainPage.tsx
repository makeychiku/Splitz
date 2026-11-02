export default function MainPage() {
  return (
    <div className="bg-zinc-950 w-full min-h-screen text-zinc-100 flex justify-center">
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-x border-zinc-800">
        <aside className="col-span-1 p-6 hidden md:block">
          <h2 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-4 flex justify-center">
            Filters
          </h2>
        </aside>

        <main className="col-span-1 md:col-span-4 p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-8 text-white flex items-center gap-3 justify-center tracking-tight">
            For You
            <span className="text-rose-400 text-sm font-medium px-3 py-1 bg-rose-500/10 rounded-full border border-rose-500/20">
              New
            </span>
          </h1>

          <div className="w-full h-72 border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center bg-zinc-900/40 backdrop-blur-sm transition-colors hover:bg-zinc-900/60">
            <span className="text-zinc-400 text-lg font-medium">
              There are no beats yet
            </span>
            <span className="text-zinc-600 text-sm mt-2">
              Tracks will appear here
            </span>
          </div>
        </main>

        <aside className="col-span-1 p-6 hidden md:block">
          <h2 className="text-zinc-500 text-sm font-semibold uppercase tracking-wider mb-4 flex justify-center">
            Charts
          </h2>
        </aside>
      </div>
    </div>
  );
}
