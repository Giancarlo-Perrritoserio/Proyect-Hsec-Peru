import { Link, useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  const isActive = (path) => location.pathname === path; // Función para verificar si el enlace es activo

  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto flex justify-center space-x-6">
        <Link
          to="/"
          className={`text-blue-600 ${isActive('/') ? 'text-gray-500' : ''} hover:underline`} // Azul por defecto, gris si activo
          style={{ fontSize: '20px' }}
        >
          Inicio
        </Link>
        <Link
          to="/courses"
          className={`text-blue-600 ${isActive('/courses') ? 'text-gray-500' : ''} hover:underline`} // Azul por defecto, gris si activo
          style={{ fontSize: '20px' }}
        >
          Cursos
        </Link>
        <Link
          to="/certificates"
          className={`text-blue-600 ${isActive('/certificates') ? 'text-gray-500' : ''} hover:underline`} // Azul por defecto, gris si activo
          style={{ fontSize: '20px' }}
        >
          Certificados
        </Link>
        <Link
          to="/companies"
          className={`text-blue-600 ${isActive('/companies') ? 'text-gray-500' : ''} hover:underline`} // Azul por defecto, gris si activo
          style={{ fontSize: '20px' }}
        >
          Empresas
        </Link>
        <Link
          to="/Nosotros"
          className={`text-blue-600 ${isActive('/Nosotros') ? 'text-gray-500' : ''} hover:underline`} // Azul por defecto, gris si activo
          style={{ fontSize: '20px' }}
        >
          Nosotros
        </Link>
      </div>
    </section>
  );
};

export default Banner;
