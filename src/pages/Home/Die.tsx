import blackTop from "../../assets/black_top.png";
import girl from "../../assets/girl.png";
import Button from "../../component/shared/Button";
import List from "../../component/list.tsx";
import blackBottom from "../../assets/black-bottom.png";
const DieTcs = () => {
  const buttonConfigs = [
    { color: "primary" as const, label: "Jetzt Partner werden" },
  ];
  return (
    <>
      <div className="relative md:h-[100px] lg:h-[179px] z-0 mt-10">
        <img
          src={blackTop}
          alt="3card"
          className="absolute top-0 right-0 z-0 w-full h-full"
        />
      </div>
      <div className="px-4 bg-[#111111] pb-10 md:pb-0 lg:py-0">
        <div className="max-w-screen-xl mx-auto z-10 relative">
          <div className="flex flex-wrap">
            <div className="basis-full lg:basis-1/2 md:basis-1/2 text-center md:text-center lg:text-left">
              <img
                src={girl}
                alt="dieTcs"
                className="lg:w-[1500px] relative lg:top-[-200px] lg:left-[-100px]"
              />
            </div>
            <div className="basis-full lg:basis-1/2 md:basis-1/2 text-center md:text-left lg:text-left">
              <h1 className="text-white text-[30px] md:text-[36px] lg:text-[42px] lg:leading-[52px] leading-normal font-normal mb-5">
                Vertriebsarbeit, die sich lohnt: als Partner von
                Strom-Distributor
              </h1>
              <p className="text-white text-[16px] md:text-[16px] lg:text-[16px] leading-normal font-normal mb-5">
                Als Partner von Strom-Distributor machst du einen Vertriebsjob,
                der sich wirklich lohnt.
              </p>
              <h3 className="text-white text-[20px] md:text-[24px] lg:text-[24px] leading-normal font-bebas-neue font-normal mb-5">
                Konkret bieten wir dir:
              </h3>
              <div className="grid lg:grid-cols-2 gap-3 text-left">
                <div className="basis-full lg:basis-1/2 md:basis-1/2">
                  <List
                    items={[
                      "10 % Provision bei Photovoltaik Aufträgen",
                      "wöchentlich 100 % Auszahlung – ganz ohne Storno-Konto",
                      "Exklusive Tarife bei ausgewählten namhaften und regionalen Energieversorgung deutschlandweit",
                      "Regelmäßige Schulungen rund ums Thema Vertrieb in der Energiebranche",
                    ]}
                  />
                  <div className="hidden lg:block">
                    {buttonConfigs.map((btn, index) => (
                      <Button key={index} color={btn.color}>
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="basis-full lg:basis-1/2 md:basis-1/2">
                  <List
                    items={[
                      "Zusätzlich exklusive Partner für die Vermarktung von Photovoltaik und Wärmepumpen über unser Schwesterunternehmen",
                      "Bedienungsfreundliches Portal für Anbietervergleich und Vertragsabwicklung",
                      "Monatlich die Chance auf tolle Gewinne wie Kreuzfahrten, Reisen oder Gutscheine",
                      "eine Akademie für unsere Vertriebspartner, damit du deinen Umsatz um bis zu 30% steigern kannst",
                    ]}
                  />
                  <div className="block lg:hidden">
                    {buttonConfigs.map((btn, index) => (
                      <Button key={index} color={btn.color}>
                        {btn.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:h-[100px] lg:h-[174px] z-0">
        <img
          src={blackBottom}
          alt="3card"
          className="absolute top-0 right-0 z-0 w-full h-full"
        />
      </div>
    </>
  );
};

export default DieTcs;
