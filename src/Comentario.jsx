import React from 'react';
import './App';
import './comentario.css';
import Logo from './imagenes/logo.png';

function Comentario (){

    return(
    <form>   
  <div class="Comentario">
    <h1>Comentario</h1>
    <img src = {Logo}/>
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Comentario</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

    <button type="button" className="btn btn-primary btn-lg  "> <b>ENVIAR</b></button>
  </div>
  </form> 
    )
}
export default Comentario;