import React, { useState, useEffect, useCallback } from 'react';
import ImageBottomLeft from './Semicirculo.png';
import ImageTopLeft from './Semicirculo con Logo.png';
import ImageAngry from './TRISTE2.png';
import ImageSad from './TRISTE1.png';
import ImageNeutral from './NEUTRO.png';
import ImageHappy from './FELIZ1.png';
import ImageVeryHappy from './FELIZ2.png';
import './Encuesta.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Encuesta() {
    const navigate = useNavigate();

    const [valores, setValores] = useState({
        pregunta1: 0,
        pregunta2: 0,
        pregunta3: 0,
        estrellas: 0,
        comentario: ''
    });

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setValores((prevValores) => ({
            ...prevValores,
            [name]: Number(value),
        }));
    };

    const handleCommentChange = (e) => {
        setValores((prevValores) => ({
            ...prevValores,
            comentario: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const encuestaData = {
            estrellas: valores.estrellas,
            comentario: valores.comentario,
            respuestas: [
                { preguntaId: 1, valor: valores.pregunta1 },
                { preguntaId: 2, valor: valores.pregunta2 },
                { preguntaId: 3, valor: valores.pregunta3 }
            ]
        };

        try {
            await axios.post('http://localhost:3000/api/encuesta', encuestaData);
            alert('Encuesta enviada correctamente');
        } catch (error) {
            console.error('Error al enviar la encuesta', error);
        } finally {
            navigate('/main');
        }
    };

    const getImageForValue = (value) => {
        switch (Number(value)) {
            case -2: return ImageAngry;
            case -1: return ImageSad;
            case 0: return ImageNeutral;
            case 1: return ImageHappy;
            case 2: return ImageVeryHappy;
            default: return ImageNeutral;
        }
    };

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index + 1}
                className={`star ${index + 1 <= valores.estrellas ? 'selected' : ''}`}
                onClick={() => setValores({ ...valores, estrellas: index + 1 })}
            >
                ★
            </span>
        ));
    };

    const resetInactivityTimeout = useCallback(() => {
        clearTimeout(window.inactivityTimeout);
        window.inactivityTimeout = setTimeout(() => {
            navigate('/mainEN');
        }, 2 * 60 * 1000);
    }, [navigate]);

    useEffect(() => {
        resetInactivityTimeout();

        const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event =>
            window.addEventListener(event, resetInactivityTimeout)
        );

        return () => {
            clearTimeout(window.inactivityTimeout);
            events.forEach(event =>
                window.removeEventListener(event, resetInactivityTimeout)
            );
        };
    }, [resetInactivityTimeout]);

    return (
        <>
            <div className="background-containerMAIN"></div>
            <div className="container">
                <img src={ImageTopLeft} alt="Top Left" className="image-top-left2" />

                <div className="card">
                    <div className="card-title">
                        <h5>Satisfaction Survey</h5>
                    </div>
                    <div className="card-body">
                        <p className="texto1">In each question, rate your experience</p>
                        <form className="survey-form mt-3" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="texto2">1. How would you rate the variety of food and drink options on our menu?</label>
                                <div className="image-face">
                                    <img src={getImageForValue(valores.pregunta1)} alt="Feedback" className="feedback-image" />
                                </div>
                                <input
                                    type="range"
                                    min="-2"
                                    max="2"
                                    step="1"
                                    name="pregunta1"
                                    value={valores.pregunta1}
                                    onChange={handleRangeChange}
                                    className="emoji-slider"
                                />
                            </div>
                            <div className="form-group">
                                <label className="texto3">2. How satisfied are you with the time it took for your experience in the establishment?</label>
                                <div className="image-face">
                                    <img src={getImageForValue(valores.pregunta2)} alt="Feedback" className="feedback-image" />
                                </div>
                                <input
                                    type="range"
                                    min="-2"
                                    max="2"
                                    step="1"
                                    name="pregunta2"
                                    value={valores.pregunta2}
                                    onChange={handleRangeChange}
                                    className="emoji-slider"
                                />
                            </div>
                            <div className="form-group">
                                <label className="texto4">3. How did you find the ambiance of the place (decoration, music, lighting, etc.)?</label>
                                <div className="image-face">
                                    <img src={getImageForValue(valores.pregunta3)} alt="Feedback" className="feedback-image" />
                                </div>
                                <input
                                    type="range"
                                    min="-2"
                                    max="2"
                                    step="1"
                                    name="pregunta3"
                                    value={valores.pregunta3}
                                    onChange={handleRangeChange}
                                    className="emoji-slider"
                                />
                            </div>
                            <div className="form-group">
                                <label className="texto5">Leave us your comments:</label>
                                <textarea className="input_text" rows="4" onChange={handleCommentChange}></textarea>
                            </div>
                            <hr className="custom-line" />
                            <div className="form-group">
                                <div className="stars">{renderStars()}</div>
                            </div>
                            <button type="submit" className="boton-enviar">SEND</button>
                        </form>
                    </div>
                </div>
                <img
                    src={ImageBottomLeft}
                    alt="Bottom Left"
                    className="image-bottom-left2"
                    onClick={() => window.close()}
                />
            </div>
        </>
    );
}

export default Encuesta;
