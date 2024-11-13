import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO_OPINION.mp4';
import Boton1 from './Realiza la encuesta.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Opinion.css';

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
    
    /*const openInNewTab = (url) => {
        window.open(url, '_blank'); // Abre la URL en una nueva pestaña
    };*/

    return (
        <div className="main-container7">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left7" />

            {/* Imágenes superior derecha */}
            {/*<img src={ImageTopRight1} alt="Top Right 1" className="image-top-right12" />
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right22" />*/}

            <p class="Titulo7">opinión</p>

            {/* Contenedor de video */}
            <div className="video-wrapper7">
                <video
                    ref={videoRef}
                    src={videoSource}
                    
                    autoPlay
                    className="video-player7"
                />
            </div>

            {/* Botones a la derecha del contenedor del video */}
            {/* Botones a la derecha del contenedor del video */}
            <div className="button-container7">
                <img 
                    src={Boton1} 
                    alt="Button 1" 
                    onClick={() => navigate('/Encuesta')} 
                    className="button-image7" 
                />
            </div>

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonReproducir}
                alt="Bottom Left Button"
                onClick={repeatVideo}
                className="bottom-left-button7"
            />

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Main')}
                className="bottom-left-button27"
            />


            {/* Imagen en la parte inferior derecha */}
            <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left7" />
            </div>
    );
}

export default MainMenu;
