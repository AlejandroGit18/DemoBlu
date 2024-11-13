import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Idioma from './components/Idioma';
import Main from './components/Main';
import MainMenu from './components/MainMenu';
import Menu from './components/Menu';
import Bebida from './components/Bebida';
import Comida from './components/Comida';
import Horarios from './components/Horarios';
import Eventos from './components/Eventos';
import Contacto from './components/Contacto';
import Reservacion from './components/Reservacion';
import Opinion from './components/Opinion';
import Encuesta from './components/Encuesta';
import Publicidad from './components/Especiales';
import Loader from './Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un retraso en la carga o espera de datos inicial
    const timer = setTimeout(() => setIsLoading(false), 2000); // Tiempo ajustable
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Idioma />} />
        <Route path="/Interactua" element={<Main />} />
        <Route path="/Main" element={<MainMenu />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Bebida" element={<Bebida />} />
        <Route path="/Comida" element={<Comida />} />
        <Route path="/Horarios" element={<Horarios />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Reservacion" element={<Reservacion />} />
        <Route path="/Encuesta" element={<Encuesta />} />
        <Route path="/Opinion" element={<Opinion />} />
        <Route path="/especiales" element={<Publicidad />} />
      </Routes>
    </Router>
  );
}

export default App;
