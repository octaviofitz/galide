import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';

import './header.css'

function Header() {
    return (
        <section className='header'>
              <div className='Container'>
                <h2 className='titulo'>Desarrollamos soluciones digitales que impulsen tu negocio</h2>
                <Nav.Link href="#contacto" className='links'><Button variant="contained" className='boton'>CONTACTANOS</Button></Nav.Link>

               <Link to='contacto'></Link>
                </div>
        </section>
    );  
}

export default Header;