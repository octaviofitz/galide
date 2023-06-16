import React from 'react';
import './servicios.css'

import TecnologiasWeb from '../TecnologiasWeb/TecnologiasWeb';

function Servicios() {
    return (
        <section className='servicios' id='servicios'>
            <p className='volanta'>¿Qué ofrecemos?</p>
            <h3 className='titulo'>NUESTROS SERVICIOS</h3>

            <div className='Container'>

                
                 <div className='card' id='card1'>
                <img src={process.env.PUBLIC_URL + "/img/servicios/proteccion.webp"} alt='Protección de marca' className='img' />
                <p className='subtitulo'>Protección de Marca</p>
                <hr></hr>
                   <p className='texto'>Nuestra agencia se enorgullece en ofrecer un servicio integral de protección de marca, destinado a garantizar la reputación, imagen y control de precios de nuestros valiosos clientes. Conscientes de la importancia de preservar la identidad y el prestigio de una marca, nos hemos especializado en desarrollar estrategias sólidas y eficientes para enfrentar los desafíos del mercado actual.</p>
                </div>
                
                <div className='card' id='card2'>
                <img src={process.env.PUBLIC_URL + "/img/servicios/redes.webp"} alt='Redes sociales' className='img' />
                <p className='subtitulo'>Redes sociales</p>
                <hr></hr>
                  <p className='texto'>Ofrecemos servicios de gestión de redes sociales. Nos encargamos de administrar las cuentas del cliente, creando contenido innovador y atractivo para aumentar su presencia en las redes. Confía en nosotros para impulsar tu marca y llegar a tu audiencia de manera efectiva.</p>
                </div>
              

                <div className='card' id='card3'>
                <img src={process.env.PUBLIC_URL + "/img/servicios/pub.webp"} alt='Publicidad' className='img' />
                <p className='subtitulo'>SEO Y SEM</p>
                <hr></hr>
                   <p className='texto'>Nuestra agencia de marketing ofrece servicios de SEO y SEM para impulsar tu presencia en línea. Optimizamos tu sitio web con estrategias de búsqueda orgánica y gestionamos campañas publicitarias efectivas en motores de búsqueda. Obtén visibilidad, aumenta el tráfico y alcanza tus metas de negocio con nuestra experiencia en SEO y SEM.</p>
                </div>


                <div className='card' id='card4'>
                    <img src={process.env.PUBLIC_URL + "/img/servicios/desarrolloweb.webp"} alt='Desarrollo web' className='img' />
                    <p className='subtitulo'>Desarrollo web</p>
                    <hr></hr>
                    <p className='texto'>En Galidé ofrecemos servicios de desarrollo web personalizados, adaptados a las necesidades de nuestros clientes. Utilizamos las últimas tecnologías y lenguajes de programación para crear sitios web modernos, funcionales y atractivos. Confía en nosotros para llevar tu presencia en línea al siguiente nivel.</p>
                </div>
                    </div>

                    <TecnologiasWeb />
        </section>
    );
}

export default Servicios;