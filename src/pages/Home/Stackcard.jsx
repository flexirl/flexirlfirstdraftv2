import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceGridWithStackingCards = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");
      if (!cards.length) return;

      // Layering and initial state
      cards.forEach((card, i) => {
        card.style.zIndex = String(cards.length - i);
      });

      gsap.set(cards, {
        y: (i) => i * 28,
        scale: (i) => 1 - i * 0.04,
        opacity: (i) => Math.max(0.5, 1 - i * 0.15),
        transformOrigin: "center top",
        willChange: "transform, opacity",
      });

      // Parallax-style reveal with gentle fade
      const liftPerLayer = 140;

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: -i * liftPerLayer,
          opacity: 1,
          scale: 1 - Math.max(0, i - 1) * 0.02,
          ease: "power1.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top bottom-=10%",
            end: "bottom top+=10%",
            scrub: true,
          },
        });
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 min-h-[180vh] md:min-h-[220vh]">
      <div className="relative mx-auto w-[min(92vw,720px)]" ref={stackRef}>
        <div className="grid" style={{ gridTemplateAreas: '"stack"' }}>
          {/* Card 1 */}
          <div
            className="stack-card relative bg-[#183942] text-white rounded-2xl border border-[#183942] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#66aef0] leading-tight">
              Product Development
            </h3>
            <ul className="text-sm sm:text-base md:text-lg space-y-2 opacity-90 list-disc pl-5">
              <li>
                Product Development — We build intuitive websites and apps backed by strong UX and engineering practices to create experiences users love.
              </li>
              <li>
                Product Design — Visual systems and brand assets that are consistent, usable, and conversion-driven.
              </li>
              <li>
                Digital Marketing — Social, content, and SEO strategies that boost awareness, engagement, and conversions.
              </li>
              <li>
                Video & Motion Graphics — Explainers and motion design that communicate clearly and memorably.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            className="stack-card relative bg-[#bff1ff] text-black rounded-2xl border border-[#bff1ff] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Product Design
            </h3>
          </div>

          {/* Card 3 */}
          <div
            className="stack-card relative bg-[#ef4b6e] text-white rounded-2xl border border-[#ef4b6e] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Digital Marketing
            </h3>
          </div>

          {/* Card 4 */}
          <div
            className="stack-card relative bg-[#ffced9] text-black rounded-2xl border border-[#ffced9] shadow-md p-5 sm:p-7 md:p-9 grid place-content-start gap-3 sm:gap-4 md:gap-5 min-h-[260px] sm:min-h-[300px] md:min-h-[360px]"
            style={{ gridArea: "stack" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Video & Motion Graphics
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGridWithStackingCards;
