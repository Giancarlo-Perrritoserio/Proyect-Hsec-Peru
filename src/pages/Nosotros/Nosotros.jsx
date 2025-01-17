import ImagenReferencial from '../../Resources/Imagenes-referencial/no-photo.jpg'; // Importa Imagen Referencial

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Sobre Nosotros
      </h1>
      {/* ----------------------------------------------------------------------------- */}
      {/* Contenedor con imagen y texto en filas (responsive) */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Texto */}
        <p className="text-lg text-gray-700 md:w-1/2">
          Somos una empresa peruana fundada en el año 2010 y dedicada a la asesoría, 
          capacitación, elaboración y ejecución de proyectos relacionados con la seguridad y salud ocupacional para todos los sectores económicos del país. 
          Contamos con un staff multidisciplinario de profesionales y especialistas en Seguridad y Salud Ocupacional, 
          Prevención de Riesgos, Rescate Industrial y Acceso por Cuerdas.
        </p>

        {/* Imagen al costado */}
        <img 
          src={ImagenReferencial}
          alt="Equipo de HSEC Perú" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>
      {/* ----------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------------------- */}
      {/* Contenedor con imagen y texto en filas (responsive) */}
      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* Imagen al costado */}
        <img 
          src={ImagenReferencial}
          alt="Equipo de HSEC Perú" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        {/* Texto */}
        <div className="text-lg text-gray-700 md:w-1/2 space-y-4">
        <p>
          . Somos el primer <span className="text-red-600 font-bold">PETZL TECHNICAL PARTNER del País</span>.
        </p>
        <p>
          . Somos miembros de la <span className="text-red-600 font-bold">Asociación Peruana de Empresas y Técnicos en Acceso por Cuerdas APETAC</span>.
        </p>
        <p>
          . Mantenemos convenio con el <span className="text-red-600 font-bold">Colegio de Ingenieros del Perú (Capítulo de Ingeniería de Minas)</span>.
        </p>
        <p>
          . Somos aliados estratégicos de <span className="text-red-600 font-bold">LAYHER, TESICNOR ECO IMPEQUE y PRIMERA LÍNEA</span>.
        </p>
        <p>
          . Somos promotores de los <span className="text-red-600 font-bold">sistemas de protección contra caídas ROTHOBLAAS</span>.
        </p>
        </div>

      </div>
      {/* ----------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------------------- */}
      <div className="mt-10 space-y-12">
        {/* Misión */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {/* Imagen */}
          <img 
            src={ImagenReferencial}
            alt="Imagen Misión" 
            className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          />
          {/* Contenido */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold text-red-600">HSEC PERÚ</span>, protegemos vidas y reducimos riesgos laborales mediante soluciones 
              integrales en seguridad industrial, capacitación y consultoría.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {/* Contenido */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser referentes técnicos e innovadores en seguridad industrial para el sector 
              empresarial de Arequipa, destacando por nuestra calidad y profesionalismo.
            </p>
          </div>
          {/* Imagen */}
          <img 
            src={ImagenReferencial}
            alt="Imagen Visión" 
            className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          />
        </div>

        {/* Valores */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          {/* Imagen */}
          <img 
            src={ImagenReferencial}
            alt="Imagen Valores" 
            className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          />
          {/* Contenido */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">Valores</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-3">
              <li>
                <strong className="text-red-600">Integridad:</strong> Actuar con honestidad, ética y transparencia en todas nuestras acciones.
              </li>
              <li>
                <strong className="text-red-600">Seguridad:</strong> Proteger la seguridad como un bien supremo, implementando prácticas preventivas y correctivas.
              </li>
              <li>
                <strong className="text-red-600">Compromiso:</strong> Brindar soluciones integrales a nuestros colaboradores y clientes.
              </li>
              <li>
                <strong className="text-red-600">Innovación:</strong> Implementar nuevas tecnologías y metodologías para mejorar continuamente nuestros servicios.
              </li>
              <li>
                <strong className="text-red-600">Responsabilidad:</strong> Cumplir con nuestros compromisos y obligaciones de manera eficiente y efectiva.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------------------- */}
      <div className="mt-10 space-y-12 bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
        {/* PETZL Technical Partner */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-red-500 pb-2">
            PETZL Technical Partner
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            El Centro de Innovación Vertical (CIV) como Petzl Technical Institute, reconoce a HSEC Perú como el primer 
            Petzl Technical Partner del territorio nacional para lo cual debimos superar satisfactoriamente una serie de requisitos:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 mb-6 space-y-2">
            <li>Instalaciones adecuadas para la formación.</li>
            <li>Un alto nivel de conocimiento de productos y soluciones Petzl.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Esto nos permite integrar los módulos formativos y soluciones Petzl en nuestros programas de formación. 
            Este reconocimiento se confirma mediante la autorización de uso del distintivo oficial de PTP y su código respectivo.
          </p>

          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">
              PETZL Technical Partner<br />
              PETZL - TP PE2 22097 PEZ
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Contacto: <a href="mailto:comunicaciones@hsecperu.com" className="text-blue-600 hover:underline">
                comunicaciones@hsecperu.com
              </a>
            </p>
          </div>
        </div>

        {/* Espacio para dos imágenes */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img 
            src={ImagenReferencial}
            alt="Imagen 1" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <img 
            src={ImagenReferencial}
            alt="Imagen 2" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        {/* Botón */}
        <div className="text-center mt-6">
          <a 
            href="/certificacion-de-competencias-laborales" 
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition">
            Certificación de Competencias Laborales
          </a>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}

    </section>
  );
};

export default AboutUs;
