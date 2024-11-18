import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 12_EN.mp4';
import Boton1 from './Realiza la encuesta.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Opinion.css';
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
            navigate('InteractuaEN');
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
            <div className="main-container7">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left7" />
                <p className="Titulo7">Opinión</p>
                <div className="video-wrapper7">
                    <video
                        ref={videoRef}
                        src={videoSource}
                        autoPlay
                        className="video-player7"
                    />
                </div>
                <div className="button-container7">
                    <img 
                        src={Boton1} 
                        alt="Button 1" 
                        onClick={() => navigate('/Encuesta')} 
                        className="button-image7" 
                    />
                </div>
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button7"
                />
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/Main')}
                    className="bottom-left-button27"
                />
                <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left7" />
                <img src={VideoZona} alt="VideoZona" className="videoZonaRESERVACION" />
            </div>
        </>
    );
}

export default MainMenu;
