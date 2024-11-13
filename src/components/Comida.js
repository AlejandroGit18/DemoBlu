import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO_COMIDAS.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './DescargaComida.png';
import ImageTopRight2 from './Menu-Blu.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Comida.css';
import PdfFile from './PRUEBA_MENU.pdf'; // Asegúrate de tener el archivo PDF en la misma carpeta o modifica la ruta


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
    
    const downloadPdf = () => {
        if (window.innerWidth <= 480 || (window.innerWidth > 480 && window.innerWidth <= 1024)) {
            // Crea un enlace para descargar el PDF
            const link = document.createElement('a');
            link.href = PdfFile;
            link.download = 'Comida-Blu.pdf';
            link.click();
        }
    };

    return (
        <div className="main-container3">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left3" />

            {/* Imágenes superior derecha */}
            <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13" onClick={downloadPdf}/>
            <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right23"    />

            <p class="Titulo46">Comida</p>

            {/* Contenedor de video */}
            <div className="video-wrapper3">
                <video
                    ref={videoRef}
                    src={videoSource}
                    
                    autoPlay
                    className="video-player3"
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
                className="bottom-left-button3"
            />

            {/* Botón inferior izquierdo debajo del contenedor del video */}
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Menu')}
                className="bottom-left-button23"
            />


            {/* Imagen en la parte inferior derecha */}
            {/*<img src={ImageBottomLeft} alt="Bottom Left" className="image-bottom-left3" />*/}
            </div>
    );
}

export default MainMenu;
