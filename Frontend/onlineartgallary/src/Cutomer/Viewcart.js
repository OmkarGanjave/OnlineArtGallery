import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom';
let ViewCart = ()=>{

    let cust =JSON.parse(localStorage.getItem("customer"));
    const[res,setResdata]=useState([]);
    const[products,setProduct] = useState([]);
    const[artistId,setArtistid]=useState();
    let loginId = cust.loginId;
    let nav = useNavigate();
    useEffect(()=>{
        var url = "http://localhost:8080/viewcart/"+loginId;
        //console.log(url);

        fetch(url)
        .then(resp => resp.json())
       // .then(data=>console.log(data))
       .then(data=>{
        setProduct(data)
        if(data == null)
            {
                alert("cart is empty !!! ");
                nav('/customerhome');
            }
    })
        //console.log(products)
    //    .then(d=>{
    //     setResdata(d)
    //     setArtistid(d[0].products.artist.artistId)
    //    console.log(d[0].products.artist.artistId)

            // if(d == null)
            // {
            //     alert("cart is empty !!! ");
            //     nav('/customerhome');
            // }
       //})
    
    },[]);
    
    function importAll(r) 
    {
        // array 
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('F:/cdac2022/Frontend/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));
    
    return(
         
        <div class="container-fluid">
            
           <h3>Products in cart</h3>
            <br/><br/>
        {/* <div class='row'>
            <div className="col md-4">
            <button type="submit"  class="btn btn-primary mt-4" onClick={(v)=>{
                 
                  console.log("Loged customer login id "+loginId);
                  var url = "http://localhost:8080/placeorder/"+loginId;
                  console.log(url); 
                  fetch(url)
                  .then(resp => resp.json())
                  .then(data=>console.log(data))               
                
                  

            }}>Place Order</button></div>
            </div> */}

            <div class='row'>
                <div className="col md-4">
                {/* <button type="submit"  class="btn btn-primary mt-4" onClick={()=>{nav('/placeOrder')}}>Place Order</button> */}
                </div>
            </div>

            <table className="table  ">
                <tr>
                    <th>Product Image</th>
                    <th>Product ID</th>
                    <th>Product  Name</th>
                    <th>Product Discription</th>
                    <th>Category</th>
                    <th>price</th>                 
                </tr>
                {
                    products.map((v)=>{
                       
                        var pid = v.product.productId;
                        var imgName = v.product.artist.artistId+'_'+pid;
                        console.log(imgName)
                        return(
                          
                             <tr>

                            <td><img src={images[imgName+'.jpg']} width="200" height="200"/></td> 
                                
                                <td>{v.product.productId}</td>
                                <td>{v.product.productName}</td>
                                <td>{v.product.productDiscription}</td>
                                <td>{v.product.category.categoryName}</td>
                                <td>{v.product.price}</td>
                                {/* <td><button class="btn btn-primary btn-sm" >Update</button></td>
                                <td><button class="btn btn-secondary btn-sm" >Delete</button></td>  */}
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ViewCart;