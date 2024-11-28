import React from 'react';
import ReactDOM from 'react-dom/client';
import { RFCForm} from './rfc2.jsx';  
import './style.css';  

const datosUsuario = {
  paterno: 'Acevedo ',
  materno: 'Ponce',
  nombre: 'Diego',
  fechaNacimiento: '2002-02-02'
};

console.log("Objeto datosUsuario:", datosUsuario); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RFCForm 
      paterno={datosUsuario.paterno}
      materno={datosUsuario.materno}
      nombre={datosUsuario.nombre}
      fechaNacimiento={datosUsuario.fechaNacimiento}
    />
  </React.StrictMode>
);
