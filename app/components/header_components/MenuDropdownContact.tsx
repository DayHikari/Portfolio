import Image from "next/image";

export default function MenuDropdownContact(): JSX.Element {
  return (
    <li className="flex flex-wrap text-center justify-center">
        <h3 className="w-full mb-1">Contact:</h3>
      <a
        href="mailto:David_Mason_@hotmail.co.uk"
        className="w-fit"
      >
        <Image
          src={"/images/email.png"}
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
          src={"/images/linked-in.svg"}
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
          src={"/images/github.svg"}
          alt="Email icon"
          width={30}
          height={30}
        />
      </a>
    </li>
  );
}
