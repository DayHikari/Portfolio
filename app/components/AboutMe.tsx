import LowerDivider from "./dividers/LowerDivider";
import UpperDivider from "./dividers/UpperDivider";

export default function AboutMe() {
  return (
    <section className="bg-zinc-300 dark:bg-black flex flex-col">
      <UpperDivider />
      <article className="w-8/12 self-center">
        <h1 className="w-64 py-3 text-5xl md:text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 dark:via-amber-500 to-amber-600 dark:to-amber-700">
          About Me
        </h1>
        <div className="flex flex-col md:grid grid-cols-2 gap-x-7">
          <p>
            As mentioned, my name is David Mason and I am a grand strategy
            gamer, board game lover, avid reader and now a fledgling Full-Stack
            Software Engineer.
            <br />
            <br />I have always enjoyed working out how to solve a problem or
            puzzle which fueled my interest in science. Trying to understand how
            something works by putting the pieces of knowledge together has
            always satisfyingly scratched an itch in my mind, especially when
            the pieces were initially difficult to put together.
            <br />
            <br />
          </p>
          
          <p>This is my about me section which I have yet to finish.</p>
        </div>
      </article>
      <LowerDivider />
    </section>
  );
}
