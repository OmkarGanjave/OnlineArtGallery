import logo from './logo.svg';
import './App.css';
import Register from './Artist/Register';
import {Link,Route,Routes} from 'react-router-dom';
import Login from './Artist/login';
import Home from './Home/Home';
import ContactUs from './Home/ContactUs';
import AboutUs from './Home/AboutUs';
import Artisthome from './Artist/ArtistHome';
import AddProduct from './Artist/AddProduct';
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
            <Link to="/contactus" className='nav-link'>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className='nav-link'>About Us</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>

          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/artisthome" element={<Artisthome/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
