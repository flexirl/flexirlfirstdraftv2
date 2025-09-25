"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import RatingBar from "../ui/RatingBar";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "medium",
  className,
}) {
  const animationDuration = {
    slow: 40,
    medium: 25,
    fast: 15,
  };

  // Repeat items 4 times to ensure seamless scroll
  const loopItems = [...items, ...items, ...items, ...items];

  const controls = useAnimation();

  useEffect(() => {
    // start animation
    controls.start(
      { x: direction === "left" ? "-50%" : "50%" },
      {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: animationDuration[speed],
      }
    );
  }, [controls, direction, speed]);

  return (
    <div
      className={cn(
        "relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex gap-4 sm:gap-6"
        // animation controls allow pause/resume on hover
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          controls.start(
            { x: direction === "left" ? "-50%" : "50%" },
            {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: animationDuration[speed],
            }
          );
        }}
        animate={controls}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col justify-between rounded-2xl shadow-md p-4 sm:p-6
              xs:w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]
              min-h-[300px] sm:min-h-[360px]
              hover:scale-105 transition-transform duration-300
            "
            style={{
              backgroundColor: item.bgColor,
              color: item.textColor,
            }}
          >
            <RatingBar
              rating={item.rating}
              maxRating={5}
              readOnly={true}
              variant="filled"
              size="small"
              className="mb-2 sm:mb-4"
            />
            <p className="text-xs sm:text-sm md:text-base text-center flex-1">
              "{item.text}"
            </p>
            <div className="flex items-center mt-2 sm:mt-4 gap-2 sm:gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium">
                  {item.name}
                </span>
                <span className="text-[10px] sm:text-xs opacity-80">
                  {item.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
