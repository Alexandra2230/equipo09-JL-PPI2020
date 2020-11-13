import React from 'react';
import focoyflor  from '../imagenes/focoyflor.jpg'
import fococolor from '../imagenes/fococolor.jpg'
import { Link } from 'react-router-dom';
import '../Estilos/mennu.css';


 function Menu (){

    return (
          
           <div className="Menu">  
          <img src={fococolor} />
           <Link to="/Tras1" className="text-decoration-none "> 
          <h3>¿Qué es?</h3>
          </Link>
          <Link to="/Sintomas" className="text-decoration-none "> 
          <h3>Síntomas</h3>
          </Link>
          <Link to="/Tipos" className="text-decoration-none "> 
          <h3>Tipos</h3>
          </Link>
          <Link to="/Otros" className="text-decoration-none "> 
          <h3>Otros</h3>
          </Link>
          <Link to="/Estructura" className="text-decoration-none "> 
          <h3>Estructura</h3>
          </Link>
          <h3>Ayuda</h3>
      <Link to="/Valoracion" className="text-decoration-none "> 
          <h3>Valoracion de la app</h3>
          </Link>
        


    </div>
    

  );
}
export default Menu;