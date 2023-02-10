import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import dashboardIcon1 from '../../assets/dashboardIcon1.svg';
import addIcon from '../../assets/addIcon.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                {/* avatar & username here later */}
                <p>Hey user</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={dashboardIcon1} alt="dashboard" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/create">
                            <img src={addIcon} alt="add project" />
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Sidebar