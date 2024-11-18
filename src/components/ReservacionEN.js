import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 6 _EN.mp4';
import Boton1 from './Reserva Ahora.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Reservacion.css';
import VideoZona from './POWERED.png';

function MainMenu() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const inactivityTimeout = useRef(null);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const repeatVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reinicia el video al inicio
            videoRef.current.play(); // Reproduce el video
        }
    };

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(inactivityTimeout.current);
        inactivityTimeout.current = setTimeout(() => {
            navigate('/InteractuaEN');
        }, 2 * 60 * 1000); // 2 minutos en milisegundos
    }, [navigate]);

    const openInNewTab = (url) => {
        const newTab = window.open(url, '_blank');

        navigate('/MainEN');

        if (window.innerWidth > 1024) {
            if (newTab) {
                setTimeout(() => {
                    newTab.close();
                }, 20 * 1000); // 20 segundos en milisegundos
            }
        }
    };

    useEffect(() => {
        resetInactivityTimeout();

        const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event =>
            window.addEventListener(event, resetInactivityTimeout)
        );

        return () => {
            clearTimeout(inactivityTimeout.current);
            events.forEach(event =>
                window.removeEventListener(event, resetInactivityTimeout)
            );
        };
    }, [resetInactivityTimeout]);

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
            <div className="main-container7">
                {/* Imagen superior izquierda */}
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left7" />

                <p className="Titulo7">Reservaciones</p>

                {/* Contenedor de video */}
                <div className="video-wrapper7">
                    <video
                        ref={videoRef}
                        src={videoSource}
                        autoPlay
                        className="video-player7"
                    />
                </div>

                {/* Botones a la derecha del contenedor del video */}
                <div className="button-container7">
                    <img 
                        src={Boton1} 
                        alt="Button 1" 
                        onClick={() => openInNewTab('https://www.opentable.com/r/blu-ciudad-de-guatemala?restref=1388299&utm_source=product&utm_medium=QR_code&utm_campaign=restaurant_profile_page&lang=es-es')} 
                        className="button-image7" 
                    />
                </div>

                {/* Botón inferior izquierdo debajo del contenedor del video */}
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button7"
                />

                {/* Botón inferior izquierdo para regresar */}
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/Main')}
                    className="bottom-left-button27"
                />

                {/* Imagen en la parte inferior derecha */}
                <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left7" />
                <img src={VideoZona} alt="VideoZona" className="videoZonaRESERVACION" />
            </div>
        </>
    );
}

export default MainMenu;
