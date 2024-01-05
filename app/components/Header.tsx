// Imports

import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "./header_components/Logo";
import Navigation from "./header_components/Navigation";

// Component function for the header
export default function Header(): JSX.Element {
  return (
    <header className="w-screen h-14 p-1 bg-orange-500 dark:bg-zinc-800 grid grid-cols-[3fr_1fr_3fr] fixed top-0 z-10">
      <Navigation />
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}
