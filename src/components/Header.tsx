import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinkStyles } from "../utils/styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div
        className={`w-full bg-zinc-900 text-zinc-400 px-4 transition-all duration-300 ${
          isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "py-6"
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+90 216 258 55 40</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@basakdoner.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-white">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link to="#" className="hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link to="#" className="hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex lg:justify-between justify-around items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.jpeg"
                alt="Başak Döner"
                className="lg:w-32 w-16  h-auto object-cover"
              />
              <span className="lg:text-3xl text-lg font-serif text-red-800">
                Başak Döner
              </span>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 text-zinc-700 uppercase text-xl font-bold">
              <NavLink
                to="/anasayfa"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                ANASAYFA
              </NavLink>
              <NavLink
                to="/hakkımızda"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                HAKKIMIZDA
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                MENÜ
              </NavLink>
              <NavLink
                to="/basin"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                BASIN
              </NavLink>
              <NavLink
                to="/iletisim"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                İLETİŞİM
              </NavLink>
            </nav>

            {/* Mobile Menu */}
            <div
              className={`
                fixed inset-0 bg-white z-50 md:hidden
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
              `}
            >
              <div className="flex flex-col items-center pt-20 gap-8 text-zinc-700 uppercase text-xl font-bold">
                <NavLink
                  to="/anasayfa"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => navLinkStyles(isActive)}
                >
                  ANASAYFA
                </NavLink>
                <NavLink
                  to="/hakkımızda"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => navLinkStyles(isActive)}
                >
                  HAKKIMIZDA
                </NavLink>
                <NavLink
                  to="/menu"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => navLinkStyles(isActive)}
                >
                  MENÜ
                </NavLink>
                <NavLink
                  to="/basin"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => navLinkStyles(isActive)}
                >
                  BASIN
                </NavLink>
                <NavLink
                  to="/iletisim"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => navLinkStyles(isActive)}
                >
                  İLETİŞİM
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
