import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Başak Döner - Hakkımızda</title>
        <meta
          name="description"
          content="Başak Döner'in hikayesi, değerleri ve kalite anlayışı. 1974'ten beri değişmeyen lezzet."
        />
        <meta
          name="keywords"
          content="başak döner tarihi, başak döner hikaye, döner ustası, geleneksel döner"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <img
          className="w-full aspect-[2/1] lg:aspect-[5/1] object-cover"
          src="/images/arkaplan.jpg"
          alt=""
        />
        <div className="">
          <div className="flex flex-col  mx-auto lg:gap-4 gap-2 my-8 md:my-14 px-4 lg:px-8 md:px-20">
            <h3 className="text-2xl md:text-4xl font-semibold text-zinc-800 md:leading-7 text-center md:mb-8">
              BAŞAK DÖNER
            </h3>
            <p className="max-w-5xl mx-auto text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto lg:leading-10 leading-6 ">
              Başak Döner, 2013 yılında İstanbul'un Kadıköy ilçesi Kozyatağı
              mahallesinde hizmet vermeye başlayan bir lokantadır. Kurucuları
              Taner ve Tamer Usta, mesleklerindeki 35 yıldan fazla
              deneyimleriyle, 10 yıldan uzun bir süredir misafirlerine
              geleneksel Türk yemekleri ve özellikle Erzincan döneri
              sunmaktadır. <br /> Başak Döner, üstün hizmet kalitesini ve
              misafirlerine en iyi yemek deneyimini sunmayı kendine amaç
              edinmiştir. Paket servis hizmetinde de özenle hazırlanan
              yemeklerini, müşterilerine hızlı ve güvenilir bir şekilde
              ulaştırmayı hedeflemektedir. Geleneksel lezzetlere olan bağlılığı
              ve kaliteli hizmet anlayışıyla Başak Döner, misafirlerini her
              zaman en iyi şekilde ağırlamaktan gurur duymaktadır.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
