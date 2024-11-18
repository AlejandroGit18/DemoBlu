import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 10_EN.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Eventos.css';
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
            <div className="main-container5">
                {/* Imagen superior izquierda */}
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left5" />

                <p className="Titulo2">eventos</p>

                {/* Contenedor de video */}
                <div className="video-wrapper5">
                    <video
                        ref={videoRef}
                        src={videoSource}
                        autoPlay
                        className="video-player5"
                    />
                </div>

                {/* Botón inferior izquierdo debajo del contenedor del video */}
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button5"
                />

                {/* Botón inferior izquierdo para regresar */}
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/Main')}
                    className="bottom-left-button25"
                />

                <img src={VideoZona} alt="VideoZona" className="videoZonaHORARIO" />
            </div>
        </>
    );
}

export default MainMenu;
