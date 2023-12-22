"use client";
import { useState } from "react";
import LargeText from "./about_me_components/LargeText";
import LowerDivider from "./dividers/LowerDivider";
import UpperDivider from "./dividers/UpperDivider";
import ShortText from "./about_me_components/ShortText";
import ShowButton from "./about_me_components/ShowButton";

export default function AboutMe() {
  const [showAll, setShowAll] = useState<Boolean>(false);

  const showMore = () => {
    setShowAll(true);
  };

  const showLess = () => {
    setShowAll(false);
  };

  return (
    <section className="bg-zinc-300 dark:bg-black flex flex-col">
      <UpperDivider />
      <article className="w-8/12 self-center my-5">
        <h1 className="w-64 py-3 text-5xl md:text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 dark:from-amber-700 via-zinc-600 dark:via-amber-500 to-zinc-950 dark:to-amber-700">
          About Me
        </h1>
        <div className="hidden xs:flex flex-col md:grid grid-cols-2 gap-x-7 text-xl font-medium ">
          <LargeText />
        </div>
        <div className="flex xs:hidden flex-col items-center text-base font-medium ">
          {showAll ? (
            <>
              <LargeText />
              <ShowButton desc="Show less" clickFunction={showLess} />
            </>
          ) : (
            <>
              <ShortText />
              <ShowButton desc="Show more" clickFunction={showMore} />
            </>
          )}
        </div>
      </article>
      <LowerDivider />
    </section>
  );
}
