"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroSlide, heroSlides } from "./heroData";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = heroSlides.length;
  const currentSlideData: HeroSlide = heroSlides[currentSlide];
  const prevSlideData: HeroSlide = heroSlides[prevSlide];

  // Inject Ken Burns animation keyframes
  useEffect(() => {
    const styleId = "ken-burns-animation";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const styleElement = document.getElementById(styleId);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setIsTransitioning(true);
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
      setCarouselIndex(0);
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevSlide(nextSlide);
      }, 1500);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPrevSlide(currentSlide);
        setIsTransitioning(true);
        const nextSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        setCurrentSlide(nextSlide);
        setCarouselIndex(0);
        setTimeout(() => {
          setIsTransitioning(false);
          setPrevSlide(nextSlide);
        }, 1500);
      } else if (e.key === "ArrowRight") {
        setPrevSlide(currentSlide);
        setIsTransitioning(true);
        const nextSlide = (currentSlide + 1) % totalSlides;
        setCurrentSlide(nextSlide);
        setCarouselIndex(0);
        setTimeout(() => {
          setIsTransitioning(false);
          setPrevSlide(nextSlide);
        }, 1500);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [totalSlides, currentSlide]);

  const nextCarouselImage = () => {
    setCarouselIndex(
      (prev) => (prev + 1) % currentSlideData.carouselImages.length
    );
  };

  const prevCarouselImage = () => {
    setCarouselIndex(
      (prev) =>
        (prev - 1 + currentSlideData.carouselImages.length) %
        currentSlideData.carouselImages.length
    );
  };

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setIsTransitioning(true);
    const nextSlideIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextSlideIndex);
    setCarouselIndex(0);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevSlide(nextSlideIndex);
    }, 1500);
  };

  const goToPrevSlide = () => {
    setPrevSlide(currentSlide);
    setIsTransitioning(true);
    const nextSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(nextSlideIndex);
    setCarouselIndex(0);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevSlide(nextSlideIndex);
    }, 1500);
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      {/* Modern Background Transition with Zoom, Blur & Fade */}
      {/* Previous Background Layer - Zoom out, blur & fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isTransitioning
            ? "opacity-0 scale-[1.15] blur-md"
            : "opacity-100 scale-100 blur-0"
        }`}
        style={{
          backgroundImage: `url(${prevSlideData.backgroundImage})`,
          transformOrigin: "center center",
          willChange: "transform, opacity, filter",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 transition-opacity duration-[1500ms]" />
      </div>

      {/* Current Background Layer - Zoom in & fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isTransitioning
            ? "opacity-100 scale-100 blur-0"
            : prevSlide === currentSlide
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-[1.15] blur-md"
        }`}
        style={{
          backgroundImage: `url(${currentSlideData.backgroundImage})`,
          transformOrigin: "center center",
          willChange: "transform, opacity, filter",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 transition-opacity duration-[1500ms]" />
      </div>

      {/* Continuous Ken Burns Effect - Subtle zoom animation */}
      {!isTransitioning && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${currentSlideData.backgroundImage})`,
            transformOrigin: "center center",
            animation: "kenBurnsZoom 20s ease-in-out infinite",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-4 sm:space-y-6 z-20 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-tight">
                {currentSlideData.headline}
              </h1>
              <p className="text-sm sm:text-base md:text-md lg:text-[16px] text-white/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {currentSlideData.description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent hover:bg-white/10 border-2 border-blue-400 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105">
                  GET STARTED
                </button>
              </div>
            </div>

            {/* Right Side - Carousel Images */}
            <div className="hidden lg:block relative z-20">
              <div className="flex gap-4 justify-end">
                {currentSlideData.carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative w-[280px] xl:w-[340px] h-48 xl:h-60 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ${
                      idx === carouselIndex
                        ? "transform scale-105 z-10"
                        : "transform scale-105 opacity-80"
                    }`}
                    style={{
                      marginLeft: idx > 0 ? "16px" : "0",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Carousel ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <svg
                width="14"
                height="25"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-4 sm:h-[29px]"
              >
                <path
                  d="M15.5 0.5H11.4091C9.6008 0.5 7.86657 1.2375 6.58791 2.55025C5.30925 3.86301 4.59091 5.64348 4.59091 7.5V11.7H0.5V17.3H4.59091V28.5H10.0455V17.3H14.1364L15.5 11.7H10.0455V7.5C10.0455 7.1287 10.1891 6.7726 10.4449 6.51005C10.7006 6.2475 11.0474 6.1 11.4091 6.1H15.5V0.5Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="24"
                height="20"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[29px] sm:h-6"
              >
                <path
                  d="M28 0.51257C26.803 1.35692 25.4776 2.00271 24.075 2.42507C23.3222 1.55946 22.3217 0.945935 21.2088 0.667477C20.0959 0.38902 18.9244 0.459064 17.8526 0.868136C16.7808 1.27721 15.8606 2.00557 15.2162 2.95472C14.5719 3.90386 14.2346 5.02799 14.25 6.17507V7.42507C12.0533 7.48203 9.87659 6.99484 7.91376 6.00688C5.95093 5.01892 4.2629 3.56086 3 1.76257C3 1.76257 -2 13.0126 9.25 18.0126C6.67566 19.76 3.60895 20.6362 0.5 20.5126C11.75 26.7626 25.5 20.5126 25.5 6.13757C25.4988 5.78939 25.4654 5.44206 25.4 5.10007C26.6758 3.84194 27.576 2.25346 28 0.51257V0.51257Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="22"
                height="23"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[27px] sm:h-7"
              >
                <path
                  d="M20.1436 0.00976562C23.8189 0.202617 26.7139 3.34933 26.7139 7.16699V20.5C26.7137 24.4404 23.6294 27.6668 19.7861 27.667H6.92871C3.08546 27.6668 0.000185954 24.4405 0 20.5V7.16699C0 3.22637 3.08535 0.000198734 6.92871 0H19.7861L20.1436 0.00976562ZM6.92871 1C3.6716 1.0002 1 3.74407 1 7.16699V20.5C1.00019 23.9228 3.67171 26.6668 6.92871 26.667H19.7861C23.0431 26.6668 25.7137 23.9227 25.7139 20.5V7.16699C25.7139 3.85075 23.2071 1.17175 20.0889 1.00781L19.7861 1H6.92871ZM10.8076 8.60059C11.8627 8.03296 13.066 7.82371 14.2441 8.00488C15.4456 8.18978 16.5556 8.77001 17.4102 9.65625C18.2646 10.5423 18.8186 11.688 18.9951 12.9219C19.168 14.1314 18.9697 15.3678 18.4258 16.4551C17.8817 17.5425 17.0183 18.4273 15.957 18.9814C14.8952 19.5357 13.6896 19.7294 12.5137 19.5332C11.338 19.3369 10.2548 18.7615 9.41699 17.8926C8.57941 17.0239 8.02914 15.9056 7.8418 14.6982C7.65463 13.4911 7.83916 12.2522 8.37012 11.1582C8.90127 10.0643 9.75316 9.16804 10.8076 8.60059ZM14.0918 8.99316C13.1301 8.84528 12.1464 9.016 11.2812 9.48145C10.416 9.94714 9.71098 10.6863 9.26953 11.5957C8.82814 12.5053 8.67391 13.5376 8.83008 14.5449C8.98642 15.5525 9.44464 16.4815 10.1367 17.1992C10.8285 17.9166 11.7186 18.3867 12.6787 18.5469C13.6386 18.707 14.6237 18.55 15.4941 18.0957C16.3648 17.6412 17.0791 16.9114 17.5312 16.0078C17.9834 15.1039 18.1501 14.0729 18.0059 13.0635C17.8586 12.0339 17.3962 11.0826 16.6904 10.3506C15.9848 9.61882 15.0729 9.14409 14.0918 8.99316ZM20.542 6.00977C20.7698 6.05645 20.9414 6.25843 20.9414 6.5C20.9412 6.74141 20.7696 6.94357 20.542 6.99023L20.4414 7H20.4287C20.1528 6.99988 19.9289 6.77591 19.9287 6.5C19.9287 6.22393 20.1527 6.00012 20.4287 6H20.4414L20.542 6.00977Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 w-full sm:w-auto justify-center">
              {/* Left Arrow */}
              <button
                onClick={goToPrevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer relative z-30"
                aria-label="Previous slide"
                type="button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none sm:w-[30px] sm:h-[30px]"
                >
                  <path
                    d="M0.840822 18.3456L25.8408 0.40625L11.0681 18.3456L25.8408 37.4062L0.840822 18.3456Z"
                    fill="#535353"
                    stroke="white"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={goToNextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer relative z-30"
                aria-label="Next slide"
                type="button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none sm:w-[23px] sm:h-[32px]"
                >
                  <path
                    d="M25.395 19.4582L0.39502 37.3976L15.1677 19.4582L0.39502 0.397583L25.395 19.4582Z"
                    fill="#535353"
                    stroke="white"
                  />
                </svg>
              </button>

              {/* Progress Bar */}
              <div className="flex-1 sm:flex-none w-full sm:w-32 md:w-48 lg:w-[500px] h-1 bg-white/30 rounded-full overflow-hidden max-w-[500px]">
                <div
                  className="h-full bg-yellow-400 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Slide Number */}
              <span className="text-white text-xs sm:text-sm font-medium min-w-[24px] sm:min-w-[30px] text-center">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
