import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import homeimg from 'F:/cdac2022/Frontend/onlineartgallary/src/cssimg/home.jpeg';

let Home = () => {

  

    let nav = useNavigate();

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
          <div className='container-fuild'>
            {/* <div className='container'> */}
            <div className="row">
            {
              allProducts.map((v)=>{
                      var pid = v.productId;
                      var imgName = v.artist.artistId+'_'+pid;
                      // console.log(imgName);
                return(
                      
                  <div className="col-sm-3 text-start p-5">

                    <div className="card" style={{width:"250px"}}>
                    <img src={images[imgName+'.jpg']} width="250" height="250"/>
                    <div className="card-body ">
                      <p><b >{v.productName}</b></p>

                      <dl>
                        <dt>Product Details </dt> 
                        <dd>{v.productDiscription}</dd>
                      </dl>
                      <p><b>Price </b> {v.price} </p>
                      <button className="btn btn-success" onClick={()=>{nav('/login')}}>Add to Cart</button>
                    </div>
                    </div>
                    <br/><br/>
                    
                  </div>
                )
                
              })
            }
            </div>
            </div>
          // </div>
    )

}




  
  


export default Home;