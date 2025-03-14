import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="neo4py-container flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex items-center space-x-2 transition-transform hover:scale-[1.01]"
        >
          <div className="h-8 w-8 bg-neo4py rounded-md flex items-center justify-center text-white font-mono tracking-tighter">
            n4
          </div>
          <span>neo4py</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="#features"
            className="text-sm font-medium text-gray-600 hover:text-neo4py transition-colors"
          >
            Features
          </Link>
          <Link
            to="#quickstart"
            className="text-sm font-medium text-gray-600 hover:text-neo4py transition-colors"
          >
            Quick Start
          </Link>
          <Link
            to="/docs"
            className="text-sm font-medium text-gray-600 hover:text-neo4py transition-colors"
          >
            Documentation
          </Link>
          <Link
            to="https://github.com/Athar-Naveed/neo4py"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                    border border-neo4py/20 bg-neo4py/10 hover:bg-neo4py/20 text-neo4py-dark px-4 py-2"
          >
            GitHub
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible bg-white/95 backdrop-blur-md shadow-lg"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="neo4py-container flex flex-col py-6 space-y-6">
          <Link
            to="#features"
            className="text-base font-medium text-gray-800 hover:text-neo4py"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="#quickstart"
            className="text-base font-medium text-gray-800 hover:text-neo4py"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Quick Start
          </Link>
          <Link
            to="/docs"
            className="text-base font-medium text-gray-800 hover:text-neo4py"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </Link>

          <Link
            to="https://github.com/Athar-Naveed/neo4py"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-base font-medium 
                    bg-neo4py hover:bg-neo4py-dark text-white px-4 py-2 w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
