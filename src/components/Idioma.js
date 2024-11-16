import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageSource from './ANAI.JPG'; // Reemplaza con la imagen que quieres usar
import Boton1 from './Español.png';
import Boton2 from './English.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import './Idioma.css';
import VideoZona from './POWERED.png';

function MainMenu() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="main-containerIDIOMA">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-leftIDIOMA" />

            {/* Imagen en lugar de video */}
            <div className="video-wrapperIDIOMA">
                <img
                    src={imageSource}
                    alt="Main Display"
                    className="video-playerIDIOMA"
                />
            </div>

            {/* Botones a la derecha del contenedor de la imagen */}
            <div className="button-containerIDIOMA">
                <img src={Boton1} alt="Button 1" onClick={() => handleNavigation('/Interactua')} className="button-imageIDIOMA" />
                <img src={Boton2} alt="Button 2" onClick={() => handleNavigation('/Horarios')} className="button-imageIDIOMA" />
            </div>

            <img src={VideoZona} alt="VideoZona" className="videoZonaIDIOMA" />
        </div>
    );
}

export default MainMenu;
