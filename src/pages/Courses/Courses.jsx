import React from "react";
import CourseSearch from "./CourseSearch";
import CoursesList from "./CoursesList";

const Courses = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          CURSOS <span className="text-red-600">POR COMENZAR</span> 🔥
        </h1>
      </div>

      {/* Lista de cursos */}
      <CoursesList />

      {/* Buscador de cursos */}
      <CourseSearch />
    </section>
  );
};

export default Courses;
