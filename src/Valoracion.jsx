import React from 'react';
import './App';
import './valora.css';
import Logo from './imagenes/logo.png';



 function Valoracion(){

    return(
       <form>
        <div class="clasificacion">
            <h1>Valoracion de la App</h1>
            <img src = {Logo}/>
          <input id="radio1" type="radio" name="estrellas" value="5"></input>
         <label for="radio1">★</label>
        <input id="radio2" type="radio" name="estrellas" value="4"></input>
         <label for="radio2">★</label>
         <input id="radio3" type="radio" name="estrellas" value="3"></input>
          <label for="radio3">★</label>
         <input id="radio4" type="radio" name="estrellas" value="2"></input>
         <label for="radio4">★</label>
          <input id="radio5" type="radio" name="estrellas" value="1"></input>
          <label for="radio5">★</label>
          <button type="button" className="btn btn-primary btn-lg "> <b>ENVIAR</b></button>
</div>
</form>

        )
    }
    export default Valoracion;