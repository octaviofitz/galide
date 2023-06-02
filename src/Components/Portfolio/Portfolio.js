import React from 'react';

import './portfolio.css';

function Portfolio() {
    return (
        <section className='clientes'>
            <p className='volanta'>Confían en nosotros</p>
            <h3 className='titulo'>NUESTROS CLIENTES</h3>

            <div className='container'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + "/img/clientes/vitalcan.png"} alt='Vitalcan' className='img'/>
                </div>
                <div className='card'>
                     <img src={process.env.PUBLIC_URL + "/img/clientes/rubicat.webp"} alt='Rubicat' className='img'/>
                </div>
                <div className='card'>
                       <img src={process.env.PUBLIC_URL + "/img/clientes/marynor.png"} alt='Marynor' className='img'/>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;