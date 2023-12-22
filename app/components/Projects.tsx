import Link from "next/link"
import LowerDivider from "./dividers/LowerDivider"
import UpperDivider from "./dividers/UpperDivider"
import ProjectCard from "../projects/project_components/ProjectCard"
import { homepageProjects } from "../data"

export default function Projects() {
    return (
        <section className="bg-zinc-300 dark:bg-black flex flex-col i">
            <UpperDivider />
            <h2 className="self-center">Projects</h2>
            {homepageProjects.map(projectDetail => <ProjectCard key={projectDetail.id} projectDetail={projectDetail}/>)}
            <Link href={"/projects"} className=" self-center flex justify-end mb-7">
                <button className="w-56 h-16 text-xl rounded-full bg-gradient-to-t from-orange-500 via-orange-300 to-orange-500 border-2 border-orange-600 text-black shadow-lg font-bold mt-5">
                    More projects
                </button>
            </Link>
            <LowerDivider />
        </section>
    )
}