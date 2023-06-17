import React from 'react';
import {Fade} from "react-awesome-reveal";

import './nosotros.css';

function Nosotros() {
    
    return (
        <section className='nosotros' id='nosotros'>
        <Fade duration={4000}>

        <p className='volanta'>Nosotros</p>
        <h3 className='titulo'>¿QUIÉNES SOMOS?</h3>

        <div className='Container'>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/nosotros/nosotros.webp"} alt='Nosotros Galidé' className='img' />
            </div>
            <div>
                <h1 className='subtitulo'>GALIDÉ</h1>
                <h2 className='galaxia'>Galaxia de Ideas</h2>
                <p className='texto'>Somos una agencia de marketing digital en Buenos Aires que se especializa en ayudar a las empresas a alcanzar sus objetivos en el entorno digital. Ofrecemos servicios integrales de publicidad, diseño web, SEO y gestión de redes sociales para mejorar la visibilidad y el alcance de las empresas en línea. Además, brindamos protección de marca para preservar la identidad y reputación de las empresas, manteniéndolas seguras de posibles amenazas en el entorno digital en constante cambio.</p>
            </div>
        </div>
        </Fade>
    </section>
    );
}

export default Nosotros;