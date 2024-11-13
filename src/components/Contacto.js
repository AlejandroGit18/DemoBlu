import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO_CONTACTOS.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Contacto.css';

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
        <div className="main-container6">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left6" />

            {/* Imágenes superior derecha */}
            {/*<img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13" />
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right23" />*/}

            <p class="Titulo3">Contacto</p>

            {/* Contenedor de video */}
            <div className="video-wrapper6">
                <video
                    ref={videoRef}
                    src={videoSource}
                    
                    autoPlay
                    className="video-player6"
                />
            </div>

            {/* Botones a la derecha del contenedor del video */}
            {/*<div className="button-container2">
                <img src={Boton1} alt="Button 1" onClick={() => handleNavigation('/Bebida')} className="button-image2" />
                <img src={Boton2} alt="Button 2" onClick={() => handleNavigation('/comida')} className="button-image2" />
             </div>*/}

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonReproducir}
                alt="Bottom Left Button"
                onClick={repeatVideo}
                className="bottom-left-button6"
            />

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Main')}
                className="bottom-left-button26"
            />


            {/* Imagen en la parte inferior derecha */}
            {/*<img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left3" />*/}
            </div>
    );
}

export default MainMenu;
