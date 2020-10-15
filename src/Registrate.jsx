import React from 'react';



 function Registrate(){

    return (
          <div className="Registrate">
               
       <h3>Registrate</h3>
      
      <form>
  <div className="form-row"> 
  <div className="form-group col-md-6">
      <label for="inputEmail4">Nombres</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Apellidos</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Correo electronico</label>
      <input type="email" className="form-control" id="inputEmail4"></input>
    </div> 
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" className="form-control" id="inputPassword4"></input>
    </div>
  </div>
  <div className="container col-10"> 
  <button type="submit" class=" "><b>Registrate</b></button>
  </div>
</form>
      

        </div>)

    

;} 
export default Registrate;