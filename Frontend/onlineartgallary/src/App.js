import './App.css';
import Navigates from './Navigates';
import Navbar from './Home/NavBar';
import Demo from './demo';
import AboutUs from './Home/AboutUs';
import ContactUs from './Home/ContactUs';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
        <Navigates/>
        <AboutUs/>
        <ContactUs/>
        {/* <Demo/> */}
    </div>
  );
}

export default App;
