import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Idioma.css';
import SemiCirculoSuperior from './Semicirculo con Logo.png';
import Boton1 from './Español.png';
import Boton2 from './English.png';
import videoSource from './VIDEO_IDIOMA.mp4';
import VideoZona from './VideoZona_white.png'

function Main() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [IsFading,setIsFading] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.play().catch(error => {
            console.warn("La reproducción automática fue bloqueada:", error);
        });

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
        setIsFading(true);
        setTimeout(() => {
            navigate('/Interactua');
        }, 1500);
    };

    return (
        <div className="main-containerI">
            {/* Imagen en la parte superior izquierda */}
            <img src={SemiCirculoSuperior} alt="QR Code" className="qr-top-leftI" />

            {/* Imágenes en la parte superior derecha */}
            {/*<div className="qr-top-right">
                <img src={TextoSuperior} alt="QR Code" className="texto-qr-code" />
                <img src={qrCode} alt="QR Code" className="qr-code" />
            </div>*/}

            {/* Contenedor del video */}
            <div className="video-container1I">
                <video
                    ref={videoRef}              
                    className="video-player111I"
                    muted 
                    src={videoSource}              
                >
                </video>
            </div>

            {/* Imagen con acción de navegación como botón debajo del video */}
            {/**/}
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

                <div class="Div_VideoZona">
                    <p class="Powered">POWERED BY</p>
                    <img src={VideoZona} alt="VideoZOna" className="videoZona" />
                </div>
            {/**/}

            {/* Imagen en la parte inferior derecha 
            <img src={qrCode} alt="QR Code" className="qr-bottom-right" />
            */}
        </div>
    );
}

export default Main;
