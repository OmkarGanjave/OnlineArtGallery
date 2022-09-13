import logo from './logo.svg';
import './App.css';
import Register from './Artist/Register';
import {Link,Route,Routes} from 'react-router-dom';
import Login from './Artist/login';

function App() {
  return (
    <div className="App">
      
      {/* <Register/> */}

      {/* <Login/> */}
        <ul className="nav navbar">
          <li className="nav-item">
            <Link to="/" className='nav-link' >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className='nav-link'>Registeration</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className='nav-link'>Login</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
