import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import  CustomerNavBar from './customernavbar';
let ComfirmOrder = () => {
    let cust =JSON.parse(localStorage.getItem("customer"));

    const[res,setResdata]=useState([]);

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
        <div className="jumbotron">
            <h2><b>Your order place successfully ... !</b></h2>
            <h4><b> Thank You ... !</b></h4>
            <br/>
            
            {/* <div className="row"> */}
            <ul>
            {
                res.map((v)=>{
                    var pid = v.productId;
                    let img=v.artistId+"_"+pid;
                    return(
                    <div className="col-md-4 text-center p-5">
                       <ul>
                           <li>
                        <a href="#" >
                        <img src={images[img+'.jpg']} width="100" height="100" className="rounded"/>
                        </a>
                        <br/>
                        <h4>{v.productName}</h4>
                        </li>
                        </ul>
                    </div>)
                })
            }
            {/* </div> */}
            </ul>
        </div>
        </div>
    )
}

export default ComfirmOrder;