import { Helmet } from "react-helmet";
import SampleSlider from "../components/Slick";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Başak Döner</title>
        <meta name="description" content="Nested component" />
      </Helmet>

      <SampleSlider />

      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mx-auto my-20 px-4">
        <img
          src="/images/döner2.jpg"
          alt="döner"
          className="w-full md:w-1/3 h-[200px] md:h-[300px] rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-700">
            Kalite & Hijyen
          </h2>
          <div className="border border-b-red-800" />
          <p className="text-sm md:text-base font-bold text-[#626262] lg:max-w-[700px] max-h-[30vh] overflow-y-auto">
            Başak Döner, insan sağlığına gösterdiği önemi, uluslararası
            geçerliliği olan EN ISO 22000-2005 Kalite Yönetim Sistem Belgesi’ni
            almaya hak kazanarak da kanıtlamıştır. İmalathane ve
            restaurantımızda görev yapan tüm personelimiz düzenli periyotlarda
            sağlık kontrollerinden geçirilmektedir. Firmamız bünyesinde
            veteriner hekim ve gıda teknikeri olmak üzere mesleğinde uzman iki
            kişi sadece gıda güvenirliği, sağlık ve hijyen konusunda görev
            yapmaktadır. Asıl amacı kaliteli bir hizmet sunmak olan işletmemizi
            ve imalathanemizi arzu eden müşterilerimiz diledikleri zaman ziyaret
            edebilirler.
          </p>
        </div>
      </div>

      <img
        src="/images/döner5.jpg"
        alt="döner"
        className="w-full h-[200px] md:h-[300px] object-cover"
      />

      <div className="container flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12 justify-center my-20 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-700">
            Kaliteyi Her Zaman Ön Planda Tutarız
          </h2>
          <div className="border border-b-red-800" />
          <p className="text-sm md:text-base font-bold text-[#626262] max-h-[30vh] lg:max-w-[700px] overflow-y-auto">
            Tüm yemeklerimizi en yüksek hijyen standartlarına uygun olarak
            hazırlıyoruz. Sağlığınız bizim için her şeyden önce gelir.
            Malzemelerimizi titizlikle seçiyor, geleneksel döner tarifini modern
            mutfak anlayışıyla harmanlıyoruz. Hem damak tadınıza hitap etmek hem
            de güvenli bir yemek deneyimi sunmak için her adımı özenle atıyoruz.
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-700">
            Sizi Bekliyoruz!
          </h2>
          <div className="border border-b-red-800" />
          <p className="text-sm md:text-base font-bold text-[#626262] max-h-[20vh] lg:max-w-[700px] overflow-y-auto">
            Hemen gelin, dönerin en lezzetlisini keşfedin. Hızlı servisimizle,
            hem mekanımızda hem de siparişlerinizi kapınıza kadar getirerek
            sizlere lezzet dolu anlar yaşatıyoruz. Her zaman sıcak, taze ve
            lezzetli döner için kapılarımız sonuna kadar açık!
          </p>
        </div>
        <img
          src="/images/döner3.jpg"
          alt="döner"
          className="w-full md:w-1/3 h-[200px] md:h-[300px] rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
