import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';

import './header.css'

function Header() {
    return (
        <section className='header'>
              <div className='Container'>
                <h2 className='titulo'>Desbloqueá el potencial del hiperespacio digital</h2>
                <Nav.Link href="#contacto" className='links'><Button variant="contained" className='boton'>CONTACTANOS</Button></Nav.Link>
                </div>
        </section>
    );  
}

export default Header;