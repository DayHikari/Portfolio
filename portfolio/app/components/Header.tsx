// Imports

import Logo from "./header_components/Logo";
import ModeToggle from "./header_components/ModeToggle";

// Component function for the header
export default function Header() {
    return (
        <header className="w-screen h-12 bg-zinc-800 flex justify-around items-center">
            <ModeToggle />
            <Logo />
            <div></div>
        </header>
    )
}