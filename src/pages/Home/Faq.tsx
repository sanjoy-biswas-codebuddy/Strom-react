import React from "react";
import TextSection from "../../component/TextSection";
import Accordion from "../../component/shared/Accordiyan";
import Button from "../../component/shared/Button";

const Faq: React.FC = () => {
  const buttonConfigs = [
    { color: "primary" as const, label: "Jetzt Partner werden" },
  ];
  const faqData = [
    {
      question:
        "Was unterscheidet Strom-Distributor von anderen Distributoren?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question: "Gibt es ein Storno-Konto?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question: "Wie kann ich Partner werden?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question: "Habt ihr auch Solarprodukte im Portfolio?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question: "Wo sind die Angebote eurer Anbieter verfügbar?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question:
        "Ich möchte unter meiner eigenen Flagge tätig werden - unterstützt ihr mich dabei?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question:
        "Ich möchte ein Ladenlokal eröffnen. Habt ihr Werbematerial für mich?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question:
        "Ich bin neu im Vertrieb in der Energiebranche. Habt ihr Tipps für mich?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question: "Kann ich auch als Quereinsteiger beginnen?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
    {
      question:
        "Ich habe ein Team aus mehreren Mitarbeitern, kann ich sie im Portal anlegen?",
      answer:
        "Bei uns greifst du auf ein großes Portfolio an von BDEB geprüften Anbietern zurück und bekommst deine Provision zu 100 % ausbezahlt.",
    },
  ];

  return (
    <div className="px-4 py-10 lg:py-0 md:py-0">
      <div className="max-w-screen-xl mx-auto">
        <TextSection heading="FAQ" className="text-center lg:mb-20 mb-10" />

        <Accordion data={faqData} />

        <div className="text-center flex justify-center mt-10">
          {buttonConfigs.map((btn, index) => (
            <Button key={index} color={btn.color}>
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
