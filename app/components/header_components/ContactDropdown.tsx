"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ContactDropdown() {
  const [contactDropdownOpen, setContactDropdownOpen] = useState<Boolean>(false);
  const contactRef = useRef(null);

  const handleOnClick = (): void => {
    setContactDropdownOpen((prev) => !prev);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (e.target !== contactRef.current) {
        setContactDropdownOpen(false);
      }
    });
  }

  return (
    <div className="">
      <button
        onClick={() => handleOnClick()}
        ref={contactRef}
        className="w-28 rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500"
      >
        Contact {contactDropdownOpen ? <span>&uArr;</span> : <span>&dArr;</span>}
      </button>
      {contactDropdownOpen && (
        <div className="bg-orange-500 dark:bg-zinc-800 z-10 absolute ml-12 top-16 rounded-lg shadow-lg w-fit">
          <ul className="w-34 p-2 flex flex-col items-center z-50">
            <li>
              <a
                href="mailto:David_Mason_@hotmail.co.uk"
                className="flex items-end w-fit mb-2"
              >
                <Image
                  src={"/images/email.png"}
                  alt="Email icon"
                  width={32}
                  height={32}
                  className="sm:w-[50px]"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/davidianmason1702/"
                target="_blank"
                className="flex items-end w-fit mb-2"
              >
                <Image
                  src={"/images/linked-in.svg"}
                  alt="Email icon"
                  width={32}
                  height={32}
                  className="sm:w-[50px]"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DayHikari"
                target="_blank"
                className="flex items-end w-fit"
              >
                <Image
                  src={"/images/github.svg"}
                  alt="Email icon"
                  width={32}
                  height={32}
                  className="sm:w-[50px]"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}