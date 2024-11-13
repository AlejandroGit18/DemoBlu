import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO_BEBIDAS.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './DescargaBebida.png';
import ImageTopRight2 from './Menu-Blu.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Bebida.css';
import PdfFile from './PRUEBA_MENU.pdf'; // Asegúrate de tener el archivo PDF en la misma carpeta o modifica la ruta

function MainMenu() {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const repeatVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const downloadPdf = () => {
        if (window.innerWidth <= 480 || (window.innerWidth > 480 && window.innerWidth <= 1024)) {
            // Crea un enlace para descargar el PDF
            const link = document.createElement('a');
            link.href = PdfFile;
            link.download = 'Bebidas-Blu.pdf';
            link.click();
        }
    };

    return (
        <div className="main-container3">
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left3" />
            <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13" onClick={downloadPdf}/>
            <img 
                src={ImageTopRight2} 
                alt="Top Right 2" 
                className="image-top-right23" 
               
            />
            <p className="Titulo45">Bebidas</p>
            <div className="video-wrapper3">
                <video ref={videoRef} src={videoSource} autoPlay className="video-player3" />
            </div>
            <img
                src={BotonReproducir}
                alt="Bottom Left Button"
                onClick={repeatVideo}
                className="bottom-left-button3"
            />
            <img
                src={BotonRegresar}
                alt="Bottom Left Button"
                onClick={() => handleNavigation('/Menu')}
                className="bottom-left-button23"
            />
        </div>
    );
}

export default MainMenu;
