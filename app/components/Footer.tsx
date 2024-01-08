// Component function for the footer
export default function Footer(): JSX.Element {
  const d: Date = new Date();
  let year: number = d.getFullYear();
  return (
    <footer className="h-28 bg-orange-500 dark:bg-zinc-800 flex flex-col items-center justify-center">
      <h2 className="font-bold text-lg w-9/12 text-center mb-2">
        Designed and built in{" "}
        <span className="text-black dark:text-orange-500">Next.JS</span> by{" "}
        <span className="text-black dark:text-orange-500">David Mason</span>
      </h2>
      <h3>&copy; {year} All rights reserved</h3>
    </footer>
  );
}
