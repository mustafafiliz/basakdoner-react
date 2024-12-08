import React from "react";
import Slider from "react-slick";

// Slider ayarları
const settings = {
  dots: true, // Sayfalama noktalarını ekler
  infinite: true, // Sonsuz kaydırma
  speed: 300, // Kaydırma hızı
  slidesToShow: 1, // Ekranda aynı anda gösterilecek slayt sayısı
  slidesToScroll: 1, // Her kaydırmada kaç slayt gösterileceği
  autoplay: true, // Otomatik kaydırma
  autoplaySpeed: 3000, // Kaydırma hızı (ms cinsinden)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SampleSlider: React.FC = () => {
  return (
    <div className=" mx-auto">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="/images/döner.jpg"
            alt="Resim 1"
            className="w-full h-[850px] object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/images/restaurant1.jpg"
            alt="Resim 2"
            className="w-full h-[850px] object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/images/döner2.jpg"
            alt="Resim 3"
            className="w-full h-[850px] object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <img
            src="/images/döner3.jpg"
            alt="Resim 4"
            className="w-full h-[850px] object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SampleSlider;
