import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
  XIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinkStyles } from "../utils/styles";
import Container from "./Container";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div
        className={`w-full bg-zinc-900 text-zinc-400 transition-all duration-300 ${
          isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "py-2.5"
        }`}
      >
        <Container>
          <div className="flex lg:flex-row justify-between items-center text-sm gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 w-full">
                <Phone className="h-5 w-5" />
                <a href="tel:+902164630563" className="hover:text-gray-300">
                  +90 216 463 05 63
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:basakdoner@outlook.com"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  basakdoner@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="#" className="hover:text-white">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link to="#" className="hover:text-white">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link to="#" className="hover:text-white">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`transition-all duration-300 bg-[#FFF3D9] ${
          isScrolled ? "backdrop-blur-sm" : ""
        }`}
      >
        <Container>
          <div className="flex justify-between items-center pt-1 pb-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Başak Döner"
                className="lg:w-32 w-16 h-auto object-cover"
              />
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
            <nav className="hidden md:flex items-center gap-6 text-zinc-800 text-lg font-bold">
              <NavLink
                to="/"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                Anasayfa
              </NavLink>
              <NavLink
                to="/hakkımızda"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                Hakkımızda
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                Menü
              </NavLink>
              <NavLink
                to="/basin"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                Basın
              </NavLink>
              <NavLink
                to="/iletisim"
                className={({ isActive }) => navLinkStyles(isActive)}
              >
                İletişim
              </NavLink>
            </nav>

            {/* Mobile Menu */}
            <div
              className={`
                fixed inset-0 bg-white h-dvh z-50 md:hidden
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
              `}
            >
              <span
                className="absolute top-4 right-4 text-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <XIcon />
              </span>
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
        </Container>
      </div>
    </header>
  );
};

export default Header;
