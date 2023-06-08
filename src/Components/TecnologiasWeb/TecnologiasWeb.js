import React from 'react';

import './tecnologiasWeb.css';

function TecnologiasWeb() {
    return (
        <article className='tecnologias'>
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/combo.png"} alt='HTML, CSS, Js' className='img' />
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/node.svg"} alt='Javascript' className='img' />
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/wordpress.svg"} alt='Wordpress' className='img' />
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/react.svg"} alt='Node Js' className='img' />
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/sql.svg"} alt='MySQL' className='img' />
            <img src={process.env.PUBLIC_URL + "/img/tecnologias/firebase.svg"} alt='Firebase' className='img' />
        </article>
    );
}

export default TecnologiasWeb;