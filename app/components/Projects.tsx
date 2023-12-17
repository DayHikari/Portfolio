import Link from "next/link"
import LowerDivider from "./dividers/LowerDivider"
import UpperDivider from "./dividers/UpperDivider"

export default function Projects() {
    return (
        <section className="bg-zinc-300 dark:bg-black flex flex-col i">
            <UpperDivider />
            <h2 className="self-center">Projects</h2>
            <article className="h-96 self-center">
                <h3>BRUM.AI website - 4-week project</h3>
            </article>
            <article className="h-96 self-center">
                <h3>Memory Echo - 1-week project</h3>
            </article>
            <Link href={"/projects"} className=" self-center flex justify-end mb-7">
                <button className="min-w-[150px] h-14 border-4 border-amber-600 rounded-full bg-gradient-to-t from-orange-500 via-orange-300 to-orange-500 text-black shadow-lg font-bold">
                    More projects
                </button>
            </Link>
            <LowerDivider />
        </section>
    )
}