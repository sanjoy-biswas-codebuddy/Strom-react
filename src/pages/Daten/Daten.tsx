import React from "react";
import TextSection from "../../component/TextSection";

interface dtnContent {
  heading1: string;
  impSubheading: string;
  impParagraph: string;
}

const dtnContent: dtnContent = {
  heading1: "Datenschutzerklärung",
  impSubheading: "Allgemeine Hinweise",
  impParagraph:
    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
};

const Daten: React.FC = () => {
  return (
    <div className="py-10 px-4">
      <div className="mx-auto max-w-screen-xl">
        <TextSection heading1={dtnContent.heading1} />
        <TextSection
          className="font-poppins text-[20px] md:text-[20px] lg:text-[28px] leading-normal font-normal"
          subheading={dtnContent.impSubheading}
        />
        <TextSection
          className="mb-10 font-poppins text-[16px] leading-normal font-normal"
          paragraph={dtnContent.impParagraph}
        />
      </div>
    </div>
  );
};

export default Daten;
