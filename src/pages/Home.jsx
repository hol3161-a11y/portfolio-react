import { useEffect } from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "./About";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".sectionMove");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;