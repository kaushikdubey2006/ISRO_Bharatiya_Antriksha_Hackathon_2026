import { Globe2 } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="rounded-full bg-cyan-500/15 p-3">

            <Globe2
              className="h-7 w-7 text-cyan-400"
            />

          </div>

          <div>

            <h1 className="text-xl font-bold tracking-wide text-white">
              AI-EDSS
            </h1>

            <p className="text-sm text-slate-400">
              AI Based Environmental Decision Support System
            </p>

          </div>

        </div>

        {/* Right */}

        <button className="rounded-xl border border-cyan-500/30 px-5 py-2 text-cyan-300 transition hover:bg-cyan-500/10">

          Documentation

        </button>

      </div>

    </header>
  );
}

export default Navbar;