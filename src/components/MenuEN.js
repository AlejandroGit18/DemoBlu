import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 3_EN.mp4';
import Boton1 from './Bebidas.png';
import Boton2 from './Comida.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Menu.css';
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

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(inactivityTimeout.current);
        inactivityTimeout.current = setTimeout(() => {
            navigate('/InteractuaEN');
        }, 2 * 60 * 1000);
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
            <div className="main-containerMENU">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left2MENU" />
                <p className="Titulo44MENU">Menú</p>
                <div className="video-wrapper2MENU">
                    <video
                        ref={videoRef}
                        src={videoSource}
                        autoPlay
                        className="video-player2MENU"
                    />
                </div>
                <div className="button-container2MENU">
                    <img src={Boton1} alt="Button 1" onClick={() => handleNavigation('/bebida')} className="button-image2MENU" />
                    <img src={Boton2} alt="Button 2" onClick={() => handleNavigation('/comida')} className="button-image2MENU" />
                </div>
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button2MENU"
                />
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/Main')}
                    className="bottom-left-button22MENU"
                />
                <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left2MENU" />
                <img src={VideoZona} alt="VideoZona" className="videoZonaMENU" />
            </div>
        </>
    );
}

export default MainMenu;
