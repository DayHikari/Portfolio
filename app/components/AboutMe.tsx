import LowerDivider from "./dividers/LowerDivider";
import UpperDivider from "./dividers/UpperDivider";

export default function AboutMe() {
  return (
    <section className="bg-zinc-300 dark:bg-black flex flex-col">
      <UpperDivider />
      <article className="w-8/12 self-center my-5">
        <h1 className="w-64 py-3 text-5xl md:text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 dark:from-amber-700 via-zinc-600 dark:via-amber-500 to-zinc-950 dark:to-amber-700">
          About Me
        </h1>
        <div className="flex flex-col md:grid grid-cols-2 gap-x-7 text-xl font-medium">
          <p>
            As mentioned, my name is David Mason and I am a grand strategy
            gamer, board game lover, avid reader and now a fledgling Full-Stack
            Software Engineer.
            <br />
            <br />I have always enjoyed working out how to solve a problem or
            puzzle which fueled my interest in science. Trying to understand how
            something works by putting the pieces of knowledge together has
            always satisfyingly scratched an itch in my mind, especially when
            the pieces were initially difficult to put together. I have used
            this enjoyment of problem solving throughout my life from getting my
            university degree in Biochemistry, living and teaching in Japan
            whilst learning the language, as well as during my career as a
            scientist.
            <br />
            <br />I was first properly introduced to software development in
            late 2021 and I say properly as I have been aware of software
            devlopment for a long time but always imagine it as some mystical
            computer language of symbols, ones and zeros. I was taught the error
            of my ignorance by my wife who was learning to code during the
            COVID-19 pandemic and insisted I should look into it as she
            guaranteed I would enjoy it. Turns out she was right once again.
          </p>

          <p>
            I started off learning HTML and CSS through FreeCodeCamp in Sepember
            2021 which was pretty fun but what really caught me was when I
            started learning JavaScript. After trying to learn JavaScript when I
            had time after work for about a year I realised that software
            development is what I really wanted to do for my career and I would
            therefore need to fully throw myself into coding if I want to make
            the move. As such, I applied to the School of Code bootcamp in early
            2023 and out of the thousands of applicants I was accepted for the
            intense 16-week course.
            <br />
            <br />
            The School of Code bootcamp does not require any prior coding
            knowledge so I thought that I would be at an advantage having spent
            some time learning JavaScript previously which was true for about 3
            weeks. The course was certainly fast-paced and from week 3 onward
            everything was new which is when it got really fun. Everyday we
            learnt a new topic before putting it into practice during workshops
            and then creaitng something using what we had learnt that week
            during the weekly Hackathon. I learnt so much during the course and
            have thoroughly enjoyed the 1 week and 4 week projects but am now
            excited to start applying what I have learnt so far in the workplace
            as well as continuing to develop my abilities and knowledge.
          </p>
        </div>
      </article>
      <LowerDivider />
    </section>
  );
}
