import React from 'react';
import Button from '@mui/material/Button';

import './header.css'

function Header() {
    return (
        <section className='header'>
              <div className='Container'>
                <h1 className='titulo'>Desarrollamos soluciones digitales que impulsen tu negocio</h1>
                <Button variant="contained" className='boton'>CONTACTANOS</Button>
                </div>
        </section>
    );  
}

export default Header;