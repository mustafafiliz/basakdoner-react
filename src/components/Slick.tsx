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
            src="/images/1.jpeg"
            alt="basak-doner"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/2.jpeg"
            alt="basak-doner"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/3.jpeg"
            alt="basak-doner"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
        <div className="relative">
          <img
            src="/images/döner3.jpg"
            alt="basak-doner"
            className="w-full aspect-[2/1] lg:aspect-[3/1] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SampleSlider;
