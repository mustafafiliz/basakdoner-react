import { Helmet } from "react-helmet";
import SampleSlider from "../components/Slick";
import Container from "../components/Container";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Başak Döner</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <SampleSlider />
      <Container>
        <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse justify-center gap-4 md:gap-12 lg:my-16 my-5">
          <img
            src="/images/döner2.jpg"
            alt="döner"
            className="w-full aspect-square rounded-md object-cover"
          />
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
              Kalite & Hijyen
            </h2>
            <div className="border border-b-red-800" />
            <p className="text-sm md:text-base font-medium text-[#1a1a1a] lg:max-w-[700px] overflow-y-auto">
              Başak Döner, insan sağlığına gösterdiği önemi, uluslararası
              geçerliliği olan EN ISO 22000-2005 Kalite Yönetim Sistem
              Belgesi’ni almaya hak kazanarak da kanıtlamıştır. İmalathane ve
              restaurantımızda görev yapan tüm personelimiz düzenli periyotlarda
              sağlık kontrollerinden geçirilmektedir. <br /> <br /> Firmamız
              bünyesinde veteriner hekim ve gıda teknikeri olmak üzere
              mesleğinde uzman iki kişi sadece gıda güvenirliği, sağlık ve
              hijyen konusunda görev yapmaktadır.
              <br /> <br /> Asıl amacı kaliteli bir hizmet sunmak olan
              işletmemizi ve imalathanemizi arzu eden müşterilerimiz diledikleri
              zaman ziyaret edebilirler.
            </p>
          </div>
        </div>
      </Container>
      <img
        src="/images/döner5.jpg"
        alt="döner"
        className="w-full aspect-[6/1] object-cover"
      />
      <Container>
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 md:gap-12 justify-center lg:my-16 my-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
              Kaliteyi Her Zaman Ön Planda Tutarız
            </h2>
            <div className="border border-b-red-800" />
            <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] overflow-y-auto">
              Tüm yemeklerimizi en yüksek hijyen standartlarına uygun olarak
              hazırlıyoruz. Sağlığınız bizim için her şeyden önce gelir.
              Malzemelerimizi titizlikle seçiyor, geleneksel döner tarifini
              modern mutfak anlayışıyla harmanlıyoruz.
              <br />
              <br /> Hem damak tadınıza hitap etmek hem de güvenli bir yemek
              deneyimi sunmak için her adımı özenle atıyoruz.
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold text-zinc-700 lg:mt-5">
              Sizi Bekliyoruz!
            </h2>
            <div className="border border-b-red-800" />
            <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[20vh] lg:max-w-[700px] overflow-y-auto">
              Hemen gelin, dönerin en lezzetlisini keşfedin. Hızlı servisimizle,
              hem mekanımızda hem de siparişlerinizi kapınıza kadar getirerek
              sizlere lezzet dolu anlar yaşatıyoruz. Her zaman sıcak, taze ve
              lezzetli döner için kapılarımız sonuna kadar açık!
            </p>
          </div>
          <img
            src="/images/döner3.jpg"
            alt="döner"
            className="w-full aspect-square rounded-md object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
