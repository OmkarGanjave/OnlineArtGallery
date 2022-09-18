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
import SearchProduct from './Artist/SearchProduct';

import Customerhome from './Cutomer/CustomerHome';
import Navigates from './Navigates';
function App() {
  return (
    <div className="App">
        <Navigates/>
    </div>
  );
}

export default App;
