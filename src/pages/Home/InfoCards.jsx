import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Card 1 */}
        <div
          className="flex items-center p-6 bg-blue-50 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <img
            src="/path/to/certificate-image.jpg"
            alt="Certificado"
            className="w-1/3"
          />
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-900">
              ¿Dudas Sobre <span className="text-red-600">tu certificado?</span>
            </h3>
            <p className="mt-2 text-gray-600">
              Por si lo perdiste, necesitas verificarlo o si está vigente.
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              VERIFICAR
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex items-center p-6 bg-blue-50 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <img
            src="/path/to/business-image.jpg"
            alt="Empresa"
            className="w-1/3"
          />
          <div className="ml-6">
            <h3 className="text-xl font-bold text-gray-900">
              ¿Eres <span className="text-red-600">Empresa?</span>
            </h3>
            <p className="mt-2 text-gray-600">
              Revisa sobre nuestros proyectos y capacitaciones a personal.
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              LEER MÁS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
