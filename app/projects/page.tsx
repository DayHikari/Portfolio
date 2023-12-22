import LowerDivider from "../components/dividers/LowerDivider";
import UpperDivider from "../components/dividers/UpperDivider";
import { projectDetails } from "../data";
import ProjectCard from "./project_components/ProjectCard";

export default function ProjectPage() {
  return (
    <main className="bg-zinc-300 dark:bg-black">
      <UpperDivider />
      <section className="flex flex-col py-10">
        <h1 className="p-2 self-center mb-[-30px] text-7xl text-center font-extrabold animate-pulse bg-gradient-radial from-orange-400 to-orange-700 text-transparent bg-clip-text">
          Personal Projects
        </h1>
        {projectDetails.map((projectDetail) => (
          <ProjectCard key={projectDetail.id} projectDetail={projectDetail} />
        ))}
      </section>
      <LowerDivider />
    </main>
  );
}
