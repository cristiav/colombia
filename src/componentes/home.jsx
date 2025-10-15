import { useContext, useState } from "react";
import { AppContext } from "./contexto";

function Home() {
  const { departamentos, capitales } = useContext(AppContext);
  const [modo, setModo] = useState("departamentos");
  const [busqueda, setBusqueda] = useState("");

  const getListaMostrar = () => {
    if (modo === "departamentos" && departamentos) {
      return departamentos.data?.dpt ?? [];
    }
    if (modo === "Capitales" && capitales) {
      return capitales.data?.cpt ?? [];
    }
    return [];
  };

  const lista = getListaMostrar();

  let listaFiltrada;

  if (busqueda.length >= 2) {
    listaFiltrada = lista.filter((unavuelta) =>
      unavuelta.nm.toLowerCase().includes(busqueda.toLowerCase())
    );
  } else {
    listaFiltrada = lista; // sin filtrar
  }

  return (
    <>
      <h3>{modo}</h3>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="filtro">
        <button onClick={() => setModo("departamentos")}>Deptos</button>
        <button onClick={() => setModo("Capitales")}>Capitales</button>
      </div>
      <ul className="lista">
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((unelementociclo) => (
            <li key={unelementociclo.id}>
              {unelementociclo.nm}
            </li>
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </ul>
    </>
  );
}

export default Home;
