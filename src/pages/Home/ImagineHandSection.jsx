import React from "react";

import letConnectButton from "/images/LET-CONNET-BUTTON.svg";
import bg from "/images/bg.svg";
import handup from "/images/handup.svg";
import handdown from "/images/handdown.svg";
import bulb from "/images/bulb.svg";
import facebook from "/images/fb1.svg";
import facebookdusra from "/images/FACEBOOKFOR.svg";
import insta from "/images/insta.svg";
import lineright from "/images/lineright.png";
import lineleft from "/images/lineleft.png";
import yt from "/images/yt.svg";
import round from "/images/round.svg";
import pulsingDot from "/images/pulsing.png";
import ImagineHandMobile from "../../components/MobileComponents/ImagineHandMobile";

export const ImagineHandSection = () => {
  const socialIcons = [
    {
      src: facebookdusra,
      alt: "Facebook",
      className: "hidden lg:block absolute top-[43px] left-[1472px] w-[42px] h-[42px]",
    },
    {
      src: facebook,
      alt: "Facebook",
      className: "hidden lg:block absolute top-[620px] left-60 w-[60px] h-[59px]",
    },
    {
      src: yt,
      alt: "YouTube",
      className: "hidden lg:block absolute top-[562px] left-[1356px] w-[45px] h-10",
    },
    {
      src: insta,
      alt: "Instagram",
      className: "hidden lg:block absolute top-[342px] left-[227px] w-[35px] h-[34px]",
    },
  ];

  const decorativeElements = [
    {
      src: bulb,
      alt: "Decorative element",
      className: "hidden lg:block absolute top-[155px] left-[1302px] w-[82px] h-[114px]",
    },
    {
      src: bulb,
      alt: "Decorative element",
      className: "hidden lg:block absolute top-[265px] left-[350px] w-[61px] h-[79px]",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Mobile & Tablet */}
      <div className="block lg:hidden">
        <ImagineHandMobile />
      </div>

      {/* Desktop (lg and above) */}
      <div className="hidden lg:block w-full relative flex items-start -top-2 lg:-top-[10px]">
        <section
          className=" w-full h-[857px] top-[800px]
 overflow-x-hidden  z-[1]"
        >
        <img
          className="hidden lg:block absolute top-2 -left-10 w-full h-[623px] opacity-80"
          alt="Background component after hero"
          src={bg}
        />

        <div className="absolute top-0 left-0 w-[1695px] h-[781px]">
          <div className="absolute w-[374px] h-[707px] top-[74px] left-0">
            <div className="w-full h-full flex">
              <img
                className="  ml-[38.52%] w-[229.87px] mr-[-38.52%] flex-1"
                alt="Decorative vector ccc"
                src={lineright}
              />
            </div>
          </div>

          <img
            className="hidden lg:block absolute top-[334px] left-[1277px] w-[307px] h-[425px]"
            alt="Hands illustration"
            src={handdown}
          />

          <img
            className="hidden lg:block absolute top-0  w-[296px] h-[217px]"
            alt="Header illustration"
            src={handup}
          />

          <header className="inline-flex flex-col h-[344px] items-center justify-center gap-8 absolute top-[180px] left-[calc(50.00%_-_482px)]">
            <img
              className="hidden lg:block absolute top-[60px] left-[184px] w-[437px] h-[91px] opacity-90"
              alt="Decorative line2"
              src={round}
            />

            <h1 className="relative w-[977px] mt-[-1.21px] [font-family:'Inter_28pt-Black',Helvetica] font-black text-transparent text-6xl text-center tracking-[6.60px] leading-[72px]">
              <span className="text-[#1f392c] tracking-[3.96px]">
                Spark your{" "}
              </span>

              <span className="text-[#1f392ce3] tracking-[3.96px]">
                brand&#39;s <br />
              </span>

              <span className="text-[#1f392c] tracking-[3.96px]">
                imaginative flair <br />
              </span>

              <span className="text-[#1f392ce6] tracking-[3.96px]">with</span>

              <span className="text-[#1f392c] tracking-[3.96px]"> us</span>
            </h1>

            <p className="relative w-[773px] [font-family:'Syne-Regular',Helvetica] font-normal text-[#1f392c] text-[26px] text-center tracking-[0] leading-8">
              Our team combines strategy, design, and technology to breathe life
              into your brand. Collaborate with us to leave a lasting impression
              on your audience.
            </p>
          </header>

          {socialIcons.map((icon, index) => (
            <img
              key={index}
              className={icon.className}
              alt={icon.alt}
              src={icon.src}
            />
          ))}

          <div className="hidden lg:block absolute w-[376px] h-[527px] top-[162px] left-[1318px]">
            <div className="w-full h-full flex">
              <img
                className="flex-1 w-[265.5px]"
                alt="Decorative vector"
                src={lineleft}
              />
            </div>
          </div>

          {decorativeElements.map((element, index) => (
            <img
              key={index}
              className={`hidden lg:block ${element.className.replace('absolute ','')}`}
              alt={element.alt}
              src={element.src}
            />
          ))}

          <div
            className="absolute top-[149px] left-[calc(50.00%_-_119px)] w-[274px] h-[31px]"
            role="banner"
          >
            <div className="absolute top-1 left-[calc(50.00%_-_137px)] w-[272px] h-[21px] bg-[#ef4b6ed6] rounded-[40px] border border-solid border-[#acacac]" />

            <p className="absolute top-0 left-[22px] w-[241px] [font-family:'Syne-Bold',Helvetica] font-bold text-white text-[10px] text-center tracking-[0] leading-8 whitespace-nowrap">
              Get ready to level up your digital presence 🚀
            </p>

            <img
              className="absolute top-1.5 left-1 w-[17px] h-4 object-cover"
              alt="Pulsing dot animation"
              src={pulsingDot}
            />
          </div>
        </div>

        <div className="mt-8 lg:absolute lg:top-[546px] lg:left-[789px] w-full lg:w-[152px] h-auto flex justify-center lg:block">
          <button
            className="inline-flex items-center justify-center w-[150px] h-10 cursor-pointer hover:opacity-90 transition-opacity duration-200"
            aria-label="Let's Connect - Contact us"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-md"
              alt=""
              src={letConnectButton}
            />

            <span className="relative z-10 [font-family:'Outfit-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[19.5px] whitespace-nowrap">
              Let&apos;s Connect
            </span>
          </button>
        </div>
        </section>
      </div>
    </div>
  );
};

export default ImagineHandSection;
