import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom';
import  CustomerNavBar from './customernavbar';
let ViewCart = ()=>{

    let cust =JSON.parse(localStorage.getItem("customer"));
    const[res,setResdata]=useState([]);
    const[products,setProduct] = useState([]);
    const[artistId,setArtistid]=useState();
    let loginId = cust.loginId;
    let nav = useNavigate();
    useEffect(()=>{
        var url = "http://localhost:8080/viewcart/"+loginId;
       

        fetch(url)
        .then(resp => resp.json())
      
       .then(data=>{
        setProduct(data)
        if(data == null)
            {
                alert("cart is empty !!! ");
                nav('/customerhome');
            }
    })
    },[]);
    
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
        <div class="container-fluid">
            
           <h3>Products in cart</h3>
            <br/>
            
            <nav className="navbar navbar-expand-sm nav-tabs justify-content-center">
                <ul className="navbar-nav">   
                    <li className="nav-item">
                        <a className="nav-link " href="/placeOrder"><b>Place Order</b></a>
                    </li>
                 </ul>
            </nav>

            </div>
            <br/>
            <table className="table table-bordered">
            <thead className="table table-primary table-striped">
                <tr>
                    <th>Product Image</th>
                
                    <th>Product  Name</th>
                    <th>Product Discription</th>
                    <th>Category</th>
                    <th>price</th>    
                                 
                </tr>
            </thead>
                {
                    products.map((v)=>{
                       
                        var pid = v.product.productId;
                        var imgName = v.product.artist.artistId+'_'+pid;
                        console.log(imgName)
                        return( 
                             <tr>
                                <td><img src={images[imgName+'.jpg']} width="200" height="200"/></td>      
                                <td><b>{v.product.productName}</b></td>
                                <td><b>{v.product.productDiscription}</b></td>
                                <td><b>{v.product.category.categoryName}</b></td>
                                <td><b>{v.product.price}</b></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ViewCart;