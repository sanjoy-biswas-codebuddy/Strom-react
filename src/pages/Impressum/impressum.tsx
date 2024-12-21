import React from "react";
import TextSection from "../../component/TextSection";

interface ImpContent {
  heading1: string;
  impSubheading: string;
  impParagraph: string;
}

const impContent: ImpContent = {
  heading1: "Impressum",
  impSubheading: "Angaben gemäß § 5 TMG",
  impParagraph:
    "alphamed Sanitätshaus und Orthopädietechnik GmbH Flottenstraße 4 A 13407 Berlin",
};

const Impressum: React.FC = () => {
  return (
    <div className="py-10 px-4">
      <div className="mx-auto max-w-screen-xl">
        <TextSection heading1={impContent.heading1} />
        <TextSection
          className="font-poppins text-[20px] md:text-[20px] lg:text-[28px] leading-normal font-normal"
          subheading={impContent.impSubheading}
        />
        <TextSection
          className="mb-10 font-poppins text-[16px] leading-normal font-normal"
          paragraph={impContent.impParagraph}
        />
      </div>
    </div>
  );
};

export default Impressum;
