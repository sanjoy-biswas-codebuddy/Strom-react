import React from "react";

interface TextSectionProps {
  heading?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  subheading?: string;
  highlight?: string;
  paragraph?: string;
  className?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
  heading,
  heading1,
  heading2,
  heading3,
  subheading,
  paragraph,
  highlight,
  className,
}) => {
  return (
    <>
      {heading && (
        <h1
          className={`text-font-color text-[24px] md:text-[30px] lg:text-[60px] lg:leading-[70px] leading-normal font-normal mb-5 ${
            className || ""
          }`}
        >
          {heading}
        </h1>
      )}
      {heading1 && (
        <div
          className={`text-font-color text-[24px] md:text-[30px] lg:text-[42px] lg:leading-[52px] leading-normal font-normal font-bebas-neue mb-5 ${
            className || ""
          }`}
        >
          {heading1}
        </div>
      )}
      {heading2 && (
        <h2
          className={`text-font-color text-[24px] md:text-[30px] lg:text-[36px] lg:leading-[46px] leading-normal font-bebas-neue font-normal mb-5 ${
            className || ""
          }`}
        >
          {heading2}
        </h2>
      )}
      {heading3 && (
        <h3
          className={`text-[#878A8F] text-[16px] md:text-[20px] lg:text-[24px] lg:leading-[34px] leading-normal font-bebas-neue font-normal mb-5 ${
            className || ""
          }`}
        >
          {heading3}
        </h3>
      )}
      {subheading && (
        <h4
          className={`text-font-color text-[24px] md:text-[30px] lg:text-[36px] lg:leading-[46px] leading-normal font-bebas-neue font-normal mb-5 ${
            className || ""
          }`}
        >
          {subheading}
        </h4>
      )}
      {highlight && (
        <p
          className={`text-font-color text-base leading-normal font-medium mb-5 ${
            className || ""
          }`}
        >
          {highlight}
        </p>
      )}
      {paragraph && (
        <p
          className={`text-font-color text-base leading-normal font-light mb-5 ${
            className || ""
          }`}
        >
          {paragraph}
        </p>
      )}
    </>
  );
};

export default TextSection;
