import LowerDivider from "../components/dividers/LowerDivider";
import UpperDivider from "../components/dividers/UpperDivider";
import { projectDetails } from "../data";
import ProjectCard from "./project_components/ProjectCard";

export default function ProjectPage() {
    return (
        <main className="bg-zinc-300 dark:bg-black">
            <UpperDivider />
            <section className="flex flex-col py-10">
            {projectDetails.map(projectDetail => <ProjectCard key={projectDetail.id} projectDetail={projectDetail}/>)}
            </section>
            <LowerDivider />
        </main>
    )
}