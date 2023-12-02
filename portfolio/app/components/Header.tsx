// Imports
import Image from "next/image"

// Component function for the header
export default function Header() {
    return (
        <header className="w-screen h-12 bg-zinc-700 flex flex-col items-center">
            <div className="w-12 h-12 bg-zinc-300 rounded-full">
            <Image src="/icon.png" alt="Personal logo image" width="50" height="50" />
            </div>
        </header>
    )
}