"use client"

// Imports
import { useEffect, useState } from "react"
// import sun from "../../../public/sun.json"
import Image from "next/image";


// Component function for the mode toggle
export default function ModeToggle() {
    // Create the dark mode state set to true
    const [darkMode, setDarkMode] = useState<boolean>(true);

    // Function to handle click of toggle which changes darkMode boolean
    function handleClick():void {
        // Switch he state of darkMode
        setDarkMode(prevMode => !prevMode);
        // Need to move and look into context again
    };

    // Variable set depening on darkMode state
    const position = darkMode ? "translate-x-0" : "translate-x-7"

    // export const test = darkMode

    // Component function for the toggle button
    return (
        <div className="flex">
            <Image src="/moon.png" alt="moon image" width="30" height="30" />
            <div className="w-14 h-7 bg-zinc-500 rounded-full px-1 flex items-center" onClick={() => handleClick()}>
                <div className={`w-5 h-5 rounded-full bg-amber-500 border-2 border-amber-700 ${position}`}></div>
            </div>
            <Image src="/sun.png" alt="sun image" width="30" height="30" />
        </div>
    )
}