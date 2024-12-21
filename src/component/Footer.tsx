import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/LinkedIn.svg";
import youtube from "../assets/Youtube.svg";
import xing from "../assets/xing.svg";

interface FooterLink {
  name: string;
  url: string;
  image?: string;
}

const Footer: React.FC = () => {
  const columns = [
    {
      title: "Column One",
      links: [
        { name: "Link One", url: "/" } as FooterLink,
        { name: "Link Two", url: "/" } as FooterLink,
        { name: "Link Three", url: "/" } as FooterLink,
        { name: "Link Four", url: "/" } as FooterLink,
        { name: "Link Five", url: "/" } as FooterLink,
      ],
    },
    {
      title: "Column Two",
      links: [
        { name: "Link Six", url: "/" } as FooterLink,
        { name: "Link Seven", url: "/" } as FooterLink,
        { name: "Link Eight", url: "/" } as FooterLink,
        { name: "Link Nine", url: "/" } as FooterLink,
        { name: "Link Ten", url: "/" } as FooterLink,
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Facebook", url: "/", image: facebook },
        { name: "Instagram", url: "/", image: instagram },
        { name: "LinkedIn", url: "/", image: linkedin },
        { name: "Youtube", url: "/", image: youtube },
        { name: "Xing", url: "/", image: xing },
      ],
    },
  ];

  return (
    <>
      <div className='relative before:content-[""] before:absolute before:left-0 before:w-full before:bottom-0 md:h-[100px] lg:h-[230px] md:before:h-[200px] lg:before:h-[400px] before:bg-[url("/src/assets/footer-curve.png")] before:bg-no-repeat before:bg-left before:bg-[length:100%_100%] z-0'></div>
      <div className='bg-[#fafafa] pt-[80px] pb-[30px] px-4 relative before:z-0 lg:before:content-[""] lg:before:absolute lg:before:left-0 lg:before:w-full lg:before:bottom-0 lg:before:h-[500px] lg:before:bg-[url("/src/assets/footer-bg.png")] lg:before:bg-no-repeat lg:before:bg-left lg:before:bg-contain'>
        <div className="max-w-screen-xl mx-auto relative z-1">
          <div className="flex flex-wrap justify-between">
            <div className="basis-full lg:basis-1/3 md:basis-1/1 text-center md:text-left lg:text-left">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="mb-5 mx-auto md:mx-0 lg:mx-0"
                />
              </Link>
              <div>
                <p className="text-font-color text-base font-light mb-5 pb-5">
                  Du verkaufst Energieverträge. Wir zahlen dir deine
                  überdurchschnittliche Provision wöchentlich aus.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-1/2 md:basis-1/1 text-center md:text-left lg:text-left">
              <div className="flex flex-wrap justify-between">
                <div className="basis-full lg:basis-1/3 md:basis-1/3 text-center md:text-left lg:text-left">
                  <h3 className="text-font-color text-lg font-normal mb-2 font-bebas-neue uppercase">
                    {columns[0].title}
                  </h3>
                  <ul className="list-none">
                    {columns[0].links.map((link, index) => (
                      <li
                        key={index}
                        className="text-font-color text-sm font-normal"
                      >
                        <Link
                          className="py-2 inline-block hover:text-primary"
                          to={link.url}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="basis-full lg:basis-1/3 md:basis-1/3 text-center md:text-left lg:text-left">
                  <h3 className="text-font-color text-lg font-normal mb-2 font-bebas-neue uppercase">
                    {columns[1].title}
                  </h3>
                  <ul className="list-none">
                    {columns[1].links.map((link, index) => (
                      <li
                        key={index}
                        className="text-font-color text-sm font-normal"
                      >
                        <Link
                          className="py-2 inline-block hover:text-primary"
                          to={link.url}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="basis-full lg:basis-1/3 md:basis-1/3 text-center md:text-left lg:text-left">
                  <h3 className="text-font-color text-lg font-normal mb-2 font-bebas-neue uppercase">
                    {columns[2].title}
                  </h3>
                  <ul className="list-none">
                    {columns[2].links.map((link, index) => (
                      <li
                        key={index}
                        className="text-font-color text-sm font-normal"
                      >
                        <Link
                          className="py-2 inline-block hover:text-primary"
                          to={link.url}
                        >
                          {link.image && (
                            <img
                              src={link.image}
                              alt={link.name}
                              className="w-6 h-6 inline-block mr-2"
                            />
                          )}
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center border-t border-font-[#878A8F] pt-5 mt-5">
            <div className="basis-full lg:basis-1/2 md:basis-1/2 text-center md:text-left lg:text-left">
              <p className="text-font-color text-sm font-light">
                © 2024 Strom-Distributor.de.
              </p>
            </div>
            <div className="basis-full lg:basis-1/2 md:basis-1/2 text-center md:text-left lg:text-left">
              <ul className="list-none flex flex-wrap justify-center md:justify-end lg:justify-end gap-4">
                <li className="text-font-color text-sm font-light">
                  <Link
                    className="py-2 inline-block hover:text-primary underline"
                    to="/impressum"
                  >
                    Impressum
                  </Link>
                </li>
                <li className="text-font-color text-sm font-light">
                  <Link
                    className="py-2 inline-block hover:text-primary underline"
                    to="/daten"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
