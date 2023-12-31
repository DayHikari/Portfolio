// Interface for the props
interface promptObject {
  column: string;
  row: string;
}
// Component function to generate a pattern for the grid
export default function Pattern({ column, row }: promptObject): JSX.Element {
  return (
    <div
      className={`bg-zinc-300 dark:bg-black ${column} ${row} shadow-[0px_0px_35px_15px_inset] shadow-zinc-300 dark:shadow-black sm:dark:shadow-zinc-800 sm:shadow-orange-600`}
    ></div>
  );
}
