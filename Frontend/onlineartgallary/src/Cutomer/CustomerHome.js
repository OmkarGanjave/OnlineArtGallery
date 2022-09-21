import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    const images = importAll(require.context('F:/cdac2022/Frontend/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));

    
    return(
      
        <div className='container-fluid'  >
          
          <div className='container'>
            <br/>
            <div className="row">
            {
                
              allProducts.map((v)=>{

                      var pid = v.productId;
                      var imgName = v.artist.artistId+'_'+pid;
                      
                      // console.log(imgName);
                return(
                      
                  <div className="col-sm-4">

                    <div className="card" style={{width:"250px"}}>

                    <img src={images[imgName+'.jpg']} width="250" height="250"/>

                    <div className="card-body">

                      <p><b>{v.productName}</b></p>
                      <br/>
                      <p><b>Product Details :-</b> {v.productDiscription}</p>
                      <br/>
                      <p><b>Product Price :-</b> {v.price} </p>
                      
                      <button class="btn btn-success" onClick={(v)=>{
                        console.log("select Product id "+pid);
                        console.log("Loged customer login id "+loginId);
                        var url = "http://localhost:8080/addTocart/"+loginId+"/"+pid;
                        console.log(url); 
                        fetch(url)
                        .then(resp => resp.json())
                        .then(data=>console.log(data))

                        nav("/viewCart");
                        
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
       
    )

}

export default Customerhome;