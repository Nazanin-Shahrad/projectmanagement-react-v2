import React from 'react';
import './navbar.css';
import butterfly1 from '../../assets/butterfly1.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img  src={butterfly1} alt=""/>
                <span>Butterfly Management</span>
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
                <button className='btn'>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar