"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SuperHeroSection = () => {
  const quotes = [
    "I can call in a favour and send people who aren't from this planet.",
    "We are here to fight for truth, and justice! We find the solution at our own way.",
  ];

  // Superhero data with positions around the circle (angles in degrees)
  const superheroes = [
    {
      name: "Spider-Man",
      image:
        "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?q=80&w=400",
      angle: 0, // Top
      floatDelay: 0,
      size: "w-32 md:w-40 lg:w-48",
    },
    {
      name: "Black Adam",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=400",
      angle: 72, // Top-right
      floatDelay: 0.2,
      size: "w-36 md:w-44 lg:w-52",
    },
    {
      name: "Hulk",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=400",
      angle: 144, // Right
      floatDelay: 0.4,
      size: "w-32 md:w-40 lg:w-48",
    },
    {
      name: "Batman",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=400",
      angle: 216, // Bottom
      floatDelay: 0.6,
      size: "w-28 md:w-36 lg:w-44",
    },
    {
      name: "Iron Man",
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=400",
      angle: 288, // Left
      floatDelay: 0.8,
      size: "w-32 md:w-40 lg:w-48",
    },
  ];

  const circleRadius = 200; // Radius in pixels

  // Calculate position on circle
  const getPosition = (angle: number) => {
    const radian = ((angle - 90) * Math.PI) / 180; // -90 to start from top
    const x = Math.cos(radian) * circleRadius;
    const y = Math.sin(radian) * circleRadius;
    return { x, y };
  };

  return (
    <section className="relative min-h-screen w-full bg-white pt-20 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8 z-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              Our Supper Heroes
            </h1>
            <div className="space-y-4 md:space-y-6">
              {quotes.map((quote, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl lg:text-2xl text-black font-semibold leading-relaxed"
                >
                  &ldquo;{quote}&rdquo;
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Rotating Circle with Superhero Images */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center">
            {/* Rotating Background Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-[500px] md:h-[600px] lg:h-[700px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 opacity-30 blur-3xl"></div>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 700"
              >
                <circle
                  cx="350"
                  cy="350"
                  r="320"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  opacity="0.5"
                  className="bg-red-400"
                />
              </svg>
            </motion.div>

            {/* Superhero Images Container - Rotates with circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-[500px] md:h-[600px] lg:h-[700px]"
              animate={{ rotate: 360 }}
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
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: hero.floatDelay,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={hero.image}
                          alt={hero.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs md:text-sm font-bold drop-shadow-lg text-center">
                          {hero.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Light Grey Curved Background Shape (behind circle) */}
            <div className="absolute inset-0 overflow-visible -z-10">
              <svg
                className="absolute bottom-0 right-0 w-[120%] h-full"
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
