import { useState } from "react";
import ImagenReferencial from "../../Resources/Imagenes-referencial/no-photo.jpg";
import Modal from "./Modal"; // Asegúrate de importar el componente Modal

const CourseSearch = () => {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null); // Estado para el curso seleccionado

  const courses = [
    {
      image: ImagenReferencial,
      title: "Trabajos en Altura - 04 horas",
      description: "El trabajo en altura implica realizar actividades en estructuras elevadas, utilizando técnicas de seguridad adecuadas.",
      fullDescription: "Este curso cubre todos los aspectos fundamentales del trabajo en altura, incluyendo técnicas de seguridad, equipos de protección y regulaciones específicas.",
      date: "12 ene 2024",
    },
    {
      image: ImagenReferencial,
      title: "Trabajos en Altura - 08 horas",
      description: "Curso avanzado para trabajos en altura, cubriendo técnicas avanzadas y uso de equipos de seguridad específicos.",
      fullDescription: "En este curso se abordan situaciones complejas de trabajos en altura, con foco en técnicas avanzadas y el uso de equipos especializados.",
      date: "12 ene 2024",
    },
    {
      image: ImagenReferencial,
      title: "Seguridad en espacios confinados",
      description: "Curso esencial para garantizar la seguridad en ambientes cerrados y limitados.",
      fullDescription: "Este curso prepara a los trabajadores para afrontar riesgos en espacios confinados, utilizando procedimientos de seguridad avanzados y protocolos de rescate.",
      date: "15 feb 2024",
    },
    {
      image: ImagenReferencial,
      title: "Primeros Auxilios en el Trabajo",
      description: "Conocimientos básicos y avanzados para actuar ante emergencias en el lugar de trabajo.",
      fullDescription: "Aprende cómo reaccionar ante emergencias médicas, incluyendo maniobras de reanimación y primeros auxilios en accidentes laborales.",
      date: "20 mar 2024",
    },
    {
      image: ImagenReferencial,
      title: "Uso de Equipos de Protección Personal (EPP)",
      description: "Aprende a utilizar correctamente los equipos de protección para minimizar riesgos laborales.",
      fullDescription: "Este curso te enseña el uso adecuado de todos los equipos de protección personal (EPP), desde cascos hasta arneses, para evitar accidentes en el trabajo.",
      date: "10 abr 2024",
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleReadMore = (course) => {
    setSelectedCourse(course); // Establece el curso seleccionado para mostrar más información
  };

  const closeModal = () => {
    setSelectedCourse(null); // Cierra el modal
  };

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScSCKTUj-39xIpIfkKJIA1Bf36blogtxs9kCh_qW0vDrpmUKA/viewform"; // Enlace de Google Forms

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Busca tu <span className="text-red-600">Curso Ideal</span>
      </h1>
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Buscar curso..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-gray-500 mb-4">Fecha: {course.date}</p>
              <button
                onClick={() => handleReadMore(course)}
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                Leer Más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar el modal si hay un curso seleccionado */}
      {selectedCourse && (
        <Modal
          isOpen={!!selectedCourse}
          onClose={closeModal}
          title={selectedCourse.title}
          description={selectedCourse.fullDescription}
          image={selectedCourse.image}
        >
          <div className="text-center mt-6">
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-red-700 transition"
            >
              Inscribirse
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CourseSearch;
