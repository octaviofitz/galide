import React from 'react';

import './portfolio.css';

function Portfolio() {
    return (
        <section className='clientes' id='clientes'>
            <p className='volanta'>Portfolio</p>
            {/* <hr className='linea'></hr> */}
            <h3 className='titulo'>ALGUNOS DE NUESTROS CLIENTES</h3>

            <div className='Container'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + "/img/clientes/prueba/vitalcan.png"} alt='Vitalcan' className='img'/>
                </div>
                <div className='card'>
                     <img src={process.env.PUBLIC_URL + "/img/clientes/prueba/rubicat.png"} alt='Rubicat' className='img'/>
                </div>
                <div className='card'>
                       <img src={process.env.PUBLIC_URL + "/img/clientes/prueba/marynor.png"} alt='Marynor' className='img'/>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;