import React from "react";
import Button from "./shared/Button";
import background from "../assets/hero-bg.png";
import TextSection from "./TextSection";

const Hero: React.FC = () => {
  const buttonConfigs = [
    { color: "primary" as const, label: "Jetzt Partner werden" },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className='bg-cover bg-top bg-no-repeat px-4 lg:px-6 md:py-20 py-24 lg:py-170 relative lg:h-[900px] lg:before:content-[""] lg:before:absolute lg:before:h-[192px] lg:before:bottom-0 lg:before:left-0 lg:before:w-full lg:before:bg-[url("/src/assets/bg-rep-bottom.png")] lg:before:bg-[length:100%_100%] lg:before:bg-top lg:before:bg-no-repeat'
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex flex-wrap justify-between items-center">
          <div className="basis-full lg:basis-1/2 md:basis-1/2 text-center md:text-left lg:text-left">
            <TextSection
              heading="Endlich faire Provisionen! Mach mehr aus dem Vertrieb von Strom und Gas Verträgen"
              paragraph="Werde Partner der Vertriebsgesellschaft Strom-Distributor und sichere dir die Vergütung, die dir zusteht. Du verkaufst Energieverträge. Wir zahlen dir deine überdurchschnittliche Provision wöchentlich aus."
              className="text-white md:w-[500px] lg:w-[590px]"
            />

            {buttonConfigs.map((btn, index) => (
              <Button key={index} color={btn.color}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
