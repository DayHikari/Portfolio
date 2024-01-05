// Component function that returns the text for he Hero section
export default function HeroText(): JSX.Element {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-[5] bg-gradient-to-br from-zinc-950 dark:from-orange-700 via-zinc-600 dark:via-amber-500 to-zinc-950 dark:to-orange-700 bg-clip-text text-orange-600 dark:text-orange-500 sm:text-transparent sm:dark:text-transparent">
      <h1 className="text-5xl sm:text-8xl p-2 sm:p-5 bg-zinc-300 dark:bg-black sm:bg-transparent sm:dark:bg-transparent font-semibold font-serif">
        My name is David Mason
      </h1>
      <h2 className="text-3xl sm:text-5xl p-5 bg-zinc-300 dark:bg-black sm:bg-transparent sm:dark:bg-transparent font-semibold font-serif">
        Welcome to my Portfolio
      </h2>
    </div>
  );
}
