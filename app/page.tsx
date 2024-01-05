import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}
