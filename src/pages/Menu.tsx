import { useRef } from "react";
import { CardContent } from "../components/MenuCard";
import { Helmet } from "react-helmet-async";

const menuItems = {
  etDöner: [
    {
      title: "ET DÖNER",
      image: "/images/et-döner.jpg",
    },
    {
      title: "Eti Bol Et Döner Dürüm",
      image: "/images/eti-bol-et-döner-dürüm.jpg",
    },
    {
      title: "Yarım Ekmek Eti Bol Et Döner",
      image: "/images/Yarım-Ekmek-Eti-Bol-Et-Döner.jpg",
    },
    {
      title: "Tombik Ekmek  Eti Bol Et Döner",
      image: "/images/Tombik-Ekmek-Eti-Bol-Et-Döner.jpg",
    },
    {
      title: "Pilav Üstü Et Döner",
      image: "/images/Pilav-Üstü-Et-Döner.jpg",
    },
    {
      title: "Et Döner Beyti",
      image: "/images/Et-Döner-Beyti.jpg",
    },
    {
      title: "İskender(Et Dönerden).jpg",
      image: "/images/İskender-(Et Dönerden).jpg",
    },
    {
      title: "Eti Bol Kaşarlı Et Döner Dürüm",
      image: "/images/Eti-Bol-Kaşarlı-Et-Döner-Dürüm.jpg",
    },
    {
      title: "Tombik Ekmek Eti Bol Kaşarlı Et Döner",
      image: "/images/Tombik-Ekmek-Eti-Bol-Kaşarlı-Et-Döner.jpg",
    },
    {
      title: "Tam Ekmek Eti Bol Et Döner",
      image: "/images/Tam-Ekmek-Eti-Bol-Et-Döner.jpg",
    },
    {
      title: "Et Döner Dürüm",
      image: "/images/Et-Döner-Dürüm.jpg",
    },
    {
      title: "Yarım Ekmek Et Döner",
      image: "/images/Yarım-Ekmek-Et-Döner.jpg",
    },
    {
      title: "Tombik Ekmek Et Döner.jpg",
      image: "/images/Tombik-Ekmek-Et-Döner.jpg",
    },
    {
      title: "Kaşarlı Et Döner Dürüm",
      image: "/images/Kaşarlı-Et-Döner-Dürüm.jpg",
    },
    {
      title: "Tombik Ekmek Kaşarlı Et Döner",
      image: "/images/Tombik-Ekmek-Kaşarlı-Et-Döner.jpg",
    },
    {
      title: "Tam Ekmek Kaşarlı Et Döner",
      image: "/images/Tam-Ekmek-Kaşarlı-Et-Döner.jpg",
    },
  ],
  tavukDöner: [
    {
      title: "TAVUK DÖNER",
      image: "/images/Tavuk-Döner.jpg",
    },
    {
      title: "Eti Bol Tavuk Döner Dürüm",
      image: "/images/Eti-Bol-Tavuk-Döner-Dürüm.jpg",
    },
    {
      title: "Yarım Ekmek Eti Bol Tavuk Döner",
      image: "/images/Yarım-Ekmek-Eti-Bol-Tavuk-Döner.jpg",
    },
    {
      title: "Tombik Ekmek Eti Bol Tavuk Döner",
      image: "/images/Tombik-Ekmek-Eti-Bol-Tavuk-Döner.jpg ",
    },
    {
      title: "Tombik Ekmek Kaşarlı Tavuk Döner",
      image: "/images/Tombik-Ekmek-Kaşarlı-Tavuk-Döner.jpg",
    },
    {
      title: "Eti Bol Kaşarlı Tavuk Döner Dürüm",
      image: "/images/Eti-Bol-Kaşarlı-Tavuk-Döner-Dürüm.jpg",
    },
    {
      title: "Pilav Üstü Tavuk Döner",
      image: "/images/Pilav-Üstü-Tavuk-Döner.jpg",
    },
    {
      title: "Tam Ekmek Eti Bol Tavuk Döner",
      image: "/images/Tam-Ekmek-Eti-Bol-Tavuk-Döner.jpg",
    },
    {
      title: "Tam Ekmek Tavuk Döner",
      image: "/images/Tam-Ekmek-Tavuk-Döner.jpg",
    },
    {
      title: "Kaşarlı Tavuk Döner Dürüm",
      image: "/images/Kaşarlı-Tavuk-Döner-Dürüm.jpg",
    },
  ],
  çorbalar: [
    {
      title: "Şehriyeli Tavuk Çorbası",
      image: "/images/Şehriye-Çorbası.jpg",
    },
    {
      title: "Ezogelin Çorbası",
      image: "/images/Ezogelin-Çorba.jpeg",
    },
  ],
  tatlılar: [
    {
      title: "Kemalpaşa Tatlısı",
      image: "/images/Kemalpaşa-Tatlısı.jpg",
    },
    {
      title: "Tahinli Kemalpaşa Tatlısı",
      image: "/images/Tahinli-Kemalpaşa-Tatlısı.jpg",
    },
    {
      title: "FIRIN SÜTLAÇ",
      image: "/images/Sütlaç2.jpeg",
    },
  ],
  yanLezzetler: [
    {
      title: "Çoban Salata",
      image: "/images/Çoban-Salata.jpg",
    },
    {
      title: "Duble Patates Kızartması",
      image: "/images/Duble-Patates-Kızartması.jpg",
    },
  ],
};

const separateWords = (word: string) => {
  return word
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
};

const Menu = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (category: string) => {
    const element = sectionRefs.current[category];
    const offset = 100; // Üst menü yüksekliği için offset

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Başak Döner - Menü</title>
        <meta
          name="description"
          content="Başak Döner'in lezzetli et döner, tavuk döner, çorbalar, tatlılar ve yan lezzetler menüsü"
        />
        <meta
          name="keywords"
          content="başak döner, et döner, tavuk döner, iskender, beyti, pilav üstü döner"
        />
        <link rel="canonical" href="/menu" />
      </Helmet>
      <div>
        <nav className="sticky lg:top-[89px] top-[48px] bg-[#A31F34] text-white shadow-md z-30">
          <div className="container mx-auto flex justify-center flex-wrap gap-4 p-4">
            {Object.keys(menuItems).map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="lg:px-4 lg:py-2 lg:text-lg text-sm font-semibold hover:text-black transition-colors uppercase"
              >
                {separateWords(category)}
              </button>
            ))}
          </div>
        </nav>
        <div className="container mx-auto py-8 lg:mt-4">
          {Object.entries(menuItems).map(([category, items]) => (
            <div
              key={category}
              ref={(el) => (sectionRefs.current[category] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-[#A31F34] text-center uppercase">
                {separateWords(category)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <CardContent
                    key={index}
                    className="overflow-hidden border-none shadow-lg"
                  >
                    <div className="relative">
                      <div className="absolute top-0 left-0 right-0 z-10 bg-[#A31F34] text-white py-2 px-4 text-center font-semibold">
                        {item.title}
                      </div>
                      <CardContent className="p-0 ">
                        <div className="relative aspect-4/3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover  md:transition-transform md:duration-300 md:hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CardContent>
                    </div>
                  </CardContent>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
