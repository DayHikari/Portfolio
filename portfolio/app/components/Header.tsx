// Imports

import Logo from "./header_components/logo";

// Component function for the header
export default function Header() {
    return (
        <header className="w-screen h-12 bg-zinc-800 flex flex-col items-center">
            <Logo />
        </header>
    )
}