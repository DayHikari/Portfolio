import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="flex items-center ml-10 text-xl font-bold">
            <Link href={"/"} className="mx-2">
                <button className="min-w-[100px] rounded-full p-2 hover:bg-zinc-600 hover:text-orange-500">
                    Home
                </button>
            </Link>
            <Link href={"/projects"} className="mx-2">
                <button className="min-w-[100px] rounded-full p-2 hover:bg-zinc-600 hover:text-orange-500">
                    Projects
                </button>
            </Link>
        </nav>
    )
}