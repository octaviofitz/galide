import React from 'react';

import './nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros'>
        <p className='volanta'>Nosotros</p>
        <h3 className='titulo'>¿QUIÉNES SOMOS?</h3>

        <div className='Container'>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/nosotros/nosotros.png"} alt='Nosotros Galidé' className='img' />
            </div>
            <div>
                <h4 className='subtitulo'>Empresa de Marketing Digital, Publicidad y Desarrollo Web</h4>
                <p className='texto'>Somos una agencia de marketing digital en Buenos Aires que ofrece servicios de publicidad, diseño web, SEO y gestión de redes sociales.Nuestra misión es ayudar a las empresas a alcanzar sus objetivos de marketing a través de estrategias innovadoras, creativas y eficaces.</p>
            </div>
        </div>
    </section>
    );
}

export default Nosotros;