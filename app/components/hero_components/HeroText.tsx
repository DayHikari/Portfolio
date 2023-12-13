// Component function that returns the text for he Hero section
export default function HeroText() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
      <h1 className="text-4xl sm:text-8xl p-5 bg-zinc-400 dark:bg-black sm:bg-transparent sm:dark:bg-transparent text-orange-700 font-semibold font-serif">My name is David Mason</h1>
      <h2 className="text-2xl sm:text-5xl p-5 bg-zinc-400 dark:bg-black sm:bg-transparent sm:dark:bg-transparent text-orange-700 font-semibold font-serif">Welcome to my Portfolio</h2>
    </div>
  );
}