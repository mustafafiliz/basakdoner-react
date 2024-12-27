import { Helmet } from "react-helmet";
import SampleSlider from "../components/Slick";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Başak Döner - Ana Sayfa</title>
        <meta
          name="description"
          content="1974'ten beri hizmet veren Başak Döner'de enfes lezzetlerle tanışın. Et döner, tavuk döner ve özel menülerimizle hizmetinizdeyiz."
        />
        <meta
          name="keywords"
          content="başak döner, istanbul döner, et döner, tavuk döner, geleneksel lezzetler"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="min-h-screen overflow-hidden">
        <Helmet>
          <title>Başak Döner - Ustalıkla Hazırlanan Eşsiz Döner Lezzeti</title>
          <meta name="description" content="Nested component" />
          <meta property="og:title" content="Başak Döner" />
          <meta
            property="og:description"
            content="1974'ten beri lezzet ustası Başak Döner"
          />
          <meta
            property="og:image"
            content="https://basakdoner-react.vercel.app/logo.png"
          />
          <meta
            property="og:url"
            content="https://basakdoner-react.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Başak Döner" />
        </Helmet>
        <SampleSlider />

        <Container>
          <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse justify-center gap-4 md:gap-12 lg:my-16 my-5">
            <img
              src="/images/6-1.jpg"
              alt="döner"
              className="w-full aspect-square rounded-md object-cover"
            />
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
                Tecrübe
              </h2>
              <div className="border border-b-red-800" />
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] lg:max-w-[700px] overflow-y-auto">
                Kurucularımızın sektördeki 40 yıllık deneyimi, döner ve
                geleneksel Türk mutfağı konusundaki uzmanlıklarıyla birleşiyor.
                Bu bilgi birikimini, bölgemizdeki onlarca yıllık hizmet
                süresiyle pekçok misafirimizle paylaşmanın gururunu yaşıyoruz.
                Yeni yerimizde de bu tecrübeyi en iyi hizmet anlayışıyla sizlere
                sunmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 md:gap-12 justify-center lg:my-20 my-5">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
                Lezzet
              </h2>
              <div className="border border-b-red-800" />
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] overflow-y-auto">
                Başak Döner olarak, Balıkesir ve Tekirdağ yörelerinin özenle
                seçilmiş, doğal beslenmiş hayvanlarından elde edilen etleri
                kullanıyoruz. Tamamen geleneksel terbiye usulleriyle hazırlanan
                etlerimiz, %100 yaprak döner olarak servis edilmektedir.
                Lezzetin kaynağı olan kaliteli malzemelerle damak tadınıza en
                iyi döner lezzetini sunmaya çalışıyoruz. Yanında sunulan taze
                garnitürler ve özel tatlılar ile, her lokmada benzersiz bir
                deneyim sunmayı amaçlıyoruz.
              </p>
            </div>
            <img
              src="/images/döner3.jpg"
              alt="döner"
              className="w-full aspect-square rounded-md object-cover"
            />
          </div>
        </Container>
        <Container>
          <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse justify-center gap-4 md:gap-12 lg:my-16 my-5">
            <img
              src="/images/5-1.png"
              alt="döner"
              className="w-full aspect-square rounded-md object-cover"
            />
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
                Kalite
              </h2>
              <div className="border border-b-red-800" />
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] lg:max-w-[700px] overflow-y-auto">
                Hijyen ve sağlık, Başak Döner’in vazgeçilmez önceliklerindendir.
                Yemeklerimiz, hijyen standartlarına uygun bir şekilde, alanında
                uzman ekibimiz tarafından özenle hazırlanır. Kullandığımız
                malzemelerin tazeliğini ve doğallığını her zaman kontrol ederek,
                misafirlerimize gönül rahatlığıyla tüketecekleri yemekler
                sunuyoruz. Kaliteli hizmet anlayışımız, sadece yemekte değil,
                güler yüzlü ve profesyonel servisimizle de hissedilmektedir.
                Bizim için en iyi döner demek sizlerin her anlamda memnun
                kaldığınız bir hizmet demek.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 md:gap-12 justify-center lg:my-20 my-5">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-zinc-800">
                Hız
              </h2>
              <div className="border border-b-red-800" />
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] overflow-y-auto">
                Modern yaşamın hızlı temposuna ayak uydurarak, Başak Döner
                lezzetlerini en kısa sürede sizlere ulaştırmayı hedefliyoruz.
                Özellikle paket servis hizmetimizde, siparişlerinizin tazeliğini
                ve kalitesini koruyarak evlerinize ve iş yerlerinize
                ulaştırıyoruz. Hızlı teslimat sistemimiz sayesinde, hem
                zamanınızı hem de lezzet iştahınızı karşılamaktan mutluluk
                duyuyoruz. Teknolojiyi etkin bir şekilde kullanarak,
                süreçlerimizi optimize ediyor ve sizlere daha iyi hizmet
                veriyoruz.
              </p>
            </div>
            <img
              src="/images/Kurye.jpg"
              alt="döner"
              className="w-full aspect-square rounded-md object-cover"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
