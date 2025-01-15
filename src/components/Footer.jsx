import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../Resources/Logo/Hsec-Peru-logo.png'; // Importa el logo
import Mapa from '../Resources/Mapa/Hsec-Peru-Mapa.png'; // Importa el mapa

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 px-4">
        
        {/* Logo e Información de Contacto */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            src={logo}
            alt="HSEC Perú Logo"
            className="h-40 w-30"
          />
          <p className="text-center md:text-left text-white">
            Alto Libertad 486, Cerro Colorado <br />
            <a
              href="mailto:coordinacion@hsecperu.com"
              className="hover:text-blue-500"
            >
              coordinacion@hsecperu.com
            </a> <br />
            +51 987 131 162
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/HsecPeru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/HsecPeru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/HsecPeru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Mapa de Ubicación */}
        <div className="w-full md:w-1/3">
          <a
            href="https://maps.app.goo.gl/heARuF3bNGksi23SA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Mapa}
              alt="Ubicación HSEC Perú"
              className="w-full rounded-lg shadow-md"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
