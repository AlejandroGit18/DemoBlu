import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Idioma.css';
import SemiCirculoSuperior from './Semicirculo con Logo.png';
import Boton1 from './Español.png';
import Boton2 from './English.png';
import videoSource from './VIDEO_IDIOMA.mp4';
import VideoZona from './VideoZona_Color2.png';

function Main() {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isIOS) {
            // Ajustes específicos para iOS
            videoElement.removeAttribute('autoplay'); // Evitar reproducción automática en iOS
            videoElement.setAttribute('controls', true); // Mostrar controles para el usuario
            videoElement.setAttribute('playsInline', true); // Permitir reproducción en línea en iOS
            videoElement.setAttribute('preload', 'metadata'); // Cargar solo metadatos al inicio
        } else {
            // Intentar la reproducción automática en otros dispositivos
            videoElement.play().catch(error => {
                console.warn("La reproducción automática fue bloqueada:", error);
            });
        }

        const resetTimeout = () => {
            videoElement.currentTime = 0;
            videoElement.play().catch(error => {
                console.error("Error al intentar reproducir el video automáticamente:", error);
            });
        };

        videoElement.addEventListener('ended', resetTimeout);

        return () => {
            videoElement.removeEventListener('ended', resetTimeout);
        };
    }, []);

    const handleInteractionClick = () => {
        setTimeout(() => {
            navigate('/Interactua');
        }, 1500);
    };

    return (
        <div className="main-containerI">
            {/* Imagen en la parte superior izquierda */}
            <img src={SemiCirculoSuperior} alt="QR Code" className="qr-top-leftI" />

            {/* Contenedor del video */}
            <div className="video-container1I">
                <video
                    ref={videoRef}
                    className="video-player111I"
                    muted
                    src={videoSource}
                    preload="metadata"
                    playsInline
                />
            </div>

            {/* Imágenes de botones para interacción */}
            <div className="button-container1I">
                <img
                    src={Boton1}
                    alt="Interact Button"
                    className="interact-button1I"
                    onClick={handleInteractionClick}
                />
                <img
                    src={Boton2}
                    alt="Interact Button"
                    className="interact-button2I"
                    onClick={handleInteractionClick}
                />
            </div>

            {/* Contenedor de VideoZona */}
            <div className="Div_VideoZona">
                <p className="Powered">POWERED BY</p>
                <img src={VideoZona} alt="VideoZona" className="videoZona" />
            </div>
        </div>
    );
}

export default Main;
