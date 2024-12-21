import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import p5 from "../../../assets/p5.png";
import p6 from "../../../assets/p6.png";
import p7 from "../../../assets/p7.png";
import p8 from "../../../assets/p8.png";
import p9 from "../../../assets/p9.png";
import p10 from "../../../assets/p10.png";
import p11 from "../../../assets/p11.png";
import p12 from "../../../assets/p12.png";
import TextSection from "../../../component/TextSection";

const images: string[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

const SlickSlider: React.FC = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500, 
    slidesToShow: 7,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    arrows: false, 
    responsive: [
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          },
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
          },
      },
  ],
  };

  
  const textSectionProps = {
    heading3: 'Unsere Partner',
};

  return (
    <div className="mt-10 text-center">
      <TextSection
      heading3={textSectionProps.heading3}
      />
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="text-center px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[140px] h-auto mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;