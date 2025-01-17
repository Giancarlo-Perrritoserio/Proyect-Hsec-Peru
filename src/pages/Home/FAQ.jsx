import React, { useState } from "react";
import "./FAQ.css"; // Archivo CSS para estilos

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué certificaciones ofrece HSEC Perú?",
      answer:
        "Somos una empresa peruana fundada el año 2010 y dedicada a la asesoría, capacitación, elaboración y ejecución de proyectos relacionados con la seguridad y salud ocupacional para todos los sectores económicos del país.",
    },
    {
      question: "¿Dónde se realizan las capacitaciones?",
      answer:
        "Las capacitaciones se realizan en nuestro Centro de Entrenamiento de Trabajos de Alto Riesgo (CETAR), que cuenta con infraestructura y equipos especializados.",
    },
    {
      question: "¿Las certificaciones tienen validez nacional?",
      answer:
        "Sí, nuestras certificaciones tienen validez nacional. Además, nuestras certificaciones laborales son reconocidas oficialmente.",
    },
    {
      question: "¿Realizan servicios de consultoría?",
      answer:
        "Sí, ofrecemos servicios de consultoría en seguridad y salud ocupacional, incluyendo evaluaciones de riesgo y diseño de sistemas de protección.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-header" onClick={() => toggleQuestion(index)}>
            <span className="faq-icon">
              {activeIndex === index ? "×" : "+"}
            </span>
            <h3 className="faq-question">{item.question}</h3>
          </div>
          {activeIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
