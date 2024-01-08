// Imports
import Image from "next/image";
import Link from "next/link";

// Component function for the header logo
export default function Logo(): JSX.Element {
  return (
    <div className="w-12 h-12 bg-zinc-300 rounded-full justify-self-center">
      <Link href={"/"}>
        <Image
          src="/icon.png"
          alt="Personal logo"
          width="50"
          height="50"
        />
      </Link>
    </div>
  );
}
