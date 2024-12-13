const About = () => {
  return (
    <div>
      <img
        className="w-full aspect-[2/1] lg:aspect-[5/1] object-cover"
        src="/images/arkaplan.jpg"
        alt=""
      />
      <div className="">
        <div className="flex flex-col text-center mx-auto lg:gap-4 gap-2 my-8 md:my-14 px-8 md:px-20">
          <h3 className="text-2xl md:text-4xl font-semibold text-zinc-800 md:leading-7 text-center">
            BAŞAK DÖNER
          </h3>
          <p className="text-sm md:text-base font-medium text-[#1a1a1a]  overflow-y-auto leading-10">
            Başak Döner olarak, lezzeti bir sanat olarak görüyoruz!
            Kuruluşumuzdan bu yana, misafirlerimize en iyi döner deneyimini
            sunma tutkusuyla çalışıyoruz. Tüm ürünlerimizi sevgi ve özenle
            hazırlıyor, her bir porsiyonda kaliteyi ve tazeliği garanti
            ediyoruz. Geleneksel Türk mutfağının vazgeçilmez lezzeti döneri,
            modern bir anlayışla yeniden yorumluyoruz. Etlerimizi özenle
            seçiyor, doğal ve yerel ürünlerle harmanlıyoruz. Kullandığımız özel
            baharat karışımları ve ustalarımızın hünerli elleriyle hazırlanan
            dönerlerimiz, her ısırıkta unutulmaz bir tat sunuyor. Başak Döner,
            yalnızca lezzet sunmakla kalmaz; aynı zamanda müşteri memnuniyetini
            en önemli değer olarak görür. Sıcak, samimi ve hijyenik bir ortamda
            sizlere hizmet etmekten mutluluk duyuyoruz. Amacımız, her
            misafirimizin memnuniyetle mekânımızdan ayrılmasıdır. Bugün bizi
            tercih eden yüzlerce mutlu müşterimizle büyümeye devam ediyoruz.
            Lezzete olan bağlılığımızı sürdürerek, her zaman daha iyisini
            hedefliyoruz. Başak Döner ailesine katıldığınız için teşekkür
            ederiz. Gelin, birlikte bu eşsiz lezzet yolculuğuna çıkalım!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
