import React, { useState } from 'react';

const CertificateConsultation = () => {
  const [dniData, setDniData] = useState({
    dni: '',
    apellidoPaterno: ''
  });
  
  const [codigoData, setCodigoData] = useState({
    codigo: ''
  });

  const handleDniSubmit = (e) => {
    e.preventDefault();
    console.log('Consulting by DNI:', dniData);
    // Add your API call or consultation logic here
  };

  const handleCodigoSubmit = (e) => {
    e.preventDefault();
    console.log('Consulting by Code:', codigoData);
    // Add your API call or consultation logic here
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-8">
      <h1 className="text-4xl text-center mb-8">
        <span className="text-gray-600">Consultar</span>
        <span className="text-red-500 ml-2">Certificados</span>
      </h1>

      {/* DNI Section */}
      <div className="space-y-4">
        <h2 className="text-2xl text-center">
          <span className="text-gray-600">Por</span>
          <span className="text-red-500 ml-2">DNI</span>
        </h2>

        <form onSubmit={handleDniSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2">DNI</label>
              <input
                type="text"
                value={dniData.dni}
                onChange={(e) => setDniData({...dniData, dni: e.target.value})}
                className="w-full p-2 rounded bg-gray-100"
                placeholder="12345678"
              />
            </div>
            
            <div>
              <label className="block text-gray-600 mb-2">Apellido Paterno</label>
              <input
                type="text"
                value={dniData.apellidoPaterno}
                onChange={(e) => setDniData({...dniData, apellidoPaterno: e.target.value})}
                className="w-full p-2 rounded bg-gray-100"
                placeholder="apellido paterno"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition-colors"
          >
            Consultar
          </button>
        </form>
      </div>

      {/* Codigo Section */}
      <div className="space-y-4">
        <h2 className="text-2xl text-center">
          <span className="text-gray-600">Por</span>
          <span className="text-red-500 ml-2">Codigo</span>
        </h2>

        <form onSubmit={handleCodigoSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Codigo Certificado</label>
            <input
              type="text"
              value={codigoData.codigo}
              onChange={(e) => setCodigoData({...codigoData, codigo: e.target.value})}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="12345678"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 transition-colors"
          >
            Consultar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CertificateConsultation;