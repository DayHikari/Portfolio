import { Project } from "@/app/data";
import Image from "next/image";
import ProjectButton from "./ProjectButton";

interface promptObject {
  projectDetail: Project;
}
export default function ProjectCard({ projectDetail }: promptObject) {
  const gridColumns: string =
    projectDetail.id % 2 === 1
      ? "2xl:grid-cols-[2fr_1fr]"
      : "2xl:grid-cols-[1fr_2fr]";
  const textGrid: string =
    projectDetail.id % 2 === 1 ? "col-start-1" : "col-start-2";
  const imageGrid: string =
    projectDetail.id % 2 === 1 ? "col-start-2" : "col-start-1 row-start-1";
  const flexDirection: string =
    projectDetail.id % 2 === 1 ? "flex-row" : "flex-row-reverse";
  return (
    <>
      <article
        className={`flex flex-col flex-col-reverse 2xl:grid ${gridColumns} w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 2xl:w-7/12 self-center my-20 rounded-3xl`}
      >
        <div
          className={`flex flex-col justify-between items-center py-5 px-5 ${textGrid} `}
        >
          <div
            className={`hidden 2xl:flex ${flexDirection} items-center justify-between w-10/12`}
          >
            <h2 className="text-4xl py-3 font-semibold">
              {projectDetail.title}
            </h2>
            <ProjectButton url={projectDetail.url} id={projectDetail.id} />
          </div>
          <p className="">{projectDetail.details}</p>
          <p className="py-3 italic">TechStack: {projectDetail.techStack}</p>
          <span className="2xl:hidden"><ProjectButton url={projectDetail.url} id={projectDetail.id} /></span>
        </div>
        <div
          className={`${imageGrid} flex flex-col justify-center items-center p-5`}
        >
          <h2 className="text-4xl py-3 font-semibold 2xl:hidden mb-3">{projectDetail.title}</h2>
          <Image
            src={projectDetail.photo}
            alt={`Photo of ${projectDetail.title}`}
            width={400}
            height={400}
            className=" max-h-[500px] xs:max-w-[400px] xs:max-h-[600px] rounded-lg"
          />
        </div>
      </article>
      <div className="w-5/12 h-0.5 bg-orange-500 dark:bg-zinc-600 place-self-center"></div>
    </>
  );
}
