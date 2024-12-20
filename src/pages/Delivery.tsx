import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../components/Container";

const Delivery = () => {
  return (
    <>
      <Helmet>
        <title>Başak Döner - İletişim</title>
        <meta
          name="description"
          content="Başak Döner şubelerimiz, iletişim bilgilerimiz ve adres bilgilerimiz. Sipariş ve önerileriniz için bize ulaşın."
        />
        <meta
          name="keywords"
          content="başak döner iletişim, başak döner adres, başak döner telefon, başak döner sipariş"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Container>
        <div className="lg:flex lg:justify-center lg:items-center gap-3">
          <div className="flex flex-col lg:gap-8 gap-4 lg:py-10 py-5">
            <div>
              <h2 className="text-center lg:text-2xl text-lg md:text-4xl text-red-800 font-bold lg:mb-10 mb-4">
                PAKET SERVİS
              </h2>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px] overflow-y-hidden">
                Kadıköy Kozyatağı Mahallesi’nde bulunan lokantamız, en yakın
                dönerci arayışında olan herkes için doğal bir merkez
                konumundadır. Kozyatağı’nın yanı sıra Suadiye, Bostancı,
                Erenköy, 19 Mayıs ve Altıntepe gibi yakın semtlerin sakinleri,
                en yakın dönerci olarak bizi tercih edebilir.
                <br />
                <br /> Motorize ekiplerimiz ile, bu semtlerin tamamına paket
                servis hizmeti sunarak döner keyfini sizlere hızlı ve konforlu
                bir biçimde ulaştırmada yardımcı oluruz. Misafirlerimiz, %100
                yaprak et dönerin benzersiz lezzetini evlerinin rahatında
                yaşayabilirler. Web sitemizde bulunan telefon numaralarımız
                aracılığıyla siparişinizi kolayca verebilir, en yakın dönerci
                olarak sunduğumuz hizmetin tadını çıkarabilirsiniz!
              </p>
            </div>
            <div>
              <h3 className="text-red-800 font-bold lg:text-2xl text-base mb-2">
                Suadiye Döner Servisi
              </h3>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px] overflow-y-auto">
                Suadiye Mahallesi, konum olarak Başak Döner'e komşu bir
                mahalledir. Suadiye sakinleri, et döner ve tavuk döner yemek
                istedikleri anda, web sitemizin iletişim bölümünde bulunan
                telefon numaralarımızdan bize ulaşabilir. En hızlı ve konforlu
                biçimde siparişlerini oluşturabilir ve %100 yaprak et dönerin
                benzersiz lezzetini deneyimleyebilirler.
              </p>
            </div>
            <div>
              <h3 className="text-red-800 font-bold lg:text-2xl text-base mb-2">
                Bostancı Döner Servisi
              </h3>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px] overflow-y-auto">
                Başak Döner, Bostancı Mahallesi'ndeki döner severlere de hizmet
                vermektedir. Bostancı sakinleri, taze ve kaliteli et
                dönerlerimizi evlerinde veya iş yerlerinde keyifle tüketebilir.
                Sipariş vermek için web sitemizdeki telefon numaralarımızdan
                bize ulaşabilirsiniz. Hızlı teslimat ile Başak Döner lezzetleri
                bir telefon uzağınızda!
              </p>
            </div>
            <div>
              <h3 className="text-red-800 font-bold lg:text-2xl text-base mb-2">
                Erenköy Döner Servisi
              </h3>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px]overflow-y-auto">
                Erenköy Mahallesi sakinleri, Başak Döner’in geleneksel Türk
                mutfağındaki uzmanlığıyla hazırlanan dönerlerini kolayca sipariş
                edebilir. %100 yaprak et döner ve taze garnitürlerimiz, hızlı ve
                özenli bir şekilde kapınıza kadar ulaşıyor. Lezzetli bir döner
                deneyimi için bize hemen ulaşın!
              </p>
            </div>
            <div>
              <h3 className="text-red-800 font-bold lg:text-2xl text-base mb-2">
                19 Mayıs Döner Servisi
              </h3>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px] overflow-y-auto">
                19 Mayıs Mahallesi sakinleri de Başak Döner’in kaliteli ve
                lezzetli dönerlerini diledikleri zaman sipariş edebilirler. Taze
                ve hijyenik şartlarda hazırlanan yemeklerimiz, en kısa sürede
                sizlere ulaştırılır. Et veya tavuk döner fark etmeksizin, damak
                tadınıza uygun seçeneklerimizi deneyimlemek için hemen arayın.
              </p>
            </div>
            <div>
              <h3 className="text-red-800 font-bold lg:text-2xl text-base mb-2">
                Altıntepe Döner Servisi
              </h3>
              <p className="text-sm md:text-base font-medium text-[#1a1a1a] max-h-[30vh] lg:max-w-[800px] max-w-[400px] overflow-y-auto">
                Altıntepe Mahallesi sakinleri, Başak Döner’in lezzetlerini hem
                evlerinde hem de iş yerlerinde kolayca tüketebilir. Geleneksel
                tariflerle hazırlanan et dönerlerimiz, hızlı ve özenli bir
                şekilde sizlere ulaştırılır. Siparişinizi vermek için web
                sitemizi ziyaret edin ve bizi arayın. En iyi döner deneyimi için
                buradayız!
              </p>
            </div>
          </div>

          <img
            src="/images/Kurye.jpg"
            alt="kurye"
            className="lg:max-w-[650px] max-w-[400px] object-cover rounded-lg mb-7"
          />
        </div>
      </Container>
    </>
  );
};

export default Delivery;
