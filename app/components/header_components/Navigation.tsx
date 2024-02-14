import Link from "next/link";
import MenuDropdown from "./MenuDropdown";
import ContactDropdown from "./ContactDropdown";

export default function Navigation(): JSX.Element {
  return (
    <nav className="flex xs:items-center text-xl font-bold w-full">
      <div className="xs:items-center text-xl font-bold w-full hidden lg:flex">
        <Link href={"/"} className="md:mx-2">
          <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
            Home
          </button>
        </Link>
        <Link href={"/projects"} className="md:mx-2">
          <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
            Projects
          </button>
        </Link>
        <ContactDropdown />
        <a download href="/david_masons_cv.pdf" target="_blank">
          <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
            CV
          </button>
        </a>
      </div>
      <MenuDropdown />
    </nav>
  );
}
