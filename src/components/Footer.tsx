import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Map,
  MapPin,
  Phone,
  X,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 right-0 bg-gray-800 text-white">
      {/* <div className="container mx-auto px-4 py-4">
       
      </div> */}
      <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-4">
            {/* 
            image */}
            <p className="text-base">
              Geleneksel lezzeti modern sunumla birleştiren döner ustası.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-semibold">İletişim</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+90 216 258 55 40</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@basakdoner.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-semibold">
              Çalışma Saatleri
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <p>Pazartesi - Cuma: 10:00 - 22:00</p>
              <p>Cumartesi - Pazar: 10:00 - 23:00</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-semibold">Sosyal Medya</h3>
            <div className="flex items-center gap-4">
              <Link to="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="hover:text-white">
                <X className="h-6 w-6 text-blue-600" />
              </Link>
              <Link to="#" className="hover:text-white">
                <Instagram className="h-6 w-6 text-red-700" />
              </Link>
              <Link to="#" className="hover:text-white">
                <Youtube className="h-7 w-7 text-gray-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t-2 border-black text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Başak Döner. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
