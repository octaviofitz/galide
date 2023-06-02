import React from 'react';

import HeaderIMG from '../../img/header.jpg'

import './header.css'

function Header() {
    return (
        <section className='header'>
                <h1>Desarrollamos soluciones digitales<br></br>que impulsen tu negocio</h1>
                <img src={HeaderIMG} className='img' />
        </section>
    );  
}

export default Header;