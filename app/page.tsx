import Hero from "./components/Hero";
import { About } from "./components/About";
import Projects from "./components/Proyects"
import BentoGridThirdDemo from "./components/ExperienceAndEducation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BentoGridThirdDemo />
      <Projects />
      <Footer />
    </>
  );
}
