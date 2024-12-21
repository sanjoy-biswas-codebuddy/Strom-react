interface CardBoxProps {
  name: string;
  description: string;
  image: string;
}

const CardBox: React.FC<CardBoxProps> = ({ name, description, image }) => {
  return (
    <div
      className={`flex gap-3 basis-full md:basis-1/3 lg:basis-1/3  text-font-color transition-all duration-300 lg:text-left md:text-left`}
    >
      <img
        src={image}
        alt={`${name} icon`}
        className="w-10 h-10 lg:mx-0 md:mx-0"
      />
      <div className="">
        <h2 className="text-[24px] font-normal uppercase mt-2 font-bebas-neue">
          {name}
        </h2>
        <p className="text-base font-light mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardBox;
