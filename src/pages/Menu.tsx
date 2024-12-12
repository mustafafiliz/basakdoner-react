import { CardContent } from "../components/MenuCard";

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
      title: "Ezogelin Çorbası(fotoğraf yok)",
      image: "/images/çorba.jpg",
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
      image: "",
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

const Menu = () => {
  return (
    <div className="container mx-auto py-8">
      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#A31F34] text-center uppercase">
            {category}
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
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover"
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
  );
};

export default Menu;
