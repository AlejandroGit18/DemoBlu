import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Loader';

// Importación diferida de componentes para mejorar la carga
const Idioma = React.lazy(() => import('./components/Idioma'));
const Main = React.lazy(() => import('./components/Main'));
const MainMenu = React.lazy(() => import('./components/MainMenu'));
const Menu = React.lazy(() => import('./components/Menu'));
const Bebida = React.lazy(() => import('./components/Bebida'));
const Comida = React.lazy(() => import('./components/Comida'));
const Horarios = React.lazy(() => import('./components/Horarios'));
const Eventos = React.lazy(() => import('./components/Eventos'));
const Contacto = React.lazy(() => import('./components/Contacto'));
const Reservacion = React.lazy(() => import('./components/Reservacion'));
const Opinion = React.lazy(() => import('./components/Opinion'));
const Encuesta = React.lazy(() => import('./components/Encuesta'));
const Publicidad = React.lazy(() => import('./components/Especiales'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar iOS y ajustar el temporizador para mejorar el rendimiento en dispositivos iOS
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const timer = setTimeout(() => setIsLoading(false), isiOS ? 500 : 2000); // Reducir el tiempo en iOS
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
