import React, { useEffect, useState } from "react";
import SayHelloButton from "../ui/SayHelloButton";

export const StyledFixedNavigation = ({ className, onOpenCta }) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonial", label: "Testimonial" },
    { href: "#sayhello", label: "Say Hello" },
  ];

  const [activeHash, setActiveHash] = useState("#home");

  // Track active section for styles
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
  };

  // Dynamic background + link color per section
  const bgBySection = {
    "#home": "bg-transparent",
    "#about": "backdrop-blur bg-white/70 shadow-sm",
    "#services": "backdrop-blur bg-[#f8f8f8]/80 shadow-sm",
    "#projects": "backdrop-blur bg-[#f9f5f2]/80 shadow-sm",
    "#testimonial": "backdrop-blur bg-white/70 shadow-sm",
    "#sayhello": "backdrop-blur bg-[#0E0E2E]/70 shadow-sm",
  };
  const isDarkBg = activeHash === "#sayhello";
  const navBgClass = bgBySection[activeHash] || "backdrop-blur bg-white/70 shadow-sm";

  const linkBase =
    "[font-family:'Inter_24pt-ExtraBold',Helvetica] font-extrabold text-[12px] tracking-[-0.3px] leading-none px-2 py-2 transition-colors";
  const linkColor = isDarkBg ? "text-white/85 hover:text-white" : "text-[#000000b0] hover:text-black";
  const linkActive = isDarkBg ? "text-white" : "text-black";

  const leftColumn = navItems.slice(0, 3);
  const rightColumn = navItems.slice(3);

  return (
    <>
      {/* Desktop / larger screens: centered top bar with logo left, links center, say hello right */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-50 ${className || ""}`}>
        <div className={`transition-colors duration-300` + " " + navBgClass}>
          <div className="mx-auto max-w-[1200px] px-6 h-[68px] grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Left: Logo */}
            <div className="justify-self-start">
              <a href="#home" onClick={(e)=>handleSmoothScroll(e,'#home')} className={`text-[22px] font-bold ${isDarkBg? 'text-white' : 'text-black'}`}>Flexirl</a>
            </div>

            {/* Center: Nav */}
            <nav className="justify-self-center flex items-center gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={`${item.href}-${idx}`}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`${linkBase} ${activeHash === item.href ? linkActive : linkColor}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right: Say Hello CTA */}
            <div className="justify-self-end">
              <SayHelloButton className="flex" onClick={onOpenCta} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet: unchanged inline grid, not fixed */}
      <div className="lg:hidden w-full px-4 py-3 bg-transparent">
        <div className="max-w-sm mx-auto grid grid-cols-2 gap-y-2 gap-x-6 text-center">
          <div className="flex flex-col items-start">
            {leftColumn.map((item, idx) => (
              <a
                key={`${item.href}-${idx}`}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={` text-sm font-extrabold leading-5 transition-colors text-[#00000082]`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {rightColumn.map((item, idx) => (
              <a
                key={`${item.href}-${idx}`}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`font-extrabold text-sm leading-5 transition-colors text-[#00000082]`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
