import React, { useEffect, useRef } from "react";
import "./Slider.css"; // Estilos específicos para el slider

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1; // Mueve el slider automáticamente
      }
    }, 20); // Velocidad del deslizamiento (ajustable)

    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  const logos = [
    "/images/bayer.png", // Reemplaza con las rutas reales de tus imágenes
    "/images/essalud.png",
    "/images/yura.png",
    "/images/lasbambas.png",
    "/images/antapaccay.png",
    "/images/southern.png",
  ];

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {logos.map((logo, index) => (
          <div className="slider-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="fade-overlay left"></div>
      <div className="fade-overlay right"></div>
    </div>
  );
};

export default Slider;
