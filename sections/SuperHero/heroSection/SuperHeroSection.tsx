"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SuperHeroSection = () => {
  const [circleRadius, setCircleRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 640) {
          // Mobile
          setCircleRadius(120);
        } else if (width < 768) {
          // Small tablets
          setCircleRadius(150);
        } else if (width < 1024) {
          // Tablets
          setCircleRadius(200);
        } else if (width < 1280) {
          // Desktop
          setCircleRadius(250);
        } else {
          // Large desktop
          setCircleRadius(300);
        }
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const quotes = [
    "I can call in a favour and send people who aren't from this planet.",
    "We are here to fight for truth, and justice! We find the solution at our own way.",
  ];

  // Superhero data with positions around the circle (angles in degrees)
  const superheroes = [
    {
      name: "Spider-Man",
      image: "/images/hero/hero1.png",
      angle: 0, // Top
      floatDelay: 0,
      size: "w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36",
    },
    {
      name: "Black Adam",
      image: "/images/hero/hero2.png",
      angle: 72, // Top-right
      floatDelay: 0.2,
      size: "w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40",
    },
    {
      name: "Hulk",
      image: "/images/hero/hero3.png",
      angle: 144, // Right
      floatDelay: 0.4,
      size: "w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36",
    },
    {
      name: "Batman",
      image: "/images/hero/hero4.png",
      angle: 216, // Bottom
      floatDelay: 0.6,
      size: "w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32",
    },
    {
      name: "Iron Man",
      image: "/images/hero/hero5.png",
      angle: 288, // Left
      floatDelay: 0.8,
      size: "w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36",
    },
  ];

  // Calculate position on circle
  const getPosition = (angle: number) => {
    const radian = ((angle - 90) * Math.PI) / 180; // -90 to start from top
    const x = Math.cos(radian) * circleRadius;
    const y = Math.sin(radian) * circleRadius;
    return { x, y };
  };

  return (
    <section className="relative min-h-screen w-full bg-[#FFFFFF] pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] py-8 sm:py-12">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 z-20 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              Our Supper Heroes
            </h1>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {quotes.map((quote, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-semibold leading-relaxed"
                >
                  &ldquo;{quote}&rdquo;
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Rotating Circle with Superhero Images */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] w-full flex items-center justify-center order-1 lg:order-2">
            {/* Rotating Background Circle */}
            <motion.div
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] xl:w-[700px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#D9D9D9] opacity-30 blur-3xl"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 700"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="350"
                  cy="350"
                  r="320"
                  fill="none"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  opacity="0.5"
                />
              </svg>
            </motion.div>

            {/* Superhero Images Container - Rotates with circle */}
            <motion.div
              className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] xl:w-[700px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {superheroes.map((hero, index) => {
                const position = getPosition(hero.angle);
                return (
                  <motion.div
                    key={hero.name}
                    className={`absolute ${hero.size} h-auto`}
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: 360,
                    }}
                    transition={{
                      y: {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: hero.floatDelay,
                      },
                      rotate: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="relative w-full aspect-[3/6] rounded-lg overflow-hidden">
                        <Image
                          src={hero.image}
                          alt={hero.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Light Grey Curved Background Shape (behind circle) */}
            <div className="absolute inset-0 overflow-visible -z-10">
              <svg
                className="absolute bottom-0 right-0 w-[120%] sm:w-[110%] h-full"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
                style={{ transform: "translateX(10%)" }}
              >
                <path
                  d="M1000 800 Q700 200 400 400 Q200 550 0 800 L0 800 L1000 800 Z"
                  fill="#E5E7EB"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperHeroSection;
