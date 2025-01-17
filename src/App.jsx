import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes de la web en general
import BaseLayout from './components/BaseLayout';

//Paginas de la pagina
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Certificates from './pages/Certificates/Certificates';
import Companies from './pages/Companies/Companies';
import Nosotros from './pages/Nosotros/Nosotros.jsx';

const App = () => {
  console.log("App Component Rendered");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="certificates" element={<Certificates />} /> 
          <Route path="companies" element={<Companies />} /> 
          <Route path="Nosotros" element={<Nosotros />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
