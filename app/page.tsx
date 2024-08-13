import Hero from "./components/Hero";
import { About } from "./components/About";
import Projects from "./components/Proyects"
import BentoGridThirdDemo from "./components/ExperienceAndEducation";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BentoGridThirdDemo />
      <Projects />
    </>
  );
}
