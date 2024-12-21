interface CardProps {
  name: string;
  description?: string;
  description2?: string;
  image?: string;
  isActive?: boolean;
  tag?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  description2,
  image,
  tag,
}) => {
  return (
    <div
      className={`basis-full shadow-card md:basis-1/3 lg:basis-1/3 border border-[#FCACAC] rounded-[12px] lg:p-8 p-4 text-center text-font-color bg-white transition-all duration-300 lg:text-left md:text-left`}
    >
      {image && (
        <img
          src={image}
          alt={`${name} icon`}
          className="w-10 h-10 mx-auto lg:mx-0 md:mx-0"
        />
      )}
      {tag && (
        <span className="bg-[#fed6d6] text-[#111111] text-[14px] font-bold uppercase px-4 py-1 rounded-full w-auto mb-4 inline-block">
          {tag}
        </span>
      )}
      <h2 className="text-[24px] font-normal uppercase mt-2 font-bebas-neue">
        {name}
      </h2>
      {description && (
        <p className="text-base font-light mt-2">{description}</p>
      )}
      {description2 && (
        <p className="text-base font-light mt-2">{description2}</p>
      )}
    </div>
  );
};

export default Card;
