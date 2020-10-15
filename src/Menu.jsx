import React from 'react';
import './App';
import './menu.css';
import Foco from './imagenes/foco.jpg';
import { FaUserTie} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaComments} from 'react-icons/fa';
import { FaBook} from 'react-icons/fa';



class Menu2 extends React.Component {
  render() {
    return (
        <form>  
         
      <img src = {Foco}/>
      
          <div class="navbar">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i><FaUserTie /> User </a>
  <a href="#"><i class="fa fa-fw fa-search"></i><FaSearch /> Search</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i><FaComments/> Chat</a> 
  <a href="#"><i class="fa fa-fw fa-user"></i><FaBook/>Menu</a>
  
     </div>

</form>
    )
  }
 
}
export default Menu2;