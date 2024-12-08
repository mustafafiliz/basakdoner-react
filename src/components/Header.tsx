import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinkStyles } from "../utils/styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div
        className={`w-full bg-zinc-900 text-zinc-400 py-6 px-4 transition-all duration-300 ${
          isScrolled ? "h-0 py-0 opacity-0 overflow-hidden" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
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
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "bg-opacity-100 shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.jpeg"
                alt="Başak Döner"
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-auto object-cover "
              />
              <span className="text-3xl font-serif text-red-800">
                Başak Döner
              </span>
            </Link>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
