"use client";


//Imports
import { useState, useEffect } from "react";
import HeroText from "./hero_components/HeroText";
import HeroDiamond from "./hero_components/HeroDiamond";
import Pattern from "./hero_components/Pattern";

// Hero function
export default function Hero() {
  // Set state for the array of colours
  const [colour, setColour] = useState<Array<string>>(Array(12).fill("bg-black"));

  // Variable array for the column start positions
  const columnArray: Array<string> = ["col-start-1", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7", "col-start-8", "col-start-9", "col-start-10", "col-start-11", "col-start-12"];
  // Variable array for the row start positions
  const rowArray: Array<string> = ["row-start-1", "row-start-5", "row-start-3", "row-start-6", "row-start-2", "row-start-4", "row-start-3", "row-start-1", "row-start-5", "row-start-2", "row-start-4", "row-start-1"];
  

  // Use effect to randomly generate array of random numbers and set state based on numbers
  useEffect(() => {
    // Set the interval
    const interval = setInterval(() => {

      // Set an array of 0 to a variable
      const binaryArray: Array<number> = Array(12).fill(0);

      // For loop to iterate through the binaryArray variable and randomly set to either 1 or 0
      for (let i = 0; i < binaryArray.length; i++) {
        binaryArray[i] = Math.floor(Math.random() * 2);
      };

      // Set color array values to the bg-color dependant on if the associated binaryArray value is 1 or 0
      setColour((prev) =>
        prev.map((elem, index) =>
          binaryArray[index] === 1 ? "bg-zinc-300" : "bg-black"
        )
      );

    }, 500);

    // return the clearInterval for the dismounting of the page to prevent memory leak
    return () => clearInterval(interval);

    // Use effct is dependent on colour state
  }, [colour]);

  // Function to generate the pattern divs
  function generatePattern() {
    const compArray = []
    for(let i = 1; i <= 12; i++) {
      for(let j = 1; j <= 6; j++) {
        compArray.push(<Pattern key={`${i}${j}`} column={`col-start-${i}`} row={`row-start-${j}`}/>)
      }
    }
    return compArray;
  }

  return (
    <section className="grid gap- grid-cols-12 grid-rows-6 h-screen bg-black">
      <HeroText />
      {generatePattern()}
      {colour.map((elem, index) => (<HeroDiamond key={index} colour={elem} column={columnArray[index]} row={rowArray[index]} />))}
    </section>
  );
}
