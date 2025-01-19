import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, description, image }) => {
  if (!isOpen) return null;

  // Función para manejar el clic fuera del modal
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScSCKTUj-39xIpIfkKJIA1Bf36blogtxs9kCh_qW0vDrpmUKA/viewform"; // Enlace de Google Forms

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside} // Detecta clic fuera del modal
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Botón para cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <p className="text-gray-600">{description}</p>

        {/* Botón de inscripción */}
        <div className="text-center mt-6">
          <a
            href={formLink} // Enlace al formulario
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-red-700 transition"
          >
            INSCRIBIRSE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
