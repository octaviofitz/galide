import React from 'react';
/* import './WhatsAppButton.css'; */

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default Whatsapp;
