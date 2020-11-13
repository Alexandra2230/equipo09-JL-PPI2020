import React from 'react';
import ReactDOM from 'react-dom';
import ReactIcons from 'react-icons'
import Bienvenido from './paginas/Bienvenido';
import Inicio from './paginas/Inicio'; 
import Politicas from './componentes/Politicas';
import Tras1 from './componentes/Tras1';
import Menu from './componentes/Menu';
import Registrate from './componentes/Registrate';
import Entrada from './componentes/Entrada';
import Otros from './componentes/Otros';
import Tipos from './componentes/Tipos';
import Sintomas from './componentes/Sintomas';
import Estructura  from './componentes/Estructura';
import Comentario from './componentes/Comentario';
import Chat from './componentes/Chat';
import Usuario from './componentes/Usuario';
import Valoracion from './componentes/Valoracion';
import Menuprin from './componentes/Menuprin';
import App from './routes/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';





ReactDOM.render(
  <React.StrictMode>
    <App/> 
  </React.StrictMode>,
  document.getElementById('root')
);



