import Link from "next/link";
import MenuDropdown from "./MenuDropdown";

export default function Navigation() {
  return (
    <nav className="flex xs:items-center  md:ml-10 text-xl font-bold">
      <Link href={"/"} className="md:mx-2">
        <button className="min-w-[100px] hidden sm:block rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
          Home
        </button>
      </Link>
      <Link href={"/projects"} className="md:mx-2">
        <button className="min-w-[100px] hidden sm:block rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
          Projects
        </button>
      </Link>
      <a download href="/david_mason_cv.pdf" target="_blank">
        <button className="min-w-[70px] hidden sm:block rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
          CV
        </button>
      </a>
      <MenuDropdown />
    </nav>
  );
}
