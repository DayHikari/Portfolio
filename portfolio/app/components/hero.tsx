"use client"
//Imports
import {useState, useEffect} from "react"

// Hero function
export default function Hero() {
    // Set state
    const [columnStart, setColumnStart] = useState<number>(13);
    const [secondStart, setSecondStart] = useState<number>(13);
    const [colourIndex, setColourIndex] = useState<number>(0);

    const columnArray = ["col-start-1", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7", "col-start-8", "col-start-9", "col-start-10", "col-start-11", "col-start-12",];
    const colourArray = ["bg-black", "bg-white"];

    // Use effect to randomly generate column start location
    useEffect(() => {

        const interval = setInterval(() => {
            setColumnStart(Math.floor(Math.random() * 12) + 1);
            setSecondStart(Math.floor(Math.random() * 12) + 1);
            if(colourIndex === 0){
                setColourIndex(1);
            } else {
                setColourIndex(0);
            };
        }, 1500);

        return () => clearInterval(interval);
    }, [columnStart, colourIndex]);

    // useEffect(() => {

    //     const colourInterval = setInterval(() => {
    //         if(colourIndex === 0){
    //             setColourIndex(1);
    //         } else {
    //             setColourIndex(0);
    //         };
    //     }, 3000);

    //     return () => clearInterval(colourInterval);
    // }, [colourIndex]);
  return (
    <section className="grid gap-4 grid-cols-12 grid-rows-6 h-screen bg-black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
        <h1 className="text-6xl p-5 bg-black">My name is David Mason</h1>
        <h2 className="text-4xl bg-black p-5 ">Welcome to my Portfolio</h2>
      </div>
      <div className="w-20 h-20 bg-black rotate-45 self-center justify-self-center col-start-3 row-start-3"></div>
      <div className={`w-20 h-20 ${colourArray[colourIndex]} rotate-45 self-center justify-self-center ${columnArray[columnStart]} row-start-5`}></div>
      <div className={`w-20 h-20 ${colourArray[colourIndex]} rotate-45 self-center justify-self-center ${columnArray[secondStart]} row-start-5`}></div>
      <div className={`w-20 h-20 ${colourArray[colourIndex]} rotate-45 self-center justify-self-center ${columnArray[columnStart]} row-start-5`}></div>
      <div className={`w-20 h-20 ${colourArray[colourIndex]} rotate-45 self-center justify-self-center ${columnArray[columnStart]} row-start-5`}></div>
      <div className={`w-20 h-20 ${colourArray[colourIndex]} rotate-45 self-center justify-self-center ${columnArray[columnStart]} row-start-5`}></div>
    </section>
  );
}
