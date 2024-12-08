import React from "react";

const About = () => {
  return (
    <div className="flex items-start justify-end pt-10 pr-40  h-screen w-full bg-[url('/images/arkaplan.jpg')] bg-cover bg-center bg-no-repeat ">
      {/* <img
        src="/images/döner2.jpg"
        alt="döner"
        className="w-[500px] h-[400px] object-cover rounded-lg"
      /> */}
      <div className="flex flex-col gap-4 mt-10">
        <h3 className="text-black text-3xl leading-7 font-bold">BAŞAK DÖNER</h3>
        <p className="text-gray-50 leading-7 text-xl font-bold max-w-[600px]">
          Başak Döner olarak, lezzeti bir sanat olarak görüyoruz! Kuruluşumuzdan
          bu yana, misafirlerimize en iyi döner deneyimini sunma tutkusuyla
          çalışıyoruz. Tüm ürünlerimizi sevgi ve özenle hazırlıyor, her bir
          porsiyonda kaliteyi ve tazeliği garanti ediyoruz. Geleneksel Türk
          mutfağının vazgeçilmez lezzeti döneri, modern bir anlayışla yeniden
          yorumluyoruz. Etlerimizi özenle seçiyor, doğal ve yerel ürünlerle
          harmanlıyoruz. Kullandığımız özel baharat karışımları ve ustalarımızın
          hünerli elleriyle hazırlanan dönerlerimiz, her ısırıkta unutulmaz bir
          tat sunuyor. Başak Döner, yalnızca lezzet sunmakla kalmaz; aynı
          zamanda müşteri memnuniyetini en önemli değer olarak görür. Sıcak,
          samimi ve hijyenik bir ortamda sizlere hizmet etmekten mutluluk
          duyuyoruz. Amacımız, her misafirimizin memnuniyetle mekânımızdan
          ayrılmasıdır. Bugün bizi tercih eden yüzlerce mutlu müşterimizle
          büyümeye devam ediyoruz. Lezzete olan bağlılığımızı sürdürerek, her
          zaman daha iyisini hedefliyoruz. Başak Döner ailesine katıldığınız
          için teşekkür ederiz. Gelin, birlikte bu eşsiz lezzet yolculuğuna
          çıkalım!
        </p>
      </div>
    </div>
  );
};

export default About;
