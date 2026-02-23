import clsx from "clsx";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header
      className={clsx(
        "h-30 p-6",
        "flex items-center justify-between",
        "bg-on-background",
      )}
    >
      <button>
        <Menu />
      </button>
      <h1 className="font-bold text-3xl">GTasks</h1>
      <div className="h-10 w-10 border rounded-full"></div>
    </header>
  );
}
