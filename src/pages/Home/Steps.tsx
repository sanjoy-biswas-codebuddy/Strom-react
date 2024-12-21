import React from "react";
import StepCard from "../../component/StepCard";
import vectorDoted from "../../assets/vector-doted.svg";

const Steps: React.FC = () => {
  return (
    <div className="px-4 relative z-10 lg:py-0 py-10 md:py-0" id="portfolio">
      <h1 className="text-[#111111] text-[24px] md:text-[30px] lg:text-[42px] leading-normal font-bebas-neue font-normal mb-0 lg:mb-5 text-center">
        In 4 Schritten zur ersten Provision
      </h1>
      <div className="max-w-screen-xl mx-auto pt-10 mt-0 md:mt-0 lg:mt-[130px] relative">
        <div className="lg:w-[950px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5 lg:gap-20">
            <StepCard
              className="relative top-0 md:top-0 lg:top-[-100px] h-auto md:h-auto lg:h-[260px]"
              name={"Registrierung"}
              tag={"Schritt 1"}
              description={
                "Die Registrierung als Vertriebspartner von Strom-Distributor geht schnell und unkompliziert. Du trägst dich über das Kontaktformular ein und legst direkt los. "
              }
            />
            <StepCard
              className='relative lg:before:content-[""] lg:before:absolute lg:before:left-[-80px] lg:before:w-[80px] lg:before:h-[2px] lg:before:top-[45px] lg:before:bg-line-pattern lg:before:bg-no-repeat lg:before:bg-left lg:before:bg-[length:100%_100%] z-0'
              name={"Beratung"}
              tag={"Schritt 2"}
              description={
                "Jetzt kannst du bereits erste Kunden beraten. Dank unseres großen Portfolios und exklusiven Tarifen kannst du perfekt auf ihre Wünsche eingehen. "
              }
              description2={
                "Du möchtest noch mehr Infos und Tipps für die Beratung? Besuche eine von unseren wöchentlichen Schulungen, bei denen du alles rund um das Thema Beratung, Bedienung unseres Portals und Verkauf erfährst."
              }
            />
            <StepCard
              className='relative lg:top-[-230px] lg:before:content-[""] lg:before:absolute lg:before:right-[-80px] lg:before:w-[80px] lg:before:h-[2px] lg:before:top-[40px] lg:before:bg-line-pattern lg:before:bg-no-repeat lg:before:bg-left lg:before:bg-[length:100%_100%] z-0'
              name={"Verkaufen"}
              tag={"Schritt 3"}
              description={
                "Hast du den richtigen Vertrag für deine Kunden gefunden, wickelst du den Verkauf ganz einfach über unser Online-Portal ab."
              }
            />
            <StepCard
              className="relative z-10"
              name={"Provision"}
              tag={"Schritt 4"}
              description={
                "Die Auszahlung erfolgt bei uns wöchentlich. Bedeutet für dich: Nach positiver Bestätigung ist deine Provision garantiert innerhalb von 4 Wochen auf deinem Konto.  "
              }
            />
            <div className="lg:absolute left-[380px] lg:bottom-[140px] md:m-0 lg:m-0 lg:block md:hidden hidden z-0">
              <img src={vectorDoted} alt="line" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
