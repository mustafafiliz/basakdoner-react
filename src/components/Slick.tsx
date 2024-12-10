import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/restaurant1.jpg"
            alt="Resim 2"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/döner2.jpg"
            alt="Resim 3"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/döner3.jpg"
            alt="Resim 4"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SampleSlider;
