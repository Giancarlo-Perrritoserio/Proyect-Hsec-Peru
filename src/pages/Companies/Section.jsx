import React, { useEffect } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {

      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out'
        });
      }, []);
    
      return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Training Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div 
              className="w-full md:w-1/2"
              data-aos="fade-right"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Workers training" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div 
              className="w-full md:w-1/2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-red-500">Capacitamos</span>
                <span className="text-gray-400"> a tu personal</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Realizados y diseñamos programas de capacitación y entrenamiento para satisfacer 
                las necesidades de nuestros clientes y cumplimiento de la legislación nacional vigente.
              </p>
              <div className="flex gap-4">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md">
                  Leer Más
                </button>
                <button className="text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-300">
                  Contactarnos
                </button>
              </div>
            </div>
          </div>
    
          {/* Engineering Projects Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div 
              className="w-full md:w-1/2"
              data-aos="fade-left"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Engineering work" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div 
              className="w-full md:w-1/2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-red-500">PROYECTOS</span>
                <span className="text-gray-400"> Y SERVICIOS DE INGENIERÍA</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Elaboramos y ejecutamos proyectos de ingeniería relacionados con los trabajos en 
                altura, espacios confinados y acceso por cuerdas como la instalación, verificación, 
                testeo, inspección, mantenimiento de limpieza y sistemas, componentes, Accesorios y EPPs
              </p>
              <div className="flex gap-4">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md">
                  Leer Más
                </button>
                <button className="text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-300">
                  Contactarnos
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Section;
