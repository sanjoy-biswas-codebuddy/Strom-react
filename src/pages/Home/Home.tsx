import React from "react";
import Hero from "../../component/Hero";
import Partners from "./partners/Partners";
import CardsSection from "./CardsSection";
import TextSection from "../../component/TextSection";
import CardBox from "../../component/CardBox";
import CheckCircle from "../../assets/CheckCircle.svg";
import DieTcs from "./Die";
import Steps from "./Steps";
import Heute from "./Heute";
import About from "./About";
import Map from "./Map";
import Faq from "./Faq";

const Home: React.FC = () => {
  const textHeading = {
    heading1: "Was einen guten Vertriebsjob in der Energiebranche ausmacht",
  };

  const cardContent = [
    {
      name: "Hohe Provision",
      description:
        "Ein guter Vertriebspartner zahlt dir eine faire Provision –ohne dir am Anfang in Provisionsverhandlungen Druck zu machen.",
      image: CheckCircle,
    },
    {
      name: "Regelmäßige und schnelle Auszahlung",
      description:
        "Ein weiteres gutes Zeichen im Vertrieb: Du bekommst deine Provision wöchentlich ausbezahlt.",
      image: CheckCircle,
    },
    {
      name: "Zusätzliche Incentives, die dich motivieren",
      description:
        "Der richtige Vertriebspartner motiviert dich zusätzlich mit Belohnungen und Preisen für deine harte Arbeit.",
      image: CheckCircle,
    },
    {
      name: "Kein Storno-Konto",
      description:
        "Der richtige Partner verzichtet auf ein Storno-Konto und hilft dir stattdessen dabei, nachträgliche Vertragsrücktritte zu verhindern.",
      image: CheckCircle,
    },
    {
      name: "Viele namhafte und starke Anbieter im Portfolio",
      description:
        "Deine Kunden wollen einen Vertrag, der zu ihnen passt. Nur mit einem breiten Portfolio aus namhaften und regionalen Anbietern kannst du ihre Wünsche erfüllen und so mehr Abschlüsse erzielen.",
      image: CheckCircle,
    },
    {
      name: "Mitglied im Bund Deutscher Energieberater",
      description:
        "Der BDEB prüft regelmäßig die Anbieter im Portfolio seiner Mitglieder. Nur so können Distributoren garantieren, dass alle ihre Partner seriös sind.",
      image: CheckCircle,
    },
  ];

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
