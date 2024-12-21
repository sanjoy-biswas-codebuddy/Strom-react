import readTop from "../../assets/red-top.png";
import readBottom from "../../assets/red-bottom.png";
import Button from "../../component/shared/Button";

const Heute = () => {
  const buttonConfigs = [
    { color: "orangeBordered" as const, label: "Jetzt Partner werden" },
  ];
  return (
    <>
      <div className="relative md:h-[100px] lg:h-[275px] z-0 lg:mt-[-230px]">
        <img
          src={readTop}
          alt="3card"
          className="absolute top-0 right-0 z-0 w-full h-full"
        />
      </div>
      <div className="bg-primary w-full py-10 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="lg:w-[800px] mx-auto">
            <h1 className="text-white text-[24px] md:text-[30px] lg:text-[42px] leading-normal font-bebas-neue font-normal mb-5 text-center">
              Heute registrieren und schon morgen Partner sein!
            </h1>
            <p className="text-white text-[16px] leading-normal font-light mb-5">
              Um Vertriebspartner bei Strom-Distributor zu werden, brauchen wir
              nur ein paar Angaben zu deiner Person. Fülle dazu einfach das
              Kontaktformular aus und starte noch diese Woche damit deine faire
              Vergütung zu verdienen. 
            </p>

            {buttonConfigs.map((btn, index) => (
              <Button key={index} color={btn.color}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative md:h-[70px] lg:h-[79px] z-0">
        <img
          src={readBottom}
          alt="3card"
          className="absolute top-0 right-0 z-0 w-full h-full"
        />
      </div>
    </>
  );
};

export default Heute;
