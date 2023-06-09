import React from 'react';

import './nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros' id='nosotros'>
        <p className='volanta'>Nosotros</p>
        <hr className='linea'></hr>
        <h3 className='titulo'>¿QUIÉNES SOMOS?</h3>

        <div className='Container'>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/nosotros/nosotros.png"} alt='Nosotros Galidé' className='img' />
            </div>
            <div>
                <h4 className='subtitulo'>GALIDÉ</h4>
                <p className='texto'>Somos una agencia de marketing digital en Buenos Aires que se especializa en ayudar a las empresas a alcanzar sus objetivos en el entorno digital. Ofrecemos servicios integrales de publicidad, diseño web, SEO y gestión de redes sociales para mejorar la visibilidad y el alcance de las empresas en línea. Además, brindamos protección de marca para preservar la identidad y reputación de las empresas, manteniéndolas seguras de posibles amenazas en el entorno digital en constante cambio.</p>
            </div>
        </div>
    </section>
    );
}

export default Nosotros;