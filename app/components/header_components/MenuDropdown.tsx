"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function MenuDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState<Boolean>(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleOnClick = (): void => {
    setDropdownOpen((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== dropdownRef.current) {
        setDropdownOpen(false);
      }
    });
  }

  return (
    <div className="sm:hidden">
      <button
        onClick={() => handleOnClick()}
        ref={menuRef}
        className="w-24 rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500"
      >
        Menu
      </button>
      {dropdownOpen && (
        <div className="bg-orange-500 dark:bg-zinc-800 z-50 absolute left-3 top-16 rounded-lg shadow-lg w-fit">
          <ul className="w-40 p-2 flex flex-col items-center">
            <li>
              <Link href={"/"} className="my-2">
                <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="my-2">
                <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <button className="min-w-[70px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500 my-2">
                CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
