import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="bg-white text-blue-600 py-4"> {/* Fondo blanco y texto azul */}
      <div className="max-w-7xl mx-auto flex justify-center space-x-6">
        <Link to="/" className="hover:underline">
          Nosotros
        </Link>
        <Link to="/courses" className="hover:underline">
          Cursos
        </Link>
        <Link to="/certificates" className="hover:underline">
          Certificados
        </Link>
        <Link to="/companies" className="hover:underline">
          Empresas
        </Link>
      </div>
    </section>
  );
};

export default Banner;
