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
          <div className="flex flex-col  mx-auto lg:gap-4 gap-2 my-8 md:my-14 px-8 md:px-20">
            <h3 className="text-2xl md:text-4xl font-semibold text-zinc-800 md:leading-7 text-center md:mb-8">
              BAŞAK DÖNER
            </h3>
            <p className="text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto lg:leading-10 leading-6 ">
              Başak Döner olarak, lezzeti bir sanat olarak görüyoruz!
              Kuruluşumuzdan bu yana, misafirlerimize en iyi döner deneyimini
              sunma tutkusuyla çalışıyoruz. Tüm ürünlerimizi sevgi ve özenle
              hazırlıyor, her bir porsiyonda kaliteyi ve tazeliği garanti
              ediyoruz. Geleneksel Türk mutfağının vazgeçilmez lezzeti döneri,
              modern bir anlayışla yeniden yorumluyoruz. Etlerimizi özenle
              seçiyor, doğal ve yerel ürünlerle harmanlıyoruz. Kullandığımız
              özel baharat karışımları ve ustalarımızın hünerli elleriyle
              hazırlanan dönerlerimiz, her ısırıkta unutulmaz bir tat sunuyor.
              Başak Döner, yalnızca lezzet sunmakla kalmaz; aynı zamanda müşteri
              memnuniyetini en önemli değer olarak görür. Sıcak, samimi ve
              hijyenik bir ortamda sizlere hizmet etmekten mutluluk duyuyoruz.
              Amacımız, her misafirimizin memnuniyetle mekânımızdan
              ayrılmasıdır. Bugün bizi tercih eden yüzlerce mutlu müşterimizle
              büyümeye devam ediyoruz. Lezzete olan bağlılığımızı sürdürerek,
              her zaman daha iyisini hedefliyoruz. Başak Döner ailesine
              katıldığınız için teşekkür ederiz. Gelin, birlikte bu eşsiz lezzet
              yolculuğuna çıkalım!
            </p>
            <p className="text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto lg:leading-10 leading-6">
              <br />
              Dönerimiz sadece bir yemek değil, bir tutkunun eseri. Başak Döner
              olarak, misafirlerimize sunduğumuz her porsiyonun bir hikâyesi
              olduğuna inanıyoruz. İster bir öğle yemeği molasında olun, ister
              sevdiklerinizle keyifli bir akşam yemeği planlayın, her anınızı
              daha özel kılmak için buradayız. Dönerin tarihine duyduğumuz
              saygıyı, inovasyonla birleştirerek her damak zevkine hitap eden
              menüler oluşturuyoruz.
            </p>
            <p className="text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto lg:leading-10 leading-6">
              <br />
              Başak Döner için her müşteri bir aile üyesi gibidir. Bu nedenle
              hizmetimizi yalnızca masaya servis etmekle sınırlamıyor, her bir
              misafirimizi evlerindeymiş gibi hissettirmek için çabalıyoruz.
              Misafirlerimizin ihtiyaçlarına kulak veriyor, onların önerileri
              doğrultusunda kendimizi geliştirmeye devam ediyoruz. Çünkü
              biliyoruz ki en büyük başarı, yüzlerdeki memnuniyet dolu bir
              gülümsemedir.
            </p>
            <p className="text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto lg:leading-10 leading-6">
              <br /> Gelecek hedeflerimiz de bir o kadar iddialı! Türk
              mutfağının bu eşsiz lezzetini, dünya çapında daha fazla insana
              tanıtmayı amaçlıyoruz. Kalitemizden ödün vermeden büyürken, her
              geçen gün daha fazla insanı Başak Döner ailesinin bir parçası
              yapmayı hedefliyoruz. Şimdi siz de bu lezzet serüvenine adım atın
              ve Başak Döner’in farkını hissedin! Afiyetle kalın, Başak Döner
              ailesi olarak sizleri bekliyoruz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
