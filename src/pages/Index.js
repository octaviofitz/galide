import React from 'react';
import Cards from '../Components/Cards/Cards';
import Contacto from '../Components/Contacto/Contacto';
import Nosotros from '../Components/Nosotros/Nosotros';
import Servicios from '../Components/Servicios/Servicios';
import Portfolio from '../Components/Portfolio/Portfolio';

function Index() {
    return (
        <div>
            <Nosotros />
{/*             <Cards />
 */}            <Servicios />
            <Portfolio />
            <Contacto />
        </div>
    );
}

export default Index;