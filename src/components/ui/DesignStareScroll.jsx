import React, { useEffect, useRef } from "react";
import { gsap } from "https://cdn.skypack.dev/gsap@3.12.0";
import ScrollTrigger from "https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger";

const DesignStareScroll = () => {
  const scalerRef = useRef(null);
  const layersRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set(scalerRef.current, { scale: 1, opacity: 1 });
    gsap.set(layersRef.current, { scale: 0, opacity: 0 });

    // Animation for scaler image
    const scalerTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 80%",
          scrub: 0.5,
          pin: true,
          pinSpacing: false,
        },
      })
      .to(scalerRef.current, {
        scale: 0.6,
        opacity: 0.8,
        ease: "power2.inOut",
        duration: 1,
      });

    // Animation for layers
    layersRef.current.forEach((layer, index) => {
      gsap.to(layer, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top ${20 + index * 10}%`,
          end: "bottom 20%",
          scrub: 0.5,
        },
        opacity: 1,
        scale: 1,
        ease: "sine.out",
        duration: 1,
        delay: index * 0.2,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scalerTl.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background-main text-text-primary dark:bg-background-main dark:text-text-white font-inter">
      <div className="content-wrap overflow-clip z-10">
        <section
          ref={sectionRef}
          className="h-screen w-screen relative overflow-hidden"
        >
          {/* Background Grid Overlay - Confined to Section */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,var(--line-bg-primary)_1px,transparent_1px_45px),linear-gradient(var(--line-bg-primary)_1px,transparent_1px_45px)] bg-[size:45px_45px] bg-[position:50%_50%] mask-[linear-gradient(-20deg,transparent_50%,white)]" />

          <h1 className="text-6xl xs:text-8xl md:text-hero font-bold leading-[0.6] absolute top-8 left-8 z-20">
            let's
            <br />
            scroll.
          </h1>
          <div className="content h-full w-full flex items-center justify-center">
            <div className="grid max-w-[1600px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] grid-cols-3 xs:grid-cols-5 gap-4 md:gap-[clamp(10px,7.35vw,80px)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Layer 1 */}
              <div
                className="layer grid col-span-full row-span-full grid-cols-subgrid grid-rows-subgrid"
                ref={(el) => (layersRef.current[0] = el)}
              >
                <div className="col-start-1 xs:col-start-1">
                  <img
                    src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-3 xs:col-start-5">
                  <img
                    src="https://images.unsplash.com/photo-1556304044-0699e31c6a34"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-1 xs:col-start-1">
                  <img
                    src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-3 xs:col-start-5">
                  <img
                    src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-1 xs:col-start-1">
                  <img
                    src="https://images.unsplash.com/photo-1488161628813-04466f872be2"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-3 xs:col-start-5">
                  <img
                    src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Layer 2 */}
              <div
                className="layer grid col-span-full row-span-full grid-cols-subgrid grid-rows-subgrid"
                ref={(el) => (layersRef.current[1] = el)}
              >
                <div className="col-start-2 xs:col-start-2">
                  <img
                    src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-4">
                  <img
                    src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-2">
                  <img
                    src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-4">
                  <img
                    src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-4">
                  <img
                    src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Layer 3 */}
              <div
                className="layer grid col-span-full row-span-full grid-cols-subgrid grid-rows-subgrid"
                ref={(el) => (layersRef.current[2] = el)}
              >
                <div className="col-start-2 xs:col-start-3">
                  <img
                    src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
                <div className="col-start-2 xs:col-start-3 row-start-3">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                    alt=""
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Scaler */}
              <div
                className="scaler relative col-start-2 xs:col-start-3 row-start-2 z-10"
                ref={scalerRef}
              >
                <img
                  src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
                  alt=""
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            fin.
          </h2>
        </section>
      </div>

      <style jsx>{`
        :root {
          --container-width: 1600px;
          --gap: clamp(10px, 7.35vw, 80px);
          --gutter: 2rem;
        }

        @media (max-width: 640px) {
          :root {
            --gutter: 1rem;
          }
          .grid {
            --offset: -1;
          }
          .grid > div:nth-of-type(1) {
            display: none;
          }
        }

        section {
          contain: strict; /* Ensures content doesn't bleed outside */
        }
      `}</style>
    </div>
  );
};

export default DesignStareScroll;
