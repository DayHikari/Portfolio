"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="justify-self-end mr-5 flex">
      <button onClick={() => setTheme("dark")}>
        <Image
          src="/images/moon.png"
          alt="moon image"
          width="48"
          height="48"
        />
      </button>
      <button onClick={() => setTheme("light")}>
        <Image
          src="/images/sun.png"
          alt="sun image"
          width="48"
          height="48"
        />
      </button>
    </div>
  );
}
