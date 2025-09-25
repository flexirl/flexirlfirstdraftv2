import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);

  const [clientsCount, setClientsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const animateValue = (setter, from, to, duration, formatFn) => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = from + (to - from) * progress;
        setter(formatFn ? formatFn(value) : Math.floor(value));
        if (progress < 1) requestAnimationFrame(step);
        else setter(formatFn ? formatFn(to) : to);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;

            // Animate clients 0 -> 60
            animateValue(setClientsCount, 0, 60, 1200, (v) => Math.floor(v));

            // Animate reviews 0 -> 450
            animateValue(setReviewsCount, 0, 450, 1400, (v) => Math.floor(v));

            // Animate rating 0 -> 9.8 (one decimal)
            animateValue(
              (val) => setRatingValue(val),
              0,
              9.8,
              1200,
              (v) => Number(v.toFixed(1))
            );

            // Animate users 0 -> 500
            animateValue(setUsersCount, 0, 500, 1600, (v) => Math.floor(v));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#183942] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & description */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="h-px w-24 bg-[#ffffff7c] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Projects To Stare
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
            We create the most stunning graphic designs for your social media,
            websites, branding, or literally anything. They are just
            mindblowing.
          </p>
        </div>

        {/* Project showcase - horizontal scroll on small screens */}
        <div className="mt-8">
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-6 w-max">
              {[
                "/images/img_image_11.png",
                "/images/img_image_6.png",
                "/images/img_image_7.png",
                "/images/img_image_7_372x444.png",
                "/images/img_image_10.png",
                "/images/img_image_8.png",
                "/images/img_image_9.png",
              ]?.map((src, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-[220px] sm:w-[300px] md:w-[350px] lg:w-[444px] h-[150px] sm:h-[220px] md:h-[300px] lg:h-[372px] object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats area */}
        <div className="mt-10 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: descriptive text */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                <span className="font-medium">Our</span>
                <span className="font-semibold"> Impacts</span>
                <span className="text-[#ef4b6e]">.</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
                We are a UI UX design agency, Data-driven digital product design
                &amp; technology firm that transforms business. Flexirl focuses
                on human-centered UI/UX Design, UX Research, Web and mobile app
                development — offering end-to-end services that your users will
                love.
              </p>
            </div>

            {/* Right: numeric stats - responsive grid for alignment */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b1eeff]">
                    {clientsCount}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="mt-2 text-sm text-white">Clients</div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b1eeff]">
                    {reviewsCount}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="mt-2 text-sm text-white">
                    Positive Reviews
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b1eeff]">
                    {ratingValue}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="mt-2 text-sm text-white">
                    Rating Out of 10
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b1eeff]">
                    {usersCount}
                    <span className="text-xl">+</span>
                  </div>
                  <div className="mt-2 text-sm text-white">Users Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
