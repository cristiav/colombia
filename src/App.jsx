import React, { useState } from 'react';

function App() {
  const data = {
    departamentos: [
      {
        nombre: 'Antioquia',
        municipios: ['Medellín', 'Envigado', 'Itagüí', 'Bello']
      },
      {
        nombre: 'Cundinamarca',
        municipios: ['Bogotá', 'Soacha', 'Zipaquirá']
      },
      {
        nombre: 'Valle del Cauca',
        municipios: ['Cali', 'Palmira', 'Buenaventura']
      },
      {
        nombre: 'Santander',
        municipios: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta']
      },
      {
        nombre: 'Atlántico',
        municipios: ['Barranquilla', 'Soledad', 'Malambo']
      }
    ]
  };

  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

  const handleSeleccion = (departamento) => {
    setDepartamentoSeleccionado(departamento);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🇨🇴 Información de Colombia</h1>

      <h2>Departamentos</h2>
      <ul>
        {data.departamentos.map((dep, index) => (
          <li
            key={index}
            onClick={() => handleSeleccion(dep)}
            style={{
              cursor: 'pointer',
              margin: '5px 0',
              color: departamentoSeleccionado?.nombre === dep.nombre ? 'blue' : 'black',
              fontWeight: departamentoSeleccionado?.nombre === dep.nombre ? 'bold' : 'normal'
            }}
          >
            {dep.nombre}
          </li>
        ))}
      </ul>

      <hr />

      {departamentoSeleccionado ? (
        <div>
          <h3>Municipios de {departamentoSeleccionado.nombre}</h3>
          <ul>
            {departamentoSeleccionado.municipios.map((muni, index) => (
              <li key={index}>{muni}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Selecciona un departamento para ver sus municipios.</p>
      )}
    </div>
  );
}

export default App;
