import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext, useMemo } from 'react';
import { AppContext } from './contexto';

function Detalle() {
  const { depto, municipio } = useParams();
  const [municipioData, setMunicipioData] = useState(null);
  const [error, setError] = useState(null);

  const { favoritos, setFavoritos } = useContext(AppContext);

  // Memorizar para evitar recalcular en cada render
  const esFavorito = useMemo(() =>
    favoritos.some(p => p.municipio === municipio && p.depto === depto),
    [favoritos, municipio, depto]
  );

  useEffect(() => {
    if (!depto || !municipio) return;

    const url = `https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/225cef5e16b3997317e205a08a64985c9903f3c7/municipios-${encodeURIComponent(depto)}.json`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();

        const encontrado = data.mun.find((item) => item.id === municipio);

        if (!encontrado) {
          setError(`Municipio con id "${municipio}" no encontrado.`);
          setMunicipioData(null);
        } else {
          setMunicipioData(encontrado);
          setError(null);
        }
      } catch (error) {
        setError("Error al cargar el municipio.");
        console.error(error);
      }
    };

    fetchData();
  }, [depto, municipio]);

  const toggleFavorito = (nombreMun) => {
    setFavoritos((prevFavoritos) => {
      const yaEsFavorito = prevFavoritos.some(p => p.municipio === municipio && p.depto === depto);
      if (yaEsFavorito) {
        return prevFavoritos.filter(p => !(p.municipio === municipio && p.depto === depto));
      } else {
        return [...prevFavoritos, { municipio, depto, nombreMun }];
      }
    });
  };

  if (error) return <p>{error}</p>;
  if (!municipioData) return <p>Cargando municipio...</p>;

  return (
    <div>
      <h1>{municipioData.nm}</h1>
      <p>ID: {municipioData.id}</p>
      <p>TVN: {municipioData.tvn}</p>
      <p>PVN: {municipioData.pvn}</p>
      <p>VNM: {municipioData.vnm}</p>
      <p>{municipioData.pcb}</p>

      <button 
        onClick={() => toggleFavorito(municipioData.nm)} 
        aria-label={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {esFavorito ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default Detalle;
