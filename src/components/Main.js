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

    const handleInteractionClick = () => {
        setTimeout(() => {
            navigate('/Main');
        }, 1500);
    };

    return (
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
    );
}

export default Main;
