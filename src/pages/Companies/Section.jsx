import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            {title}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const Section = () => {
  const [trainingModalOpen, setTrainingModalOpen] = useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleContact = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=51987131162&text=hola%20quiero%20informacion";
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Training Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <img 
              src="/api/placeholder/600/400" 
              alt="Workers training" 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Capacitamos</span>
              <span className="text-gray-400"> a tu personal</span>
            </h2>
            <p className="text-gray-600 mb-6">
            Realizados y diseñamos programas de capacitación y entrenamiento para satisfacer las necesidades de nuestros clientes y cumplimiento de la legislación nacional vigente.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setTrainingModalOpen(true)}
                className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                Leer Más
              </button>
              <button 
                onClick={handleContact}
                className="text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-300"
              >
                Contactarnos
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Projects Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <img 
              src="/api/placeholder/600/400" 
              alt="Engineering work" 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">PROYECTOS</span>
              <span className="text-gray-400"> Y SERVICIOS DE INGENIERÍA</span>
            </h2>
            <p className="text-gray-600 mb-6">
            Elaboramos y ejecutamos proyectos de ingeniería relacionados con los trabajos en altura, espacios confinados y acceso por cuerdas como la instalación, verificación, testeo, inspección, mantenimiento de limpieza y sistemas, componentes, Accesorios y EPPs"
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setProjectsModalOpen(true)}
                className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                Leer Más
              </button>
              <button 
                onClick={handleContact}
                className="text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-all duration-300"
              >
                Contactarnos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Training Modal */}
      <Modal 
        isOpen={trainingModalOpen} 
        onClose={() => setTrainingModalOpen(false)}
        title={<h2 className="text-2xl font-bold text-red-500">OFRECEMOS</h2>}
      >
        <div className="space-y-2 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>• Certificación de Técnicos de Acceso por Cuerdas APETAC</li>
              <li>• Capacitación y Entrenamiento en Trabajos Verticales</li>
              <li>• Capacitación y Entrenamiento en Rescate Industrial</li>
              <li>• Formación de Persona Competente en Trabajos en Altura</li>
              <li>• Formación de Persona Competente en Espacios Confinados</li>
              <li>• Train The Trainer (Con mención en Trabajos En Altura y/o Espacios Confinados)</li>
            </ul>
            <ul className="space-y-2">
              <li>• Entrenamiento y Formación de Brigadas</li>
              <li>• Entrenamiento y Formación de Vigías</li>
              <li>• Capacitación en Primeros Auxilios (Urbano / Agreste)</li>
              <li>• Entrenamiento y Certificación en Control de Hemorragias</li>
              <li>• Entrenamiento en Uso de Extintores</li>
              <li>• Liderazgo y Trabajo en Equipo (Vivencial)</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Projects Modal */}
      <Modal 
        isOpen={projectsModalOpen} 
        onClose={() => setProjectsModalOpen(false)}
        title={<h2 className="text-2xl font-bold bg-gray-900 text-white px-4 py-2 rounded-md inline-block">PROYECTOS</h2>}
      >
        <div className="space-y-3 text-gray-700 mt-4">
          <ul className="space-y-3">
            <li>• Diseño e instalación de línea de vida y puntos de anclaje.</li>
            <li>• Inspección, mantenimiento y testeo de líneas de vida y puntos de anclaje.</li>
            <li>• Montaje, Inspección, limpieza y mantenimiento de componentes de andamios.</li>
            <li>• Inspección, limpieza y mantenimiento de equipos de protección contra caídas.</li>
            <li>• Inventario y buenas prácticas de almacenamiento de equipos y/o activos.</li>
            <li>• Ponemos a su disposición nuestra Brigada de Rescate Industrial - BRI para dar respuesta durante actividades de difícil acceso, trabajos en altura, espacios confinados u otras que requieran la intervención de personal especialista en Rescate Técnico con cuerdas y Atención Pre-hospitalaria.</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Section;