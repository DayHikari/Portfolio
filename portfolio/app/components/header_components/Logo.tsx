// Imports
import Image from "next/image"

// Component function for the header logo
export default function Logo() {
  return (
    <div className="w-12 h-12 bg-zinc-300 rounded-full justify-self-end">
      <Image src="/icon.png" alt="Personal logo image" width="50" height="50" />
    </div>
  );
}
