import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <h2 className="text-xl md:text-2xl dark:bg-slate-800 bg-neutral-300/55 font-bold tracking-tight md:tracking-tighter leading-tight p-6 flex items-center">
      <Link href="/" className="hover:underline">
        CHRIS CARDOZA
      </Link>
      <ThemeSwitcher />
    </h2>
  );
};

export default Header;
