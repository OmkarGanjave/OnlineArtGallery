import {Link,Route,Routes} from 'react-router-dom';
import Register from './Artist/Register';
import Login from './Artist/login';
import Home from './Home/Home';
import ContactUs from './Home/ContactUs';
import AboutUs from './Home/AboutUs';
import Artisthome from './Artist/ArtistHome';
import AddProduct from './Artist/AddProduct';
import SearchProduct from './Artist/SearchProduct';
import UploadImage from "./Artist/UploadImage";
import UpdateProduct from "./Artist/UpdateProduct";
import Customerhome from './Cutomer/CustomerHome';
import Logout from './Home/Logout';

let Navigates = ()=>{
    return(
        <div>
            {/* <ul className="nav navbar">
          <li className="nav-item">
            <Link to="/" className='nav-link' >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className='nav-link'>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className='nav-link'>About Us</Link>
          </li>
        </ul> */}

        <Link to="/artisthome"></Link>
        <Link to="/customerhome"></Link>

        <Link to="/uploadImage"></Link>

        <Link to="logout"></Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>

          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/artisthome" element={<Artisthome/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/uploadImage" element={<UploadImage/>}/>
          <Route path="/searchproduct" element={<SearchProduct/>}/>
          <Route path="/updateproduct" element={<UpdateProduct/>}/>

          <Route path="/customerhome" element={<Customerhome/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
        </div>
    )
}

export default Navigates;