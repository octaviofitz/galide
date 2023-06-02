import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

/* Componentes */
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Whatsapp from '../Footer/Footer';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import Index from '../../pages/Index';

const AppRouter = () => {
    return (
        <div>
        <BrowserRouter>
        
         <NavBar />
         <Header />
 
        <Routes >
        <Route path='/' element={<Index />} />
        <Route path='/desafio-columbia' element={<Cards />} />
        
        </Routes>

       <Footer />

        </BrowserRouter>
        </div>
    );
}

export default AppRouter;