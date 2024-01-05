"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher(): JSX.Element | null {
  // State for whether the page has been mounted
  const [mounted, setMounted] = useState(false);
  // Colour Theme state
  const { theme, setTheme } = useTheme();

  // Prevents hydration issues by returning nothing until after the page has been mounted client site
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="justify-self-end mr-5 flex">
      <button onClick={() => setTheme("dark")}>
        <Image src="/images/moon.png" alt="moon image" width="48" height="48" />
      </button>
      <button onClick={() => setTheme("light")}>
        <Image src="/images/sun.png" alt="sun image" width="48" height="48" />
      </button>
    </div>
  );
}
