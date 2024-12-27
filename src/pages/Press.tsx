import { Helmet } from "react-helmet-async";

const Press = () => {
  return (
    <>
      <Helmet>
        <title>Başak Döner - Basın</title>
        <meta
          name="description"
          content="Başak Döner'in hikayesi, değerleri ve kalite anlayışı. 1974'ten beri değişmeyen lezzet."
        />
        <meta
          name="keywords"
          content="başak döner tarihi, başak döner hikaye, döner ustası, geleneksel döner"
        />
        <link rel="canonical" href="/basin" />
        <meta property="og:title" content="Başak Döner - Basın" />
        <meta
          property="og:description"
          content="Başak Döner'in hikayesi, değerleri ve kalite anlayışı. 1974'ten beri değişmeyen lezzet."
        />
        <meta
          property="og:image"
          content="https://basakdoner-react.vercel.app/logo.png"
        />
        <meta
          property="og:url"
          content="https://basakdoner-react.vercel.app/basin"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Başak Döner" />
      </Helmet>
      <div>
        <section className="lg:py-12 py-6">
          <div className="container mx-auto px-4">
            <h2 className="lg:text-3xl text-xl font-semibold lg:mb-8 mb-2">
              Gazete & Dergi
            </h2>
            <div className="lg:border-2 border border-red-800 w-full lg:my-10 my-5" />

            <div className="lg:flex lg:gap-16 lg:mt-28 mt-10">
              <div className="relative aspect-[3/2] lg:hover:opacity-80 transition-opacity cursor-pointer">
                <img
                  src="/images/4.jpeg"
                  alt="Newspaper article"
                  className="md:max-w-[550px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-sm md:text-base font-medium text-[#1a1a1a] lg:max-w-[700px] overflow-y-auto mt-10 lg:mt-0">
                <span className="text-red-800 font-bold">
                  BAŞAK DÖNER&KÖFTE
                </span>
                <p className="mt-5">
                  Sizlerden gelen mesajlar üzerine, Kadıköy Kozyatağı’ndaki
                  Başak Döner’e gittim. Taner ve kardeşi Tamer usta yaklaşık 40
                  yıldır bölgede döner salonu işletiyorlar. Ürünleri yüzde yüz
                  yaprak döner. Dana eti ve kuzu döşü kullanıyorlar. Sabah 10.00
                  sıralarında et ve tavuk döner başlıyor yavaş yavaş ısınmaya.
                  Yavaş yavaş diyorum çünkü dönere lezzeti veren en önemli
                  özellik yavaş pişmesi.
                </p>
                <a
                  href="https://www.hurriyet.com.tr/lezizz/yazarlar/sertac-virancik/kadikoyun-4-nefis-donercisi-41746080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-800 hover:text-red-600 font-medium mt-3 flex"
                >
                  Devamını oku ...
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Press;
