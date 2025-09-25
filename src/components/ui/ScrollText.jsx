import React, { useEffect, useRef } from "react";

const ScrollText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const loadScript = (src) =>
        new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => resolve();
          script.onerror = (err) => reject(err);
          document.body.appendChild(script);
        });

      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        );

        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);

          const marquees = document.querySelectorAll(".nayla-marquee");
          marquees.forEach((marquee, index) => {
            const direction = marquee.classList.contains("left-to-right")
              ? 1
              : -1;

            window.gsap.to(marquee, {
              x: `${direction * 150}%`,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        }
      } catch (err) {
        console.error("Failed to load GSAP scripts:", err);
      }
    };

    loadScripts();

    return () => {
      window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const marqueeTexts = [
    { text: "Website Design", direction: "left-to-right" },
    { text: "Branding", direction: "right-to-left" },
    { text: "Marketing", direction: "left-to-right" },
    { text: "Advertising", direction: "right-to-left" },
    { text: "3D Designing", direction: "left-to-right" },
  ];

  return (
    <div
      ref={containerRef}
      className="main-container text-slate-950 min-h-[300vh] max-h-[50%] py-20 px-4 sm:px-8 font-syne overflow-x-hidden"
      style={{ backgroundColor: "#ecfbff" }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;900&display=swap');
          .nayla-marquee {
            white-space: nowrap;
            font-size: clamp(13rem, 5vw, 5rem);
            font-weight: 200;
            line-height: 0.6;
            padding: 1rem 0;
            user-select: none;
            will-change: transform, color;
          }
          .seperator {
            font-size: 0.5em;
            vertical-align: middle;
            margin: 0 1rem;
            display: inline-block;
          }
          .icon_font {
            color: #1c1c1c;
          }
        `}
      </style>

      <div className="flex flex-col gap-8 font-syne ">
        {marqueeTexts.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <h2
              className={`nayla-marquee ${item.direction} cursor-default ${
                index % 2 === 0 ? "text-[#EF4B6E]" : "text-[#183942]"
              }`}
            >
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
              <span className="nayla-marquee-span">{item.text}</span>
              <div className="seperator">●</div>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;
