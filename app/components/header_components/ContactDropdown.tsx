"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ContactDropdown(): JSX.Element {
  const [contactDropdownOpen, setContactDropdownOpen] =
    useState<Boolean>(false);
  const contactRef = useRef(null);

  const {resolvedTheme} = useTheme();
  let emailSrc:string;
  let linkedInSrc:string;
  let gitHubSrc:string;
  switch (resolvedTheme) {
    case "light":
      emailSrc = "/images/email-black.png";
      linkedInSrc = "/images/linkedin-black.svg";
      gitHubSrc = "/images/github-black.svg";
      break;
    case "dark":
      emailSrc = "/images/email.png";
      linkedInSrc = "/images/linked-in.svg";
      gitHubSrc = "/images/github.svg";
      break;
    default:
      emailSrc = "/images/email.png";
      linkedInSrc = "/images/linked-in.svg";
      gitHubSrc = "/images/github.svg";
      break;
  }

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
        className="w-fit rounded-full p-2 hover:bg-orange-600 hover:text-white hover:dark:bg-zinc-600 hover:dark:text-orange-500"
      >
        Contact{" "}
        {contactDropdownOpen ? <span>&uArr;</span> : <span>&dArr;</span>}
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
                  src={emailSrc}
                  alt="Email icon"
                  width={50}
                  height={50}
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
                  src={linkedInSrc}
                  alt="LinkedIn icon"
                  width={50}
                  height={50}
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
                  src={gitHubSrc}
                  alt="GitHub icon"
                  width={50}
                  height={50}
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
