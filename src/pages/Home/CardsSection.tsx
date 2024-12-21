import React from "react";
import Card from "../../component/Card";
import minusCircle from "../../assets/MinusCircle.svg";
import TextSection from "../../component/TextSection";
import threeCard from "../../assets/effect1.png";
import effects from "../../assets/efect2.png";

const CardsSection: React.FC = () => {
  const cards = [
    {
      name: "Niedrige Provision",
      image: minusCircle,
      isActive: false,
      description:
        "Klar, Verträge in der Energiebranche sind hochpreisig. Trotzdem hast du mehr als nur 5% Provision verdient. Schließlich ist es deine harte Arbeit und dein Verkaufstalent, das letztendlich zum Abschluss führt.",
    },
    {
      name: "Storno-Konto",
      image: minusCircle,
      isActive: false,
      description:
        "Viele Partner behalten Teile deiner Provision “vorsichtshalber” ein, falls ein Kunde vom Kauf zurücktritt. Eine solche Stornoregelung sorgt dafür, dass bei dir als Vertriebler weniger Geld ankommt, als dir für deine Arbeit zusteht.",
    },
    {
      name: "Unregelmäßige Auszahlung",
      image: minusCircle,
      isActive: false,
      description:
        "Bekommst du deine Provision nur unregelmäßig ausbezahlt, kann es schnell schwierig werden, eine finanzielle Stabilität aufrechtzuerhalten. Statt monatelang auf willkürliche Auszahlungen warten zu müssen, solltest du dein Geld regelmäßig und prompt bekommen.",
    },
  ];

  const textSectionProps = {
    heading1:
      "3 Dinge, mit denen du dich als Vertriebler in der Energiebranche nicht zufriedengeben solltest",
  };

  return (
    <>
      <div className='relative before:content-[""] before:absolute before:left-0 before:w-full before:bottom-0 md:h-[100px] lg:h-[179px] md:before:h-[100px] lg:before:h-[179px] before:bg-[url("/src/assets/3card.png")] before:bg-no-repeat before:bg-left before:bg-[length:100%_100%] z-0'>
        <img
          src={threeCard}
          alt="3card"
          className="absolute top-0 right-0 z-0"
        />
      </div>
      <div className="px-4 pt-0 pb-10 bg-[#fafafa]">
        <div className="max-w-screen-xl mx-auto z-10 relative">
          <div className="flex flex-wrap justify-center items-center">
            <div className="basis-full lg:basis-[690px] md:basis-1/2 text-center md:text-center lg:text-center">
              <h1 className="text-font-color text-[30px] md:text-[36px] lg:text-[42px] lg:leading-[52px] leading-normal font-normal mb-5 text-center">
                <TextSection heading1={textSectionProps.heading1} />
              </h1>
            </div>
          </div>

          <div className="flex gap-4 mt-5 lg:flex-nowrap md:flex-nowrap flex-wrap">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                image={card.image}
                isActive={card.isActive}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='relative before:content-[""] before:absolute before:left-0 before:w-full before:bottom-0 md:h-[100px] lg:h-[132px] md:before:h-[100px] lg:before:h-[132px] before:bg-[url("/src/assets/card-bg-footer.png")] before:bg-no-repeat before:bg-left before:bg-[length:100%_100%] z-0'>
        <img
          src={effects}
          alt="3card"
          className="absolute bottom-0 left-0 z-0"
        />
      </div>
    </>
  );
};

export default CardsSection;
