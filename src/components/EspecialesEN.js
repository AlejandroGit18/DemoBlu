import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Especiales.css';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonRegresar from './Regresar.png';
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

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
        <div className="main-container2">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left2" />
            
            <p className="Titulo445">Especiales</p>

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

            {/* Botón para regresar al menú principal */}
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Main')}
                className="bottom-left-button225"
            />

            {/* Imagen en la parte inferior derecha */}
            <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left2" />
            <img src={VideoZona} alt="VideoZona" className="videoZonaESPECIALES" />
            </div>
        </>
    );
}

export default MainMenu;
