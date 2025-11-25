import { useEffect, useState } from "react";

type Props = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

type MenuItem = {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  active?: boolean;
};
type SidebarData = { menu: MenuItem[] };

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const [data, setData] = useState<SidebarData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/sidebar")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  const menu = data?.menu ?? [];

  return (
    <>
      {/* Desktop sidebar - left menu slice */}
      <aside className="hidden md:block md:w-74 md:fixed md:left-0 md:top-20 md:bottom-0 md:overflow-auto md:pr-6 md:z-10">
        <div className="flex flex-col justify-between h-full rounded-r-3xl bg-black/95 p-6 text-white shadow-inner">
          <div>
            <ul className="space-y-4">
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href ?? "#"}
                    className={`flex items-center gap-3 ${
                      item.active
                        ? "text-teal-300"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-sm bg-white/20 flex items-center justify-center text-xs ${
                        item.active ? "text-teal-300" : "text-white/80"
                      }`}
                    >
                      {item.label[0]}
                    </span>
                    <span className="text-md">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-xs text-white/60">
            <p>
              We stand for love. <span className="text-teal-300">♥</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="#" className="underline">
                Terms
              </a>
              <a href="#" className="underline">
                Privacy
              </a>
              <a href="#" className="underline">
                FAQ
              </a>
            </div>
            <div className="mt-3 text-[11px]">© 2025 Boo Enterprises, Inc.</div>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute left-0 right-0 top-20 bottom-0 bg-black/60"
          onClick={onClose}
        />
        <aside className="absolute left-0 top-20 bottom-0 w-72 overflow-auto bg-black text-white p-6 shadow-xl">
          <div className="mt-6">
            <ul className="space-y-4">
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href ?? "#"}
                    className={`flex items-center gap-3 ${
                      item.active
                        ? "text-teal-300"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-sm bg-white/20 flex items-center justify-center text-xs ${
                        item.active ? "text-teal-300" : "text-white/80"
                      }`}
                    >
                      {item.label[0]}
                    </span>
                    <span className="text-md">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-xs text-white/60">
            <p>
              We stand for love. <span className="text-teal-300">♥</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="#" className="underline">
                Terms
              </a>
              <a href="#" className="underline">
                Privacy
              </a>
              <a href="#" className="underline">
                FAQ
              </a>
            </div>
            <div className="mt-3 text-[11px]">© 2025 Boo Enterprises, Inc.</div>
          </div>
        </aside>
      </div>
    </>
  );
}
