import Header from "./Header";
import NavBar from './NavBar'

let AboutUs = () => {
    
    return(
        <div>
        {/* <div><NavBar/></div> */}
        <div className='container-fluid'>
            
            <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <blockquote className="text-black  justify-content-center  " >

                <dl>
                    <dt>
                    <h4>Online Art Gallary</h4>
                    </dt>
                    <dd>
                    Online Art Gallery is a fast growing online art gallery, connecting people with art and artists they love.Online 
            Gallery offers a beautiful selection of paintings, drawings, sculpture and photography in various price ranges.
                    </dd>
                    <dt>
                  
                    Artist:
                    </dt>
                    <dd>
                    -Artist can register and after the registeration he/she can upload digital copy of their art work wrt to category like drawing ,painting etc with the price in our website.
		            -Artist can also see the all their art work uploaded,he/she can update or modify the art related information or image. 

                    </dd>
                    <dt>
                    Customer:
                        
                        </dt>
                        <dd>
                        -Customer can see the all art work which is present in the website.When he/she wants to buy the art,so must have to customer is the member of the application otherwise it must have to register their account. 
		                -Customer can add the art for buying after that added art present in the cart.
		                -After seeing the added art in cart he/she can place the order successfully.
                        </dd>
                </dl>
              </blockquote>
           </div>
        </div>
    )

}

export default AboutUs;