import Link from "next/link";

type Props = {
  onToggleSidebar?: () => void;
};

export default function Navbar({ onToggleSidebar }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 px-4 bg-transparent">
      <div className="relative mx-auto flex w-full max-w-full h-full items-center justify-center">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="rounded-md p-2 text-zinc-300 hover:bg-zinc-800/60 cursor-pointer"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-zinc-50"
          >
            <span className="hidden sm:inline">Boo</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="w-full max-w-5xl">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z"
                  />
                </svg>
              </div>

              <input
                aria-label="Search"
                placeholder="Search"
                className="h-12 w-full rounded-full bg-black/70 px-12 text-sm text-zinc-200 placeholder:text-zinc-500 ring-1 ring-zinc-900/50 shadow-[inset_0_0_40px_rgba(0,0,0,0.7),0_18px_40px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>
          </div>
        </div>
        {/* Floating sign-in pill pinned to right edge */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden md:block transform -translate-y-1/2">
          <div className="pointer-events-auto">
            <button className="rounded-full bg-teal-300/95 px-5 py-2 text-sm font-semibold text-black shadow-[0_18px_64px_rgba(6,182,164,0.18),0_6px_18px_rgba(0,0,0,0.6)]">
              SIGN IN
            </button>
          </div>
        </div>

        {/* Right-side small actions (kept in flow for narrow screens) */}
        <div className="flex items-center gap-3 md:invisible">
          <button className="rounded-full bg-teal-300/95 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_48px_rgba(45,255,235,0.16)]">
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
}
