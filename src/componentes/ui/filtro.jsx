function Filtro() {
      useEffect(() => {
      const obtenerDatos = async () => {
        if (tipoSeleccionado === 'Capitales') {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
          const json = await res.json();
          setData(json.results);
        } else {
          const res = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
          const json = await res.json();
          const listaFiltrada = json.pokemon.map(p => p.pokemon);
          setData(listaFiltrada);
        }
      };
  
      obtenerDatos();
    }, [tipoSeleccionado]);

  return (
    <>
      <div><span onClick={capitalesFiltro}>Capitales</span><span onClick={deptosFiltro}>Deptos</span></div>
    </>
  )
}

export default Filtro