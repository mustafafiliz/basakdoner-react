import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center md:justify-end w-full min-h-screen bg-[url('/images/arkaplan.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-10">
      <div className="flex flex-col gap-4 md:mt-10 md:pr-10 lg:pr-40 max-w-[95%] md:max-w-[600px]">
        <h3 className="text-black text-2xl md:text-3xl leading-7 font-bold text-center md:text-left">
          BAŞAK DÖNER
        </h3>
        <p className="text-gray-50 leading-7 text-base md:text-xl font-bold bg-black/30 p-4 rounded-lg md:bg-transparent">
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
