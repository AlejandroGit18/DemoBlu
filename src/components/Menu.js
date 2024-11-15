import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 3_ESP.mp4';
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

    const handleNavigation = (path) => {
        navigate(path);
    };

    const repeatVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reinicia el video al inicio
            videoRef.current.play(); // Reproduce el video
        }
    };
    
    return (
        <div className="main-containerMENU">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left2MENU" />

            {/* Imágenes superior derecha */}
            {/*<img src={ImageTopRight1} alt="Top Right 1" className="image-top-right12" />
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right22" />*/}

            <p class="Titulo44MENU">Menú</p>

            {/* Contenedor de video */}
            <div className="video-wrapper2MENU">
                <video
                    ref={videoRef}
                    src={videoSource}
                    
                    autoPlay
                    className="video-player2MENU"
                />
            </div>

            {/* Botones a la derecha del contenedor del video */}
            <div className="button-container2MENU">
                <img src={Boton1} alt="Button 1" onClick={() => handleNavigation('/bebida')} className="button-image2MENU" />
                <img src={Boton2} alt="Button 2" onClick={() => handleNavigation('/comida')} className="button-image2MENU" />
             </div>

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonReproducir}
                alt="Bottom Left Button"
                onClick={repeatVideo}
                className="bottom-left-button2MENU"
            />

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Main')}
                className="bottom-left-button22MENU"
            />


            {/* Imagen en la parte inferior derecha */}
            <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left2MENU" />
            <img src={VideoZona} alt="VideoZona" className="videoZonaMENU" />
            </div>
    );
}

export default MainMenu;
