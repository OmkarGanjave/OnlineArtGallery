import {Link,Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import ContactUs from './Home/ContactUs';
import AboutUs from './Home/AboutUs';
import Artisthome from './Artist/ArtistHome';
import AddProduct from './Artist/AddProduct';
import SearchProduct from './Artist/SearchProduct';
import UploadImage from "./Artist/UploadImage";
import Register from "./RegisterLogin/Register";
import Login from "./RegisterLogin/Login"
import Customerhome from './Cutomer/CustomerHome';
import Logout from './Home/Logout';
import ViewCart from './Cutomer/Viewcart';
import PlaceOrder from './Cutomer/PlaceOrder'
import UpdateProduct from './Artist/UpdateProduct';
import UpdateImage from './Artist/UpdateImage';
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
        <Link to="/searchproduct"/>
        <Link to="/viewCart"></Link>
        <Link to="placeOrder"></Link>
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
          <Route path="/updateproduct" element={<UpdateProduct/>}/>
          <Route path="/updateImage" element={<UpdateImage/>}/>
          <Route path="/searchproduct" element={<SearchProduct/>}/>

          <Route path="/customerhome" element={<Customerhome/>}/>
          <Route path="/viewCart" element={<ViewCart/>}/>
          <Route path="/placeOrder" element={<PlaceOrder/>}/>
          <Route path='/logout' element={<Logout/>}/>

          
        </Routes>
        </div>
    )
}

export default Navigates;