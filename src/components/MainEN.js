import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import SemiCirculoSuperior from './Semicirculo con Logo.png';
import Boton from './Interact with me-min.png';
import TextoSuperior from './For the mobilie version scan the QR code-min.png';
import qrCode from './QR1.png'; //CAMBIO DE QR
import videoSource from './VIDEO 1_EN.mp4';
import VideoZona from './POWERED.png';

function Main() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const inactivityTimeout = useRef(null);

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(inactivityTimeout.current);
    
        if (window.innerWidth > 1024) { // Solo dispositivos con ancho mayor a 1024px
            inactivityTimeout.current = setTimeout(() => {
                navigate('/');
            }, 2 * 60 * 1000); // 2 minutos en milisegundos
        }
    }, [navigate]);
    

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

    const handleInteractionClick = () => {
        setTimeout(() => {
            navigate('/MainEN');
        }, 1500);
    };

    return (
        <>
            <div className="background-containerMAIN"></div>
            <div className="main-containerINTERACTUA">
                <img
                    src={SemiCirculoSuperior}
                    alt="Logo"
                    className="qr-top-leftINTERACTUA"
                />
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
                <div className="video-containerINTERACTUA">
                    <video
                        autoPlay
                        ref={videoRef}
                        className="video-player11INTERACTUA"
                        src={videoSource}
                        playsInline
                    />
                </div>
                <div className="button-containerINTERACTUA">
                    <img
                        src={Boton}
                        alt="Interact Button"
                        className="button-imageINTERACTUA"
                        onClick={handleInteractionClick}
                    />
                </div>
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
