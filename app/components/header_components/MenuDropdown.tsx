"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import MenuDropdownContact from "./MenuDropdownContact";

export default function MenuDropdown(): JSX.Element {
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
    <div className="lg:hidden">
      <button
        onClick={() => handleOnClick()}
        ref={menuRef}
        className="w-24 rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500"
      >
        Menu {dropdownOpen ? <span>&uArr;</span> : <span>&dArr;</span>}
      </button>
      {dropdownOpen && (
        <div ref={dropdownRef} className="bg-orange-500 dark:bg-zinc-800 z-10 absolute left-3 top-16 rounded-lg shadow-lg w-32">
          <ul className="w-34 p-2 flex flex-col items-center z-50">
            <li>
              <Link href={"/"} className="my-2 z-50">
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
            <MenuDropdownContact />
            <li>
              <a download href="/david_mason_cv.pdf" target="_blank">
                <button className="min-w-[100px] rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500  z-50">
                  CV
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
