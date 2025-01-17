import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sections = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Sección 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-12">
        <img
          src="/path/to/image1.jpg"
          alt="Entrenamiento"
          className="rounded-lg shadow-lg"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-red-600">
            Centro de <span className="text-black">Entrenamiento</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Nuestro Centro de Entrenamiento de Trabajos de Alto Riesgo (CETAR)
            cuenta con la infraestructura, equipos y personal adecuado para
            realizar entrenamientos con enfoque basado en competencias.
          </p>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-12">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-gray-700">
            Capacitaciones <span className="text-red-600">Virtuales y Presenciales</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Brindamos cursos teóricos y técnicos, dirigidos al público en general
            y a empresas que requieren capacitar a su personal.
          </p>
          <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700">
            Ver Cursos
          </button>
        </div>
        <img
          src="/path/to/image2.jpg"
          alt="Capacitaciones"
          className="rounded-lg shadow-lg"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Sections;
