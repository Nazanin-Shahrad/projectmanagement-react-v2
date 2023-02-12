import React ,{useContext} from 'react';
import './navbar.css';
import butterfly1 from '../../assets/butterfly1.svg';
import { Link } from 'react-router-dom';
import {useLogout} from '../../hooks/useLogout';
import { AuthContext } from '../../context/AuthContextProvider';

const Navbar = () => {
    const {logout , error , isPending} = useLogout();
    const {user} = useContext(AuthContext);
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img  src={butterfly1} alt=""/>
                <span>Butterfly Management</span>
            </li>
            {!user && (
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          
            </> 
            )}
            {user && (
                 <li>
                {!isPending && <button className='btn'  onClick={logout}>Logout</button>} 
                {isPending && <button className='btn'  disabled>Logging out ...</button>} 
             </li>
            )}
           
        </ul>
    </div>
  )
}

export default Navbar