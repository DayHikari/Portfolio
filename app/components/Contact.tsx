import Image from "next/image";
import LowerDivider from "./dividers/LowerDivider";
import UpperDivider from "./dividers/UpperDivider";

export default function Contact() {
  return (
    <section className="bg-zinc-300 dark:bg-black flex flex-col">
      <UpperDivider />
      <article className="w-8/12 self-center my-5 flex flex-col items-center">
        <h1 className="w-64 py-3 my-4 text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 dark:from-amber-700 via-zinc-600 dark:via-amber-500 to-zinc-950 dark:to-amber-700">
          Contact
        </h1>
        <p className="text-xl sm:text-2xl text-center mb-4">
          If you would like to contact me about my work or are looking for an
          enthusiastic new developer then feel free to contact me!
        </p>
        <a href="mailto:David_Mason_@hotmail.co.uk" className="flex items-end w-fit mb-2">
          <Image
            src={"/images/email.png"}
            alt="Email icon"
            width={32}
            height={32}
            className="sm:w-[50px]"
          />
          <p className="ml-2 text-lg sm:text-2xl">David_Mason_@hotmail.co.uk</p>
        </a>
        <a href="https://www.linkedin.com/in/davidianmason1702/" className="flex items-end w-fit mb-2">
          <Image
            src={"/images/linked-in.svg"}
            alt="Email icon"
            width={32}
            height={32}
            className="sm:w-[50px]"
          />
          <p className="ml-2 text-lg sm:text-2xl">DavidIanMason1702</p>
        </a>
        <a href="https://github.com/DayHikari" className="flex items-end w-fit">
          <Image
            src={"/images/github.svg"}
            alt="Email icon"
            width={32}
            height={32}
            className="sm:w-[50px]"
          />
          <p className="ml-2 text-lg sm:text-2xl">DayHikari</p>
        </a>
      </article>
      <LowerDivider />
    </section>
  );
}
