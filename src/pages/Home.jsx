import { useEffect } from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AboutValues from "../components/AboutValues";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".sectionMove");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <AboutValues />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
