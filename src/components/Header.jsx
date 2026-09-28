import { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleMove = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const currentScrollY = window.scrollY;

      // 현재 보고 있는 섹션 확인
      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
          }
        }
      });

      // 모바일에서는 헤더를 항상 표시
      if (window.innerWidth <= 768) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const homeSection = document.getElementById("home");
      const isHomeVisible =
        homeSection &&

        homeSection.getBoundingClientRect().bottom > 160;

      // 메인 화면에서는 항상 표시
      if (isHomeVisible) {
        setIsHeaderVisible(true);
      }
      // 위로 스크롤하면 표시
      else if (currentScrollY < lastScrollY.current - 4) {
        setIsHeaderVisible(true);
      }
      // 아래로 스크롤하면 숨김
      else if (currentScrollY > lastScrollY.current + 4) {
        setIsHeaderVisible(false);
        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // PC에서 커서를 화면 맨 위로 올리면 헤더 표시
    const handleMouseMove = (event) => {
      if (window.innerWidth > 768 && event.clientY <= 20) {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <header className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
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
