interface promptObject {
  url: string | undefined;
  id: number;
}

export default function ProjectButton({ url, id }: promptObject): JSX.Element {
  // const location:string = id % 2 === 1 ? "justify-self-end" : "justify-self-start"
  const projectText: string = url
    ? "Link to the project"
    : "Project not yet deployed";
  return (
    <a href={url} className="w-fit min-w-[233px]" target="_blank">
      <button className="text-black text-lg mt-8 mb-[-20px] sm:mt-0 sm:mb-0 font-semibold px-2 py-1 border-2 border-orange-600 dark:border-zinc-800 rounded-full bg-gradient-to-b from-orange-500 via-orange-300 to-orange-500 h-12">
        {projectText}
      </button>
    </a>
  );
}
