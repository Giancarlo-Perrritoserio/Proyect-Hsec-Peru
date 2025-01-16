import React, { useState, useEffect } from "react";
import slide1 from "../../assets/images/image1hsec.png";
import slide2 from "../../assets/images/image2hsec.png";
import slide3 from "../../assets/images/image3hsec.png";

const Carrousel = () => {
  const slides = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (index) => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1);
    } else if (index >= slides.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    updateCarousel(currentIndex + 1);
  };

  const prevSlide = () => {
    updateCarousel(currentIndex - 1);
  };

  // Configuración del temporizador automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el temporizador cuando el componente se desmonta
  }, [currentIndex]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => updateCarousel(index)}
          ></button>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60">
          ❮
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60">
          ❯
        </span>
      </button>
    </div>
  );
};

export default Carrousel;
