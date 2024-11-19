import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Especiales.css';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonRegresar from './Return -min.png';
import carousel1 from './carousel1.png';
import carousel2 from './carousel2.png';
import VideoZona from './POWERED.png';

function MainMenu() {
    const navigate = useNavigate();

    // Arreglo de imágenes para el carrusel
    const [carouselImages] = useState([carousel1, carousel2]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    };

    const resetInactivityTimeout = useCallback(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            clearTimeout(window.inactivityTimeout);
            window.inactivityTimeout = setTimeout(() => {
                navigate('/InteractuaEN');
            }, 2 * 60 * 1000);
        }
    }, [navigate]);

    useEffect(() => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            resetInactivityTimeout();

            const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
            events.forEach(event =>
                window.addEventListener(event, resetInactivityTimeout)
            );

            return () => {
                clearTimeout(window.inactivityTimeout);
                events.forEach(event =>
                    window.removeEventListener(event, resetInactivityTimeout)
                );
            };
        }
    }, [resetInactivityTimeout]);

    return (
        <>
            <div className="background-containerMAIN"></div>
            <div className="main-container2">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left2" />
                <p className="Titulo445">Specials</p>

                {/* Carrusel de imágenes */}
                <div className="carousel-container">
                    {carouselImages.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentIndex ? 'active' : 'inactive'}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    <button onClick={prevImage} className="carousel-button prev-button">❮</button>
                    <button onClick={nextImage} className="carousel-button next-button">❯</button>
                </div>

                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/MainEN')}
                    className="bottom-left-button225"
                />
                <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left2" />
                <img src={VideoZona} alt="VideoZona" className="videoZonaESPECIALES" />
            </div>
        </>
    );
}

export default MainMenu;
