import React, { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const startedRef = useRef(false);
  const autoRotateRef = useRef(null);
  const lastInteractionRef = useRef(Date.now());

  const [clientsCount, setClientsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  // Bay Window Carousel State
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Project images
  const projectImages = [
    "https://picsum.photos/id/32/600/400/",
    "https://picsum.photos/id/33/600/400/",
    "https://picsum.photos/id/34/600/400/",
    "https://picsum.photos/id/35/600/400/",
    "https://picsum.photos/id/36/600/400/",
    "https://picsum.photos/id/37/600/400/",
    "https://picsum.photos/id/38/600/400/",
    "https://picsum.photos/id/39/600/400/",
    "https://picsum.photos/id/40/600/400/",
    "https://picsum.photos/id/41/600/400/",
    "https://picsum.photos/id/41/600/400/",
  ];

  const getBgPosition = (index) => {
    const wrappedRotation = (((rotation - 180 - index * 36) % 360) + 360) % 360;
    return `${100 - (wrappedRotation / 360) * 500}px 0px`;
  };

  // Auto-rotation
  const startAutoRotation = () => {
    if (autoRotateRef.current) return;
    autoRotateRef.current = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionRef.current;
      if (timeSinceLastInteraction > 2000 && !isDragging) {
        setRotation((prev) => prev + 0.15);
      }
    }, 16);
  };

  const stopAutoRotation = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setIsDragging(true);
    lastInteractionRef.current = Date.now();
    stopAutoRotation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = (clientX - dragStart) * 0.5;
    setRotation((prev) => prev - deltaX);
    setDragStart(clientX);
    lastInteractionRef.current = Date.now();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    lastInteractionRef.current = Date.now();
    setTimeout(startAutoRotation, 1000);
  };

  // Counter animation
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

            // Animate counters
            animateValue(setClientsCount, 0, 60, 1200, (v) => Math.floor(v));
            animateValue(setReviewsCount, 0, 450, 1400, (v) => Math.floor(v));
            animateValue(setRatingValue, 0, 9.8, 1200, (v) =>
              Number(v.toFixed(1))
            );
            animateValue(setUsersCount, 0, 500, 1600, (v) => Math.floor(v));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalMouseMove);
      document.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMove);
      document.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, dragStart]);

  // Start auto-rotation
  useEffect(() => {
    const timer = setTimeout(startAutoRotation, 2000);
    return () => {
      clearTimeout(timer);
      stopAutoRotation();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#183942] py-12 lg:py-20">
      <div className="  max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-px w-24 bg-[#ffffff7c] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Projects To Stare
          </h2>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            We create the most stunning graphic designs for your social media,
            websites, branding, or literally anything. They are just
            mindblowing.
          </p>
        </div>

        {/* Simple Bay Window Carousel */}
        <div className="mb-16 w-2/3 flex justify-center">
          <div
            className="relative"
            style={{
              perspective: "1700px",
              width: "min(530px, 100vw)",
              height: "min(450px, 60vh)",
            }}
          >
            <div
              className={`w-full h-full relative ${isDragging ? "cursor-grabbing" : "cursor-grab"} transition-transform duration-100 ease-out`}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ease-out rounded-lg overflow-hidden
                    ${hoveredIndex !== null ? (hoveredIndex === index ? "opacity-100" : "opacity-60") : "opacity-100"}
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${index * -36}deg) translateZ(-650px)`,
                    transformOrigin: "40% 40% 100px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: getBgPosition(index),
                    backfaceVisibility: "hidden",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats area */}
        <div className="bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: descriptive text */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                <span className="font-medium">Our</span>
                <span className="font-semibold"> Impacts</span>
                <span className="text-[#ef4b6e]">.</span>
              </h3>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                We are a UI UX design agency, Data-driven digital product design
                &amp; technology firm that transforms business. Flexirl focuses
                on human-centered UI/UX Design, UX Research, Web and mobile app
                development — offering end-to-end services that your users will
                love.
              </p>
            </div>

            {/* Right: numeric stats */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-8 lg:gap-12">
                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {clientsCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Clients
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {reviewsCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Positive Reviews
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {ratingValue}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Rating Out of 10
                  </div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#b1eeff] leading-none">
                    {usersCount}
                    <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                  </div>
                  <div className="mt-3 text-sm sm:text-base text-white/80 font-medium">
                    Users Satisfied
                  </div>
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
