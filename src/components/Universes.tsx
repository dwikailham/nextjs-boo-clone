import { useEffect, useState } from "react";

export default function Home() {
  /** States */
  const [data, setData] = useState<Array<{ name: string; views: number }>>([]);

  /** Side Effects */
  useEffect(() => {
    fetch("/api/tags")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData([]));
  }, []);

  return (
    <div className="hidden lg:block lg:w-72 lg:top-20 lg:bottom-0 lg:overflow-hidden lg:pr-6 lg:z-10">
      <div className="rounded-lg border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-[#070707]">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Universes
        </h4>

        {/* Container scroll khusus untuk tag universes */}
        <div className="mt-3 overflow-y-auto no-scrollbar overflow-y-auto max-h-[calc(100vh-200px)] pr-1">
          {data.map((t) => (
            <div key={t.name} className="flex justify-between">
              <a
                href="#"
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 hover:border-teal-300/95 transition-all duration-500 dark:border-zinc-800 dark:text-zinc-300"
              >
                {t.name}
              </a>
              <p className="text-xs text-zinc-400">{`${t.views} souls`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
