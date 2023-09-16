import React from "react";

const Card = ({ title, Icon, value, increment, color, money }) => {
  return (
    <div className="p-4 bg-white rounded-lgPlus shadow-shadowFull border-2 flex-grow flex flex-col gap-1">
      <div
        className={`rounded-full self-start`}
        style={{
          backgroundColor: color,
        }}
      >
        <div className="p-1">
          <img
            src={Icon}
            width={17}
            height={17}
            alt="HIello"
            className="aspect-square"
          />
        </div>
      </div>
      <div className="text-xxs font-Lato font-medium">{title}</div>
      <div className="flex items-center gap-4 justify-between">
        <div className="text-2xl font-bold font-Open_sans">
          {money && "$"}
          {value}
        </div>
        <div
          className="text-[#4AD15F]
] px-2 py-1 text-xxs rounded-full bg-[#E9F9EB]"
        >
          +{increment}%
        </div>
      </div>
    </div>
  );
};

export default Card;
