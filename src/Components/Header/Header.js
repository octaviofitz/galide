import React from 'react';


import './header.css'

function Header() {
    return (
        <section className='header'>
                <img src={process.env.PUBLIC_URL + "/img/header/header.jpg"} className='img' /> 
        </section>
    );  
}

export default Header;