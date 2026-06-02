import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <FaCode className="text-blue-500 text-xl" />
          <h1 className="text-xl font-semibold text-black dark:text-white">
            AKIL KHAN
          </h1>
        </div>

        <nav className="hidden md:flex gap-10 text-sm font-medium text-black dark:text-white">
          <a href="#home">HOME</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

          <div className="flex items-center gap-4">

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="text-xl"
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>

  <button
    className="md:hidden text-xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

</div>

      </div>
      {menuOpen && (
  <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700">

    <nav className="flex flex-col p-6 gap-4 text-black dark:text-white">

      <a href="#home" onClick={() => setMenuOpen(false)}>
        HOME
      </a>

      <a href="#skills" onClick={() => setMenuOpen(false)}>
        SKILLS
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)}>
        WORK
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)}>
        ABOUT
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        CONTACT
      </a>

    </nav>

  </div>
)}
    </header>
  );
};

export default Navbar;