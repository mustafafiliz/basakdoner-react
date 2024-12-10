import { CardContent } from "../components/MenuCard";

const menuItems = [
  {
    title: "LAVAŞ ÜSTÜ DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "PORSİYON DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "PİLAV ÜSTÜ DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "İSKENDER",
    image: "/images/döner2.jpg",
  },
  {
    title: "DÜRÜM DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "TOMBİK DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "SANDVİÇ EKMEK DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "TAM EKMEK DÖNER",
    image: "/images/döner2.jpg",
  },
  {
    title: "EZO GELİN ÇORBASI",
    image: "/images/döner2.jpg",
  },
];

const Menu = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
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
  );
};

export default Menu;
