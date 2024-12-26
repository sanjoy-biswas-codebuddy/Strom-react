import React from "react";
import Hero from "../../component/Hero";
import Partners from "./partners/Partners";
import CardsSection from "./CardsSection";
import TextSection from "../../component/TextSection";
import CardBox from "../../component/CardBox";
import DieTcs from "./Die";
import Steps from "./Steps";
import Heute from "./Heute";
import About from "./About";
import Map from "./Map";
import Faq from "./Faq";
import { useCardContent } from "../../hooks/useCardContent";

const Home: React.FC = () => {
  const textHeading = {
    heading1: "Was einen guten Vertriebsjob in der Energiebranche ausmacht",
  };

  const cardContent = useCardContent();

  return (
    <>
      <Hero />
      <Partners />
      <CardsSection />
      <div className="px-4 py-10 lg:py-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full lg:w-[480px] md:w-[480px] flex">
            <TextSection heading1={textHeading.heading1} />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:mt-14">
            {cardContent.map((card, index) => (
              <CardBox
                key={index}
                name={card.name}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      <DieTcs />
      <Steps />
      <Heute />
      <About />
      <Map />
      <Faq />
    </>
  );
};

export default Home;
