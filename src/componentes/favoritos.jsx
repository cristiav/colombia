import { useContext } from 'react';
import { AppContext } from './contexto';
import { useNavigate } from "react-router-dom";

function Favoritos() {
  const { favoritos } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      {favoritos.length === 0 ? (
        <p>No hay municipios favoritos aún.</p>
      ) : (
        <div className='c-lista'>
          {favoritos.map((municipio, index) => (
            <div
              className='c-lista-item'
              onClick={() => navigate(`/detalle/${municipio.depto}/${municipio.municipio}`)}
              key={index}
            >
              <p>{municipio.nombreMun}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Favoritos;
