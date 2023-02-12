import React ,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import dashboardIcon1 from '../../assets/dashboardIcon1.svg';
import addIcon from '../../assets/addIcon.svg';
import Avatar from '../../components/Avatar/Avatar';
import { AuthContext } from '../../context/AuthContextProvider';

const Sidebar = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                {/* avatar & username here later */}
                <Avatar src={user.photoURL} />
                <p>Hey {user.displayName}</p>
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