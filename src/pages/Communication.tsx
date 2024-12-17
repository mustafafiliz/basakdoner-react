import { Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Communication = () => {
  return (
    <>
      <Helmet>
        <title>Başak Döner - İletişim</title>
        <meta
          name="description"
          content="Başak Döner şubelerimiz, iletişim bilgilerimiz ve adres bilgilerimiz. Sipariş ve önerileriniz için bize ulaşın."
        />
        <meta
          name="keywords"
          content="başak döner iletişim, başak döner adres, başak döner telefon, başak döner sipariş"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <img
          src="/images/döner2.jpg"
          alt="döner"
          className="w-full h-[400px] object-cover"
        />
        <div className="w-full bg-red-800 text-white py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Adres</h3>
                <p className="text-gray-100">
                  Kozyatağı, Yavuzlar Apartmanı, Kozyatağı Sk.
                </p>
                <p className="text-gray-100">No:23/A, 34742 Kadıköy/İstanbul</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">İletişim</h3>
                <a
                  href="tel:+902164630563"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Tel: +90 216 463 05 63
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">E-Mail</h3>
                <a
                  href="mailto:basakdoner@outlook.com"
                  className="text-gray-100 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  basakdoner@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="w-full h-[500px]  rounded-lg hidden lg:block">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <img
                src="/images/Maps.png"
                alt="maps"
                className="h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[500px]  rounded-lg lg:hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <img
                src="/images/MapsMobile.png"
                alt="maps"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Communication;
