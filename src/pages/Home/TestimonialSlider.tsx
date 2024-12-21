import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import u1 from "../../assets/u1.png";
import u2 from "../../assets/u2.png";
import u3 from "../../assets/u3.png";

import review from "../../assets/review.png";

interface TestimonialSliderProps {
  date: string;
  image: string;
  name: string;
  review: string;
  description: string;
}

const cardSlider: TestimonialSliderProps[] = [
  {
    date: "2 weeks ago",
    image: u1,
    name: "Wade Warren",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Tellus sapien sit nunc nulla aliquet suspendisse nulla...” ",
  },
  {
    date: "Two days ago",
    image: u2,
    name: "Jane Cooper",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Sapien maecenas convallis urna gravida aliquet...”",
  },
  {
    date: "Feb 24, 2024",
    image: u3,
    name: "Leslie Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u3,
    name: "Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u1,
    name: "Leslie Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u2,
    name: "Leslie ",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u3,
    name: "Leslie Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u1,
    name: "Cooper Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u2,
    name: "Wade Leslie",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
  {
    date: "Feb 24, 2024",
    image: u3,
    name: "Leslie Alexander",
    review: review,
    description:
      "“Lorem ipsum dolor sit amet consectetur. Nunc venenatis pellentesque eu viverra arcu dui...” ",
  },
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="mt-10 text-center">
      <Slider {...settings}>
        {cardSlider.map((card, index) => (
          <div key={index} className="p-3">
            <div className="basis-full shadow-card md:basis-1/3 lg:basis-1/3 border border-[#FCACAC] rounded-[12px] lg:p-8 p-4 text-center text-font-color bg-white transition-all duration-300 lg:text-left md:text-left">
              <h4 className="text-sm font-light mb-3 text-[#878A8F]">
                {card.date}
              </h4>
              <div className="flex gap-3 items-center flex-wrap lg:justify-start md:justify-start justify-center">
                <img
                  src={card.image}
                  alt={`Slide ${index + 1}`}
                  className="w-[64px] h-[64px] rounded-full"
                />
                <div className="text-left">
                  <h4 className="text-[#000] text-[20px] font-normal font-bebas-neue ">
                    {card.name}
                  </h4>
                  <span className="text-sm">
                    <img
                      src={card.review}
                      alt={`Slide ${index + 1}`}
                      className="w-auto"
                    />
                  </span>
                </div>
              </div>
              <p className="text-base text-[#111111] mt-3">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
