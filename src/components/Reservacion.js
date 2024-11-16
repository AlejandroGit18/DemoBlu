import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 8_ESP.mp4';
import Boton1 from './Reserva Ahora.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageBottomLeft from './Semicirculo.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Reservacion.css';

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
    
    const openInNewTab = (url) => {
        // Abre la URL en una nueva pestaña
        const newTab = window.open(url, '_blank');

        // Redirige la pestaña raíz a /Main después de abrir la nueva pestaña
        navigate('/Main');

        // Cierra la nueva pestaña automáticamente después de 20 minutos
        if (window.innerWidth > 1024){
            if (newTab) {
                setTimeout(() => {
                    newTab.close();
                //}, 20 * 60 * 1000); // 20 minutos en milisegundos
            }, 20 * 1000); // 20 segundos en milisegundos
            }
        }
    };

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
        <div className="main-container7">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left7" />

            {/* Imágenes superior derecha */}
            {/*<img src={ImageTopRight1} alt="Top Right 1" className="image-top-right12" />
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right22" />*/}

            <p class="Titulo7">Reservaciones</p>

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
                    onClick={() => openInNewTab('https://www.opentable.com/r/blu-ciudad-de-guatemala?restref=1388299&utm_source=product&utm_medium=QR_code&utm_campaign=restaurant_profile_page&lang=es-es')} 
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
        </>
    );
}

export default MainMenu;
