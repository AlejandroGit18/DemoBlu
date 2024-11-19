import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 4_EN.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './Download the driinks menu-min.png';
import ImageTopRight2 from './Menu-Blu.png';
import BotonReproducir from './Play Again-min.png';
import BotonRegresar from './Return -min.png';
import './Bebida.css';
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
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const downloadPdf = () => {
        if (window.innerWidth <= 480 || (window.innerWidth > 480 && window.innerWidth <= 1024)) {
            const link = document.createElement('a');
            link.href = PdfFile;
            link.download = 'Bebidas-Blu.pdf';
            link.click();
        }
    };

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(inactivityTimeout.current);
    
        if (window.innerWidth > 1024) { // Solo dispositivos con ancho mayor a 1024px
            inactivityTimeout.current = setTimeout(() => {
                navigate('/InteractuaEN');
            }, 2 * 60 * 1000); // 2 minutos en milisegundos
        }
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
            <div className="main-container3BEBIDAS">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left3BEBIDAS" />
                <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13BEBIDAS" onClick={downloadPdf} />
                <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right23BEBIDAS" />
                <p className="Titulo45BEBIDAS">drinks</p>
                <div className="video-wrapper3BEBIDAS">
                    <video ref={videoRef} src={videoSource} playsInline autoPlay className="video-player3BEBIDAS" />
                </div>
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button3BEBIDAS"
                />
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/MenuEN')}
                    className="bottom-left-button23BEBIDAS"
                />
                <img src={VideoZona} alt="VideoZona" className="videoZonaBEBIDA" />
            </div>
        </>
    );
}

export default MainMenu;
