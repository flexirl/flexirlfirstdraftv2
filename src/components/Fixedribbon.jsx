import React from "react";
import separatorImg from "/images/sun.svg"; // adjust path

const FixedRibbon = ({ servicesList }) => {
  return (
    <div className="flex gap-[30px] justify-start items-end w-auto h-auto bg-[#ef4b6e] p-[20px] overflow-x-auto">
      {servicesList.map((service, index) => (
        <React.Fragment key={index}>
          <span className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[22px] sm:leading-[26px] md:leading-[30px] text-left text-white font-inter whitespace-nowrap">
            {service}
          </span>
          {index < servicesList.length - 1 && (
            <img
              src={separatorImg}
              alt="Service separator"
              className="w-[24px] sm:w-[28px] md:w-[32px] h-[24px] sm:h-[28px] md:h-[32px] self-center"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Usage with default list if no prop is passed
FixedRibbon.defaultProps = {
  servicesList: [
    "Green the planet",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Design (Ui &Ux)",
    "Video Editing",
  ],
};

export default FixedRibbon;
