import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import './servicios.css'

function Servicios() {
    return (
        <section className='servicios'>
            <p className='volanta'>¿Qué ofrecemos?</p>
            <h3 className='titulo'>NUESTROS SERVICIOS</h3>

            <div className='Container'>
                
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + "/img/servicios/desarrolloWeb.jpg"} alt='Desarrollo web' className='img' />
                    <p className='subtitulo'>Desarrollo web</p>
                    <ComputerIcon className='icono' />

                    <p className='texto'>En Galidé ofrecemos servicios de desarrollo web personalizados, adaptados a las necesidades de nuestros clientes. Utilizamos las últimas tecnologías y lenguajes de programación para crear sitios web modernos, funcionales y atractivos. Confía en nosotros para llevar tu presencia en línea al siguiente nivel.</p>
                </div>

                <div className='card'>
                <img src={process.env.PUBLIC_URL + "/img/servicios/redes.jpg"} alt='Redes sociales' className='img' />
                <p className='subtitulo'>Redes sociales</p>
                <SystemSecurityUpdateGoodOutlinedIcon className='icono'/>
                    <p className='texto'>Ofrecemos servicios de gestión de redes sociales. Nos encargamos de administrar las cuentas del cliente, creando contenido innovador y atractivo para aumentar su presencia en las redes. Confía en nosotros para impulsar tu marca y llegar a tu audiencia de manera efectiva.</p>
                </div>
              

                <div className='card'>
                <img src={process.env.PUBLIC_URL + "/img/servicios/redes.jpg"} alt='Publicidad' className='img' />
                <p className='subtitulo'>Publicidad</p>
                <StackedLineChartOutlinedIcon className='icono' />
                    <p className='texto'>Potenciamos tu marca mediante publicidad en redes sociales. Con estrategias efectivas, segmentación precisa y contenido cautivador, alcanzamos a tu audiencia y logramos resultados impactantes. Aprovecha el alcance masivo de las redes sociales para destacar en el mercado.</p>
                </div>

            </div>
        </section>
    );
}

export default Servicios;