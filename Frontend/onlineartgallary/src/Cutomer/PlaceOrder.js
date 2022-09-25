import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import  CustomerNavBar from './customernavbar';
//import "E:/CDAC/WP Programming/React Programming/onlineartgallary/src/style.css";
let PlaceOrder = ()=>{

    let nav = useNavigate();

    let cust =JSON.parse(localStorage.getItem("customer"));
    const[res,setResdata]=useState([]);
    
    let totalPrice=0;

    useEffect(()=>{
        let loginId = cust.loginId;
        //console.log(loginId);
        var url = "http://localhost:8080/placeorder/"+loginId;
                  console.log(url); 
                  fetch(url)
                  .then(resp => resp.json())
                  .then(data=>setResdata(data))
                  
    
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
 <div className="container-fluid ">

         <div className="container-fluid ">
             <br/>
                 <br/>
                 <nav className="navbar navbar-expand-sm nav-tabs justify-content-center">
                 <ul className="navbar-nav">
                     
                     <li className="nav-item">
                         <a className="nav-link" href="/comfirmOrder"><b>Confirm Order</b></a>
                     </li>
                    
                  </ul>
             </nav>
             <br/>
                 <br/>
             <div className="row">
             <div className="col-sm-6 offset-sm-3 ">
             <div className="table-responsive-sm ">
              <table className="table "> 
             <thead className="table-dark">
                 <tr>
                     <th>Product Image</th>
                     <th>Product  Name</th>
                     <th>price</th>               
                 </tr>
             </thead>
             <tbody className="table-light">
                 {
                     res.map((v)=>{
                         var pid = v.productId;
                         let img=v.artistId+"_"+pid;
                         totalPrice=totalPrice+v.price;
                        // console.log("TotalPrice:"+totalPrice)
                         return(
                                 
                              <tr>
                             <td><img src={images[img+'.jpg']} width="100" height="120" className="rounded"/></td>                          
                             {/* <td>{v.productId}</td>  */}
                             <td ><b>{v.productName}</b></td>
                             <td><b>{v.price}</b></td> 
 
                             </tr>
                         )
                     })
                    
                 }
                 </tbody>
                 <tfoot className="table-dark">
                  <tr>
                     <th></th>
                     <th>Total Price :</th>
                     <th className="text-center" >{totalPrice}</th>
                 </tr>
                 </tfoot>
             </table> 
             </div>
             
             </div>
             
             </div>  
 
         </div>
 </div>
        </div>
         
     )  

    
}

export default PlaceOrder;