import { useState, useEffect } from "react";
import "../styles/Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMove = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <strong>LYW.</strong>

          <span>
            LEEYEWON
            <br />
            PORTFOLIO
          </span>
        </div>

        <div className="headerRight">
          <nav className="nav">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleMove("home");
              }}
            >
              HOME
            </a>

            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleMove("about");
              }}
            >
              ABOUT
            </a>

            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleMove("projects");
              }}
            >
              PROJECTS
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleMove("contact");
              }}
            >
              CONTACT
            </a>
          </nav>

          <button className="menuBtn" onClick={() => setIsOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="menuOverlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className={`mobileMenu ${isOpen ? "open" : ""}`}>
        <button className="closeBtn" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        <nav>
          <a href="#home" onClick={() => setIsOpen(false)}>
            HOME
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            ABOUT
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            PROJECTS
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
