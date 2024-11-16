import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 2_ESP.mp4';
import Boton1 from './Menu.png';
import Boton2 from './Horarios.png';
import Boton3 from './Especiales.png';
import Boton4 from './Eventos.png';
import Boton5 from './Contacto_1.png';
import Boton6 from './Reservaciones.png';
import Boton7 from './Opinion.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './movilQr.png';
import ImageTopRight2 from './QR1.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import './MainMenu.css';
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
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
        <div className="main-container1">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left1" />

            {/* Imágenes superior derecha */}
            <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right11" />
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right21" />

            {/* Contenedor de video */}
            <div className="video-wrapper1">
                <video
                    ref={videoRef}
                    src={videoSource}
                    autoPlay
                    className="video-player1"
                />
            </div>

            {/* Botones a la derecha del contenedor del video */}
            <div className="button-container1">
                <img src={Boton1} alt="Button 1" onClick={() => handleNavigation('/menu')} className="button-image1" />
                <img src={Boton2} alt="Button 2" onClick={() => handleNavigation('/Horarios')} className="button-image1" />
                <img src={Boton3} alt="Button 3" onClick={() => handleNavigation('/especiales')} className="button-image1" />
                <img src={Boton4} alt="Button 4" onClick={() => handleNavigation('/eventos')} className="button-image1" />
                <img src={Boton5} alt="Button 5" onClick={() => handleNavigation('/Contacto')} className="button-image1" />
                <img src={Boton6} alt="Button 6" onClick={() => handleNavigation('/Reservacion')} className="button-image1" />
                <img src={Boton7} alt="Button 7" onClick={() => handleNavigation('/Opinion')} className="button-image1" />
            </div>

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonReproducir}
                alt="Bottom Left Button"
                onClick={repeatVideo}
                className="bottom-left-button1"
            />


            {/* Imagen en la parte inferior derecha */}
            <img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left1" />
            <img src={VideoZona} alt="VideoZona" className="videoZona" />
        </div>
        </>
    );
}

export default MainMenu;
