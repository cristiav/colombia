import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./componentes/home";
import Favoritos from "./componentes/favoritos";
import Mapa from "./componentes/mapa";
import Informativa from "./componentes/informativa";
import Detalle from "./componentes/detalle";
import { AppProvider } from './componentes/contexto';

function App() {

  return (
    <>
    <AppProvider>
      <Router>

          <nav className="c-menu">
            <Link to="/">Home</Link>
            <Link to="/informativa">Informativa</Link>
            <Link to="/mapa">Mapa</Link>
            <Link to="/favoritos">Favoritos</Link>
          </nav>


        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/informativa" element={<Informativa /> } />
            <Route path="/mapa" element={<Mapa /> } />
            <Route path="/favoritos" element={<Favoritos /> } />
            <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
        </Routes>
      </Router>
    </AppProvider>
    </>
  )
}

export default App
