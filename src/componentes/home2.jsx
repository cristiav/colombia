import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [modo, setModo] = useState("departamentos");
  const [busqueda, setBusqueda] = useState("");
  const [departamentos, setDepartamentos] = useState(null);
  const [capitales, setCapitales] = useState(null);
  
const navigate = useNavigate();

  useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";
    const urlCpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/capitalesglobal.json";

    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(urlDpt, setDepartamentos);
    fetchJson(urlCpt, setCapitales);
  }, []);


  //filtro
    const getListaMostrar = () => {
    if (modo === "departamentos" && departamentos) {
      return departamentos.data?.dpt ?? [];
    }
    if (modo === "capitales" && capitales) {
      return capitales.data?.cpt ?? [];
    }
    return [];
  };

  const lista = getListaMostrar();
  {console.log(lista)}


  let listaFiltrada;

  if (busqueda.length >= 2) {
    listaFiltrada = lista.filter((item) =>
      item.nm.toLowerCase().includes(busqueda.toLowerCase())
    );
  } else {
    listaFiltrada = lista; // sin filtrar
  }


  return (
    <>{modo}

      <div className="filtro">
        <button onClick={() => setModo("departamentos")}>
          Mostrar Departamentos
        </button>
        <button onClick={() => setModo("capitales")}>Mostrar Capitales</button>
      </div>

      <div>
        <input
        className="buscador"
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="elementos">
          {listaFiltrada.length > 0 ? (
            listaFiltrada.map((item) => (
              <p onClick={() => navigate(`/detalle/${item.id.slice(0, -1)}/${item.id})`)} key={item.id}>{item.nm}</p>
            ))
          ) : (
            <p>Cargando datos...</p>
          )}
      </div>


    </>
  )
}

export default Home