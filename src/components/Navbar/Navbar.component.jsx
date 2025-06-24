import { useEffect, useRef, useState } from "react";
import LOGO from "../../assets/logo.png";
import { NAVLINKS } from "../../utils/data";

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);
  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 bg-transparent w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      <a href="/" className="flex items-center gap-2">
        <img src={LOGO} alt="logo" className="h-14" />
      </a>

      <div className="hidden lg:flex items-center gap-4 lg:gap-8">
        {NAVLINKS.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group flex flex-col gap-0.5 text-black font-semibold"
          >
            {link.name}
            <div className="bg-cyan-400 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <button
          type="button"
          className="bg-cyan-400 text-white hover:bg-cyan-600 px-8 py-2.5 rounded-full ml-4 transition-all duration-300 cursor-pointer"
        >
          Got Demo
        </button>
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <div
        className={`fixed top-0 left-0 w-3/4 h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {NAVLINKS.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-black font-semibold hover:text-cyan-400 focus-within:text-cyan-400 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}

        <button
          type="button"
          className="bg-cyan-400 text-white px-8 py-2.5 rounded-full transition-all duration-500"
        >
          Got Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
