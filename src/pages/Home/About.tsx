import React from "react";
import aboutImage from "../../assets/man.png";
import TextSection from "../../component/TextSection";
import TestimonialSlider from "./TestimonialSlider";
import stromDistributor from "../../assets/strom.png";
import Button from "../../component/shared/Button";
const redTextHtml = `Die Erfolgsgeschichte von Strom-Distributor beginnt mit Geschäftsführer Florian Feit.`;

const paragraph = [
  "Vor vielen Jahren hat er selbst als Vertriebler in der Energiebranche gearbeitet. Schnell fiel ihm auf, dass oft undurchsichtige Bedingungen herrschen und die Bezahlung bei vielen Anbietern viel zu gering ist. Deshalb hat er 2008 Strom-Distributor gegründet.",
  `<b>Sein Ziel: Ein Vertrieb, bei dem die Zusammenarbeit auf Augenhöhe passiert und bei dem Partner fair entlohnt werden.</b> Seit der Gründung bekommen unsere Vertriebler deshalb faire Provisionen immer pünktlich ausgezahlt ohne Wenn und Aber.`,
  "Auch Florian hatte am Anfang seiner Vertriebskarriere viele Fragen. Deswegen schult er heute Partner in regelmäßigen Online-Seminaren zu den Themen Beratung, Bedienung des Portals und Verkauf und gibt sein Branchenwissen weiter.",
  "Heute zählt Strom-Distributor über 3500 aktive Partner und ist so eine der größten deutschsprachigen Vertriebs-Communitys in der Energiebranche.",
];

const About: React.FC = () => {
  const buttonConfigs = [
    { color: "primary" as const, label: "Jetzt Partner werden" },
  ];
  return (
    <div className="w-full py-10 px-4" id="uber">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-end">
          <div className="w-full md:w-1/2 pr-20">
            <img src={aboutImage} alt="about" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-1/2">
            <TextSection heading1="Von einem Vertriebler gegründet, für Vertriebler gemacht" />

            <p
              className="text-base leading-relaxed font-medium text-primary mb-5"
              dangerouslySetInnerHTML={{ __html: redTextHtml }}
            />

            {paragraph.map((item, index) => (
              <p
                key={index}
                className="text-font-color text-base leading-normal font-light mb-5"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </div>
        </div>

        <div className="w-full mt-10">
          <img src={stromDistributor} alt="about" className="w-auto" />
          <TestimonialSlider />

          <div className="text-center flex justify-center mt-20">
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

export default About;
