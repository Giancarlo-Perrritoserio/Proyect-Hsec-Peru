import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import CourseCard from "./CourseCard";
import ImagenReferencial from "../../Resources/Imagenes-referencial/no-photo.jpg";

const CoursesList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      image: ImagenReferencial,
      title: "Trabajos en espacios confinados",
      description: "El trabajo en espacios confinados implica realizar actividades en áreas limitadas de acceso.",
      fullDescription: "El trabajo en espacios confinados implica actividades en áreas con ventilación restringida y riesgos como falta de oxígeno o atmósferas tóxicas. Requiere equipos específicos y procedimientos estrictos para proteger a los trabajadores.",
      link: "#",
    },
    {
      image: ImagenReferencial,
      title: "Rescate industrial",
      description: "Se centra en operaciones de emergencia en entornos laborales como fábricas.",
      fullDescription: "El rescate industrial aborda emergencias en fábricas, asegurando la protección de empleados y equipos mediante técnicas avanzadas y prácticas seguras.",
      link: "#",
    },
    {
      image: ImagenReferencial,
      title: "Rescate vertical",
      description: "Técnicas para evacuar o asistir a personas en alturas o profundidades utilizando cuerdas.",
      fullDescription: "El rescate vertical utiliza equipos especializados para evacuar o asistir personas en alturas o profundidades, asegurando procedimientos seguros y efectivos.",
      link: "#",
    },
  ];

  const handleReadMore = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <motion.div
        className="flex flex-col md:flex-row items-stretch gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            onReadMore={() => handleReadMore(course)}
          />
        ))}
      </motion.div>

      {selectedCourse && (
        <Modal
          isOpen={!!selectedCourse}
          onClose={closeModal}
          title={selectedCourse.title}
          description={selectedCourse.fullDescription}
          image={selectedCourse.image}
        />
      )}
    </div>
  );
};

export default CoursesList;
