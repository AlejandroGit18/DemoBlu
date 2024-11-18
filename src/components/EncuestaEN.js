import React, { useState } from 'react';
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
                navigate('/mainEN');  // Redirige a la página principal tras enviar la encuesta
            }
        };

    /*const [valores, setValores] = useState({
        pregunta1: 0,
        pregunta2: 0,
        pregunta3: 0,
        estrellas: 0,
    });*/

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

    /*const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setValores((prevValores) => ({
            ...prevValores,
            [name]: Number(value),
        }));
    };*/

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

    return (
        <>
            <div className="background-containerMAIN"></div> {/* Fondo agregado */}
        <div className="container">
            {/* Imagen superior izquierda */}
            <img src={ImageTopLeft} alt="Top Left" className="image-top-left2" />

            <div className="card">
                <div className="card-title">
                    <h5>Encuesta de Satisfacción</h5>
                </div>
                <div className="card-body">
                    <p className="texto1">En cada pregunta, califica tu experiencia</p>
                    <form className="survey-form mt-3" onSubmit={handleSubmit}>
                        {/* Pregunta 1 */}
                        <div className="form-group">
                            <label className="texto2">1. ¿Cómo calificarías la variedad de opciones de comida y bebida en nuestro menú?</label>
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

                        {/* Pregunta 2 */}
                        <div className="form-group">
                            <label className="texto3">2. ¿Qué tan satisfecho(a) estás con el tiempo que tomó su experiencia en el establecimiento?</label>
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

                        {/* Pregunta 3 */}
                        <div className="form-group">
                            <label className="texto4">3. ¿Cómo te pareció el ambiente del lugar (decoración, música, iluminación, etc...)?</label>                     
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

                        {/* Comentarios */}
                        <div className="form-group">
                            <label className="texto5">Déjanos tus comentarios:</label>                     
                            <textarea className="input_text" rows="4" onChange={handleCommentChange}></textarea>
                        </div>

                        <hr className="custom-line"/>

                        {/* Calificación de Estrellas */}
                        <div className="form-group">
                            <div className="stars">{renderStars()}</div>
                        </div>

                        <button type="submit" className="boton-enviar">ENVIAR</button>
                    </form>
                </div>
            </div>

            {/* Imagen en la parte inferior derecha */}
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
