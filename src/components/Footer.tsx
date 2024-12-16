import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-gray-800 text-white">
      {/* <div className="container mx-auto px-4 py-4">
       
      </div> */}
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-start gap-4">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="Başak Döner"
                  className="lg:w-32 w-16 h-auto object-cover"
                />
              </Link>

              <p className="text-base">
                Geleneksel lezzeti modern sunumla birleştiren döner ustası.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl lg:text-2xl font-semibold">
                İletişim
              </h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
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
                  >
                    basakdoner@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl lg:text-2xl font-semibold">
                Çalışma Saatleri
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <p>Pazartesi - Cuma: 11:00 - 19:30</p>
                <p>Cumartesi : 11:00 - 19:30</p>
                <p>Pazar : Kapalı</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl lg:text-2xl font-semibold">
                Sosyal Medya
              </h3>
              <div className="flex items-center gap-4 mt-4">
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
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-4 border-t-2 border-gray-100 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Başak Döner. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
