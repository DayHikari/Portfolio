// Interface for the component function prompts
interface promptObject {
  colour: string;
  column: string;
  row: string;
}
// Component function for the diamonds in the hero section.
// Takes the colour of the diamond as a prop
export default function HeroDiamond({ colour, column, row }: promptObject) {
  return (
    <>
      <div
        className={`w-2 lg:w-3 h-2 lg:h-3 ${colour} rotate-45 self-center justify-self-center ${column} ${row} transition-all duration-200`}
      ></div>
      <div
        className={`w-2 lg:w-3 h-2 lg:h-3 ${colour}  self-center justify-self-center ${column} ${row} transition-all duration-200`}
      ></div>
    </>
  );
}
