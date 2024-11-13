import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';
import { FaPoll, FaArrowLeft } from 'react-icons/fa';

function Menu() {
    const navigate = useNavigate();
    const defaultVideo = "./sources/videos/VideoEjemplo.mp4";
    const defaultImages = [];
    const [rutaVideo, setRutaVideo] = useState(defaultVideo);
    const [images, setImages] = useState(defaultImages);
    const [selectedButton, setSelectedButton] = useState(''); // Estado para el botón seleccionado
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const resetTimeout = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(error => console.error("Error:", error));
            }
            timeoutRef.current = setTimeout(resetTimeout, 100000);
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.play().catch(error => console.warn("La reproducción automática fue bloqueada:", error));
            resetTimeout();

            videoElement.addEventListener('ended', () => {
                if (images.length > 0) {
                    resetTimeout();
                } else {
                    videoElement.currentTime = 0; // Reiniciar el video si no hay imágenes
                    videoElement.play().catch(error => console.error("Error al reproducir nuevamente el video:", error));
                }
            });
        }

        const events = ['click', 'mousemove', 'keydown', 'touchstart'];
        const resetOnUserAction = () => resetTimeout();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            events.forEach(event => window.removeEventListener(event, resetOnUserAction));
            if (videoElement) videoElement.removeEventListener('ended', resetTimeout);
        };
    }, [images]);

    const cambiarContenido = (nuevoVideo, nuevasImagenes, boton) => {
        setRutaVideo(nuevoVideo);
        setImages(nuevasImagenes);
        setSelectedButton(boton); // Actualizar el botón seleccionado
    };

    return (
        <div>
            <div className="circle circle-blue"></div>
            <div className="circle circle-orange"></div>
            <div className="circle circle-celeste"></div>
            <div className="circle circle-darkblue"></div>
            <div className="circle circle-lightorange"></div>
            <div className="circle circle-lightblue"></div>

            <div className="circle circle-orange1"></div>
            <div className="circle circle-blue1"></div>
            <div className="circle circle-darkblue1"></div>
            <div className="circle circle-lightblue1"></div>

            <div
                id="div-menu"
                className="container d-flex justify-content-center align-items-center"
                style={{ height: '80vh', textAlign: 'center', marginLeft: 5, padding: '5px' }}
            >
                <video 
                    id="video-menu" 
                    className="w-100 h-100" 
                    controls ref={videoRef} 
                    autoPlay key={rutaVideo}
                    style={{ objectFit: 'cover', borderRadius: '10px' }} 
                >
                    <source src={rutaVideo} type="video/mp4" />
                </video>
                <div className="flex-wrap mt-3" style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
                    <button 
                        id="btn-bebidas" 
                        className={`boton ${selectedButton === 'bebidas' ? 'btn-selected' : ''}`}
                        onClick={() => {
                            const nuevaVentana = '/Encuesta'; // Definir ruta para la encuesta
                            window.open(nuevaVentana, '_blank', 'width=1200,height=1000');
                        }}
                    >
                        <FaPoll style={{ marginRight: '8px' }} />
                        Responder Encuesta
                    </button>
                    <button 
                        id="btn-regresar-menu" 
                        className={`boton ${selectedButton === 'regresar' ? 'btn-selected' : ''}`}
                        onClick={() => navigate('/Main')}
                    >
                        <FaArrowLeft style={{ marginRight: '8px' }} /> Regresar al menú de opciones
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
