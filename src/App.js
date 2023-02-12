import { BrowserRouter , Route , Routes ,Navigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContextProvider';
import { useContext } from 'react';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Project from './pages/Project/Project';
import Create from './pages/Create/Create';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import OnlineUsers from './components/OnlineUsers/OnlineUsers';

function App() {
  const {authIsReady , user} = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>  
      {user && <Sidebar />}
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" /> } />
          <Route path="/create" element={user ? <Create /> : <Navigate to="/login" />} />
          <Route path="/projects/:id" element={user ? <Project /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> :<Signup />} />
        </Routes>
      </div>
      {user && <OnlineUsers />}
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
