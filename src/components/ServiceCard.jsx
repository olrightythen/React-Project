import { useMemo } from "react";

const ServiceCard = ({
  icon,
  title,
  description,
  propTextAlign,
}) => {
  const titleStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="self-stretch shadow-[7px_12px_43px_rgba(0,_0,_0,_0.14)] rounded-11xl bg-white flex flex-col items-end justify-start pt-[45px] pb-[62.1px] pr-[21px] pl-5 gap-[32px] text-left text-5xl text-palegreen font-inter mq450:gap-[16px]">
      <div className="w-[277px] h-[297.1px] relative shadow-[7px_12px_43px_rgba(0,_0,_0,_0.14)] rounded-11xl bg-white hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-0.5">
        <img
          className="h-16 w-16 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={icon}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[26px]">
          <b
            className="relative uppercase z-[1] mq450:text-lgi"
            style={titleStyle}
          >
            {title}
          </b>
        </div>
        <div className="self-stretch relative text-xl font-semibold text-darkseagreen text-center z-[1] mq450:text-base">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;