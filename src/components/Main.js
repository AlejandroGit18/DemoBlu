import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import SemiCirculoSuperior from './Semicirculo con Logo.png';
import Boton from './Interactua Conmigo.png';
import TextoSuperior from './movilQr.png';
import qrCode from './QR1.png';
import videoSource from './VIDEO 1_ESP.mp4';
import VideoZona from './POWERED.png';

function Main() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const inactivityTimeout = useRef(null);

    // Configuración de detección de inactividad
    const resetInactivityTimeout = () => {
        clearTimeout(inactivityTimeout.current);
        inactivityTimeout.current = setTimeout(() => {
            navigate('/');
        }, 2 * 60 * 1000); // 2 minutos en milisegundos
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        // IntersectionObserver para manejo de reproducción automática del video
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch(error => {
                            console.warn("La reproducción automática fue bloqueada:", error);
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        const resetTimeout = () => {
            videoElement.currentTime = 0;
            videoElement.play().catch(error => {
                console.error("Error al intentar reproducir el video automáticamente:", error);
            });
        };

        videoElement.addEventListener('ended', resetTimeout);

        return () => {
            if (videoElement) observer.unobserve(videoElement);
            videoElement.removeEventListener('ended', resetTimeout);
        };
    }, []);

    useEffect(() => {
        // Inicializar el tiempo de inactividad al montar el componente
        resetInactivityTimeout();

        // Event listeners para detectar actividad del usuario
        const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event =>
            window.addEventListener(event, resetInactivityTimeout)
        );

        return () => {
            // Limpiar eventos y timeout al desmontar el componente
            clearTimeout(inactivityTimeout.current);
            events.forEach(event =>
                window.removeEventListener(event, resetInactivityTimeout)
            );
        };
    }, []);

    const handleInteractionClick = () => {
        setTimeout(() => {
            navigate('/Main');
        }, 1500);
    };

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
            <div className="main-containerINTERACTUA">
                {/* Imagen en la parte superior izquierda */}
                <img
                    src={SemiCirculoSuperior}
                    alt="Logo"
                    className="qr-top-leftINTERACTUA"
                />

                {/* Imágenes en la parte superior derecha */}
                <div className="qr-top-rightINTERACTUA">
                    <img
                        src={TextoSuperior}
                        alt="Texto QR Code"
                        className="texto-qr-codeINTERACTUA"
                    />
                    <img
                        src={qrCode}
                        alt="QR Code"
                        className="qr-codeINTERACTUA"
                    />
                </div>

                {/* Contenedor del video */}
                <div className="video-containerINTERACTUA">
                    <video
                        autoPlay
                        ref={videoRef}
                        className="video-player11INTERACTUA"
                        src={videoSource}
                    />
                </div>

                {/* Imagen con acción de navegación como botón debajo del video */}
                <div className="button-containerINTERACTUA">
                    <img
                        src={Boton}
                        alt="Interact Button"
                        className="button-imageINTERACTUA"
                        onClick={handleInteractionClick}
                    />
                </div>

                {/* Imagen de VideoZona */}
                <img
                    src={VideoZona}
                    alt="VideoZona"
                    className="videoZonaINTERACTUA"
                />
            </div>
        </>
    );
}

export default Main;
