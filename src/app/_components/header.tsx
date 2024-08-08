import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl font-tauri md:text-3xl dark:bg-slate-800 bg-neutral-300/55 font-bold tracking-tight leading-tight p-5 flex items-center">
      <Link href="/" className="hover:underline">
        CHRIS CARDOZA
      </Link>
    </h2>
  );
};

export default Header;
