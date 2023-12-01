"use client";

// // Plan
// Set location of a number of diamonds within the grid
// Create an array of strings consisting of bg-black and set as state - now all diamonds are black
// Create a useEffect function
// Within the useEffect, set up an interval timer function
// Within the interval function, set up an array of length equal to the state array containing random number (1 or 0)
// Use the setState function to map through the previous state array and set the bg color dependent on whether the random number at the same index
//    as the number array is 1 or 0

//Imports
import { useState, useEffect } from "react";

// Hero function
export default function Hero() {
  // Set state for the array of colours
  const [colour, setColour] = useState<Array<string>>(Array(12).fill("bg-black"));

  // Use effect to randomly generate array of random numbers and set state based on numbers
  useEffect(() => {
    // Set the interval
    const interval = setInterval(() => {
      // Set an array of 0 to a variable
      const binaryArray: Array<number> = Array(12).fill(0);
      // For loop to iterate through the binaryArray variable and randomly set to either 1 or 0
      for (let i = 0; i < binaryArray.length; i++) {
        binaryArray[i] = Math.floor(Math.random() * 2);
      }
      // Set color array values to the bg-color dependant on if the associated binaryArray value is 1 or 0
      setColour((prev) =>
        prev.map((elem, index) =>
          binaryArray[index] === 1 ? "bg-white" : "bg-black"
        )
      );
    }, 500);

    // return the clearInterval for the dismounting of the page to prevent memory leak
    return () => clearInterval(interval);

    // Use effct is dependent on colour state
  }, [colour]);

  return (
    <section className="grid gap-4 grid-cols-12 grid-rows-6 h-screen bg-black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
        <h1 className="text-6xl p-5 bg-black">My name is David Mason</h1>
        <h2 className="text-4xl bg-black p-5 ">Welcome to my Portfolio</h2>
      </div>
      <div
        className={`w-2 h-2 ${colour[0]} rotate-45 self-center justify-self-center col-start-1 row-start-1`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[1]} rotate-45 self-center justify-self-center col-start-2 row-start-5`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[2]} rotate-45 self-center justify-self-center col-start-3 row-start-4`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[3]} rotate-45 self-center justify-self-center col-start-4 row-start-6`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[4]} rotate-45 self-center justify-self-center col-start-5 row-start-2`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[5]} rotate-45 self-center justify-self-center col-start-6 row-start-4`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[6]} rotate-45 self-center justify-self-center col-start-7 row-start-3`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[7]} rotate-45 self-center justify-self-center col-start-8 row-start-1`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[8]} rotate-45 self-center justify-self-center col-start-9 row-start-5`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[9]} rotate-45 self-center justify-self-center col-start-10 row-start-2`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[10]} rotate-45 self-center justify-self-center col-start-11 row-start-3`}
      ></div>
      <div
        className={`w-2 h-2 ${colour[11]} rotate-45 self-center justify-self-center col-start-12 row-start-1`}
      ></div>
    </section>
  );
}
