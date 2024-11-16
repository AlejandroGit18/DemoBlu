import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './VIDEO 4_ESP.mp4';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageTopRight1 from './DescargaBebida.png';
import ImageTopRight2 from './Menu-Blu.png';
import BotonReproducir from './Reproduci de nueva.png';
import BotonRegresar from './Regresar.png';
import './Bebida.css';
import PdfFile from './PRUEBA_MENU.pdf';

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
            const link = document.createElement('a');
            link.href = PdfFile;
            link.download = 'Bebidas-Blu.pdf';
            link.click();
        }
    };

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
            <div className="main-container3BEBIDAS">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left3BEBIDAS" />
                <img src={ImageTopRight1} alt="Top Right 1" className="image-top-right13BEBIDAS" onClick={downloadPdf} />
                <img src={ImageTopRight2} alt="Top Right 2" className="image-top-right23BEBIDAS" />
                <p className="Titulo45BEBIDAS">Bebidas</p>
                <div className="video-wrapper3BEBIDAS">
                    <video ref={videoRef} src={videoSource} autoPlay className="video-player3BEBIDAS" />
                </div>
                <img
                    src={BotonReproducir}
                    alt="Bottom Left Button"
                    onClick={repeatVideo}
                    className="bottom-left-button3BEBIDAS"
                />
                <img
                    src={BotonRegresar}
                    alt="Bottom Left Button"
                    onClick={() => handleNavigation('/Menu')}
                    className="bottom-left-button23BEBIDAS"
                />
            </div>
        </>
    );
}

export default MainMenu;
