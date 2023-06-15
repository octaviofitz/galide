import React from 'react';
import { useState } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './contacto.css';

function Contacto() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_434hw1v",
      "template_vl5vsm9",
      e.target,
      "m7WOr0KM3z7ojc22P"
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
  }


//validaciones

//validación nombre
const [name, setName]= useState('')
const [leyendaName, setLeyendaName]= useState('')
const [errorName, setErrorName] = useState(false)
const [botonName, setBotonName]= useState(false)

//validación email
const [mail, setMail]= useState('')
const [leyendaMail, setLeyendaMail]= useState('')
const [errorMail, setErrorMail] = useState(false)
const [botonMail, setBotonMail]= useState(false)
const re= /\S+@\S+\.\S+/ // eslint-disable-line


//validación teléfono
const [telefono, setTelefono]= useState('')
const [leyendaTelefono, setLeyendaTelefono]= useState('')
const [errorTelefono, setErrorTelefono] = useState(false)
const [botonTelefono, setBotonTelefono]= useState(false)

//validación mensaje
const [mensaje, setMensaje]= useState('')
const [leyendaMensaje, setLeyendaMensaje]= useState('')
const [errorMensaje, setErrorMensaje] = useState(false)
const [botonMensaje, setBotonMensaje]= useState(false)

//SweetAlert
const mostrarAlerta=()=> {
  Swal.fire({
    title: "¡Su mensaje ha sido enviado con éxito!",
    text: "En breve nos pondremos en contacto",
    icon: "success",
    timer: "10000"
  })
}

    return (

        <section className='contacto' id='contacto'>
          <div>
            <p className='volanta'>¿Algún proyecto en mente?</p>
            <h3 className='titulo'>CONTACTO</h3>
            <p className='texto'>Completá el formulario y descubre cómo podemos potenciar tu negocio con estrategias de marketing efectivas.<br></br>También podés comunicarte a través de nuestro correo electrónico <b>hola@galide.com.ar</b>. De ambas maneras recibirás una respuesta a la brevedad.</p>
            </div>
        <div>

        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        id='formContact'
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <div className='Formulario'>
        <TextField id="outlined-basic" name='nombre' label="Nombre" variant="outlined" className='Input' onChange={(e) => {
          setName(e.target.value);
          if(name.length>45){
            setErrorName(true);
            setLeyendaName("Ingrese un nombre válido");
          }else{
              setErrorName(false);
              setLeyendaName('');
              setBotonName(true)
            }
        }}
        error={errorName}
        helperText={leyendaName} />

        <TextField id="filled-basic" name='mail' label="Correo" variant="outlined" className='Input'  onChange={(e) => {
          setMail(e.target.value);
          if(!re.test(mail)){
            setErrorMail(true);
            setLeyendaMail("Ingrese un correo electrónico válido");
          }else{
              setErrorMail(false);
              setLeyendaMail('');
              setBotonMail(true)
            }
        }}
        error={errorMail} 
        helperText={leyendaMail}
        />

        <TextField id="standard-basic" name='telefono' label="Teléfono" variant="outlined" className='Input' type='number' onChange={(e) => {
          setTelefono(e.target.value);
          if(telefono.length<6 || telefono.length>25){
            setErrorTelefono(true);
            setLeyendaTelefono("Ingrese un número de contacto válido");
          }else{
              setErrorTelefono(false);
              setLeyendaTelefono('');
              setBotonTelefono(true)
            }
        }}
        error={errorTelefono} 
        helperText={leyendaTelefono}/>


        <TextField
          id="filled-multiline-static"
          label="Mensaje"
          name='msg'
          multiline
          rows={4}
          className='Input'
          onChange={(e) => {
            setMensaje(e.target.value);
            if(mensaje.length<20 || mensaje.length>5000){
              setErrorMensaje(true);
              setLeyendaMensaje("El mensaje debe contener un mínimo de 20 caracteres y un máximo de 5000");
            }else{
                setErrorMensaje(false);
                setLeyendaMensaje('');
                setBotonMensaje(true)
              }
          }}
          error={errorMensaje} 
          helperText={leyendaMensaje}
        />

{
         botonName===true && botonTelefono===true && botonMail===true && botonMensaje===true
           ? <Button variant="contained" size="lg" className='boton'
           type='submit' onClick={()=>mostrarAlerta()}>
                   Enviar
               </Button>
               
               :
               <Button variant="contained" size="lg" className='boton'
           type='submit' disabled>
                   Enviar
               </Button>   
            }

        </div>
     </Box>
      </div>
      </section>

    );
}

export default Contacto;