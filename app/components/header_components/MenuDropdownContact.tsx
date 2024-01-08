"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export default function MenuDropdownContact(): JSX.Element {
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
  };

  return (
    <li className="flex flex-wrap text-center justify-center">
        <h3 className="w-full mb-1">Contact:</h3>
      <a
        href="mailto:David_Mason_@hotmail.co.uk"
        className="w-fit"
      >
        <Image
          src={emailSrc}
          alt="Email icon"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/davidianmason1702/"
        target="_blank"
        className="w-fit"
      >
        <Image
          src={linkedInSrc}
          alt="Email icon"
          width={30}
          height={30}
          className="mx-1"
        />
      </a>
      <a
        href="https://github.com/DayHikari"
        target="_blank"
        className="w-fit"
      >
        <Image
          src={gitHubSrc}
          alt="Email icon"
          width={30}
          height={30}
        />
      </a>
    </li>
  );
}
