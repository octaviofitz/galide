import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './contacto.css';

function Contacto() {
    return (

        <section className='contacto' id='contacto'>
            <p className='volanta'>¿Algún proyecto en mente?</p>
            <hr className='linea'></hr>
            <h3 className='titulo'>CONTACTO</h3>
            <p className='texto'>Contactanos hoy mismo y descubre cómo podemos potenciar tu negocio con estrategias de marketing efectivas.</p>
        <div>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='Formulario'>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" className='Input' />
        <TextField id="filled-basic" label="Correo" variant="outlined" className='Input'/>
        <TextField id="standard-basic" label="Teléfono" variant="outlined" className='Input'/>
        <TextField
          id="filled-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          className='Input'
        />
        
        </div>
        <Button variant="contained" className='boton'>Enviar</Button>
      </Box>
      </div>
      </section>

    );
}

export default Contacto;