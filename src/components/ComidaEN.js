import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 5_EN.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './Download de food menu-min.png';
import ImageTopRight2 from './Menu-Blu.png';
import BotonReproducir from './Play Again-min.png';
import BotonRegresar from './Return -min.png';
import './Comida.css';
import PdfFile from './PRUEBA_MENU.pdf';
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

    const downloadPdf = () => {
        if (window.innerWidth <= 480 || (window.innerWidth > 480 && window.innerWidth <= 1024)) {
            const link = document.createElement('a');
            link.href = PdfFile;
            link.download = 'Comida-Blu.pdf';
            link.click();
        }
    };

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(inactivityTimeout.current);
        inactivityTimeout.current = setTimeout(() => {
            navigate('InteractuaEN');
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
            <div className="background-containerMAIN"></div>
            <div className="main-container3">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left3" />
                <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13" onClick={downloadPdf} />
                <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right23" />
                <p className="Titulo46">Comida</p>
                <div className="video-wrapper3">
                    <video
                        ref={videoRef}
                        src={videoSource}
                        autoPlay
                        className="video-player3"
                    />
                </div>
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button3"
                />
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/MenuEN')}
                    className="bottom-left-button23"
                />
                <img src={VideoZona} alt="VideoZona" className="videoZonaBEBIDA" />
            </div>
        </>
    );
}

export default MainMenu;
