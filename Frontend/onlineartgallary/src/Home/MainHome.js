import NavBar from './NavBar';
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.jpeg';
import pic3 from '../images/pic3.jpeg';
import Carousel from 'react-bootstrap/Carousel';
let MainHome = ()=>{
    
    return(
      <div>
      <div>
          <NavBar/>
      </div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            width="100"
            height="680"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Painting</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            width="100"
            height="680"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Sculptures</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            width="100"
            height="680"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Sketches</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
    
}

export default MainHome;