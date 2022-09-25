import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import  CustomerNavBar from './customernavbar';

let Customerhome = () => {
    let nav = useNavigate();

    let cust =JSON.parse(localStorage.getItem("customer"));

    let loginId = cust.loginId;

    const[allProducts,setProduct] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:8080/allproducts")
      .then(resp => resp.json())
      .then(data=>setProduct(data))
      // console.log(allProducts);
      console.log(allProducts)
    },[])

    
  
    

    function importAll(r) 
    {
        // array 
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('C:/Users/omkar/OneDrive/Documents/OMKAR/C-DAC/March2022/Project/Online Art Gallary/ProjectOnlineArtGallery/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));

    
    return(
      
      <div>
      <div><CustomerNavBar/></div>
        <div className='container-fluid '  >
        
          <nav className="navbar navbar-expand-sm nav-tabs justify-content-center opacity-100 " >
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/custpersnoalinfo"><b>{cust.user_id}</b></a>
                    </li>
                    <li>
                    <Dropdown>
                      <Dropdown.Toggle className='nav-link btn  btn-link btn-light text-dark ' >
                        Category
                      </Dropdown.Toggle >

                      <Dropdown.Menu>
                        <Dropdown.Item href="/painting">painting</Dropdown.Item>
                        <Dropdown.Item href="/sclupture">sclupture</Dropdown.Item>
                        <Dropdown.Item href="/sketch">sketch</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/viewCart">Cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/placeOrder">Order</a>
                    </li>
                 </ul>
            </nav>
           
            <div className='container'> 
            <div className="row">
            
            {
                
              allProducts.map((v)=>{

                      var pid = v.productId;
                      var imgName = v.artist.artistId+'_'+pid;
                return(
                      
                  <div className="col-sm-3 text-start">

                    <div className="card" style={{width:"250px"}}>

                    <img src={images[imgName+'.jpg']} width="250" height="250"/>

                    <div className="card-body  bg-dark text-white"  >
                      <p><b>{v.productName}</b></p>

                      <dl>
                            <dt>Product Details </dt> 
                            <dd>{v.productDiscription}</dd>
                      </dl>
                      
                      <p><b>Product Price :-</b> {v.price} </p>
                      
                      <button className="btn btn-success" onClick={(v)=>{
                        console.log("select Product id "+pid);
                        console.log("Loged customer login id "+loginId);
                        var url = "http://localhost:8080/addTocart/"+loginId+"/"+pid;
                        //localStorage.setItem('product',JSON.stringify(v));
                        console.log(url); 
                        fetch(url)
                        .then(resp => resp.json())
                        .then(data=>console.log(data))
                        alert("Product Added Succesfully");
                        //nav("/viewCart");
                        
                      }}>Add to Cart</button>
                    </div>
                    
                    </div>   
                    <br/><br/>       
                  </div>
                  
                    
                )
                
                
              })
              
            }
            </div>
            </div>
           
        </div>
        </div>
    )

}

export default Customerhome;