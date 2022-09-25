import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import  CustomerNavBar from './customernavbar';

import './rating.css';
// import StarRating from './starrating';
//import "E:/CDAC/WP Programming/React Programming/onlineartgallary/src/style.css";
let PlaceOrder = ()=>{

    let nav = useNavigate();

    let cust =JSON.parse(localStorage.getItem("customer"));
    const[res,setResdata]=useState([]);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
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
                 <h2><b>Your order place successfully ... !</b></h2>
            <h4><b> Thank You ... !</b></h4>
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
                     <th>Rating</th>           
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
                            <td><button className="btn btn-warning" onClick={()=>{
                                localStorage.setItem("ratingpid",JSON.stringify(pid))
                                localStorage.setItem("aid",JSON.stringify(v.artistId))
                                
                                nav('/comfirmOrder');
                            }}>Rating</button></td>
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
                     <th></th>
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