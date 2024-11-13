import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import SemiCirculoSuperior from './Semicirculo con Logo.png';
import Boton from './Interactua Conmigo.png';
import TextoSuperior from './movilQr.png';
import qrCode from './QR1.png';
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
            navigate('/Main');
        }, 1500);
    };

    return (
        <div className="main-container">
            {/* Imagen en la parte superior izquierda */}
            <img src={SemiCirculoSuperior} alt="QR Code" className="qr-top-left" />

            {/* Imágenes en la parte superior derecha */}
            <div className="qr-top-right">
                <img src={TextoSuperior} alt="QR Code" className="texto-qr-code" />
                <img src={qrCode} alt="QR Code" className="qr-code" />
            </div>

            {/* Contenedor del video */}
            <div className="video-container">
                <video
                    ref={videoRef}              
                    className="video-player11"
                    autoPlay
                    src={videoSource}
                >
                </video>
            </div>

            {/* Imagen con acción de navegación como botón debajo del video */}
            <div className="button-container">
                <img
                    src={Boton}
                    alt="Interact Button"
                    className="interact-button"
                    onClick={handleInteractionClick}
                />
            </div>

            <div class="Div_VideoZona">
                    <p class="Powered">POWERED BY</p>
                    <img src={VideoZona} alt="VideoZOna" className="videoZona" />
            </div>

            {/* Imagen en la parte inferior derecha 
            <img src={qrCode} alt="QR Code" className="qr-bottom-right" />
            */}
        </div>
    );
}

export default Main;
