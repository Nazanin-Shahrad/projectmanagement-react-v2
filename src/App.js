import { BrowserRouter , Route , Routes ,Navigate } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Project from './pages/Project/Project';
import Create from './pages/Create/Create';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Sidebar />
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
