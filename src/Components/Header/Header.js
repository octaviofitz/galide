import React from 'react';

import HeaderIMG from '../../img/header.jpg'

import './header.css'

function Header() {
    return (
        <section className='header'>
                <img src={HeaderIMG} className='img' /> 
        </section>
    );  
}

export default Header;