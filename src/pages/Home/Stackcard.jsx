import React, { useEffect, useRef } from "react";

const ServiceGridWithStackingCards = () => {
  const stackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Simple scroll-based animation without external dependencies
    const handleScroll = () => {
      if (!stackRef.current) return;

      const container = stackRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on container position
      const scrollStart = containerRect.top + window.scrollY - windowHeight;
      const scrollEnd =
        containerRect.bottom + window.scrollY - windowHeight * 0.5;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.scrollY - scrollStart) / (scrollEnd - scrollStart))
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Initial stacked position
        const initialY = index * 28;
        const initialScale = 1 - index * 0.04;
        const initialOpacity = Math.max(0.5, 1 - index * 0.15);

        // Final separated position
        const finalY = -index * 140;
        const finalScale = 1 - Math.max(0, index - 1) * 0.02;
        const finalOpacity = 1;

        // Interpolate between initial and final states
        const currentY = initialY + (finalY - initialY) * scrollProgress;
        const currentScale =
          initialScale + (finalScale - initialScale) * scrollProgress;
        const currentOpacity =
          initialOpacity + (finalOpacity - initialOpacity) * scrollProgress;

        // Apply transforms
        card.style.transform = `translateY(${currentY}px) scale(${currentScale})`;
        card.style.opacity = currentOpacity;
        card.style.transformOrigin = "center top";
      });
    };

    // Initial setup
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      card.style.zIndex = String(cardsRef.current.length - index);
      card.style.position = "relative";
      card.style.willChange = "transform, opacity";
    });

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addCardRef = (el, index) => {
    if (el && cardsRef.current) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section className=" flex items-center w-full pt-28 lg:pt-80 sm:pt-32 md:pt-40 sm:m-h-[70vh]  min-h-[100vh] md:min-h-[100vh]">
      <div className=" relative mx-auto w-[min(92vw,720px)]" ref={stackRef}>
        <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
          {/* Card 1 - Product Development */}
          <div
            ref={(el) => addCardRef(el, 0)}
            className="stack-card relative bg-[#183942] text-white rounded-2xl border border-[#183942] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#66aef0] leading-tight">
              Product Development
            </h3>
            <ul className="text-sm sm:text-base md:text-lg space-y-2 opacity-90 list-disc pl-5">
              <li>
                Product Development — We build intuitive websites and apps
                backed by strong UX and engineering practices to create
                experiences users love.
              </li>
              <li>
                Product Design — Visual systems and brand assets that are
                consistent, usable, and conversion-driven.
              </li>
              <li>
                Digital Marketing — Social, content, and SEO strategies that
                boost awareness, engagement, and conversions.
              </li>
              <li>
                Video & Motion Graphics — Explainers and motion design that
                communicate clearly and memorably.
              </li>
            </ul>
          </div>

          {/* Card 2 - Product Design */}
          <div
            ref={(el) => addCardRef(el, 1)}
            className="stack-card relative bg-[#bff1ff] text-black rounded-2xl border border-[#bff1ff] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Product Design
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              Beautiful and intuitive interfaces that enhance user experience
              and drive engagement through thoughtful design systems and
              user-centered approaches.
            </p>
          </div>

          {/* Card 3 - Digital Marketing */}
          <div
            ref={(el) => addCardRef(el, 2)}
            className="stack-card relative bg-[#ef4b6e] text-white rounded-2xl border border-[#ef4b6e] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Digital Marketing
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              Strategic campaigns that reach your target audience and convert
              visitors into customers through data-driven marketing approaches.
            </p>
          </div>

          {/* Card 4 - Video & Motion Graphics */}
          <div
            ref={(el) => addCardRef(el, 3)}
            className="stack-card relative bg-[#ffced9] text-black rounded-2xl border border-[#ffced9] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Video & Motion Graphics
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              Compelling visual storytelling through animated content that
              captures attention and communicates your message effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGridWithStackingCards;
