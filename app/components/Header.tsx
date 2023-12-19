// Imports

import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "./header_components/Logo";
import Navigation from "./header_components/Navigation";

// Component function for the header
export default function Header() {
    return (
        <header className="w-screen h-14 p-1 bg-orange-500 dark:bg-zinc-800 grid grid-cols-3">
            <Navigation />
            <Logo />
            <ThemeSwitcher />
        </header>
    )
}