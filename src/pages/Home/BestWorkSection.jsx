import React from "react";

const BestWorksSection = () => {
  return (
    <section id="bestworks" className="w-full bg-[#f9f5f2] py-8 sm:py-12 md:py-16 lg:py-0 ml-[4px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[150px] sm:gap-[170px] md:gap-[190px] lg:gap-[196px] justify-start items-center w-full p-[12px]">
          {/* Header section */}
          <div className="flex flex-col justify-start items-start w-auto">
            <img
              src="/images/img_https_lottief_96x96.png"
              alt="Animation icon"
              className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[96px] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[96px] ml-[124px]"
            />
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[73px] text-center font-inter mt-[-36px]">
              <span className="font-medium uppercase text-[#183942]">O</span>
              <span className="font-medium lowercase text-[#183942]">ur</span>
              <span className="font-semibold lowercase text-[#183942]"> </span>
              <span className="font-light lowercase text-[#183942]">
                Best Works
              </span>
            </h2>
          </div>

          {/* Project title */}
          <p className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[43px] font-light leading-[30px] sm:leading-[40px] md:leading-[52px] lg:leading-[61px] text-center text-black font-inter w-full sm:w-[60%] md:w-[50%] lg:w-[44%] mb-[320px]">
            PLAYING CARD DECK ANIMANTION SCROLL EFFECTS
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestWorksSection;
