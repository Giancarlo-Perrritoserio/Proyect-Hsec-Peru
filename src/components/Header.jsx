import { Link } from 'react-router-dom';
import logo from '../Resources/Logo/Hsec-Peru-logo.png'; // Importa el logo

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <img
            src={logo} // Usa la variable que importamos
            alt="HSEC Perú Logo"
            className="h-35 w-20"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800 leading-tight">
              Especialistas en Prevención de riesgos
            </span>
            <span className="text-sx font-bold text-gray-800 leading-tight">
              Primer PETZL TECHNICAL PARTNER del País
            </span>
          </div>  
        </div>
      </div>
    </header>
  );
};

export default Header;