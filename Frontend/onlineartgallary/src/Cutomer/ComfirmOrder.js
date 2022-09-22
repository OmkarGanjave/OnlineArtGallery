import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Rating } from "./RatingStyle";
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

    const images = importAll(require.context('F:/cdac2022/Frontend/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));
    

    return(
        <div className="container">
            <h2><b>Your order place successfully ... !</b></h2>
            <h4><b> Thank You ... !</b></h4>
            <br/>
            <Rating/>
            <div className="row">
            {
                res.map((v)=>{
                    var pid = v.productId;
                    let img=v.artistId+"_"+pid;
                    return(
                    <div className="col-md-4 text-center p-5">
                        <a href="#" >
                        <img src={images[img+'.jpg']} width="200" height="200" className="rounded"/>
                        </a>
                        <br/>
                        <h4>{v.productName}</h4>
                    </div>)
                })
            }
            </div>
        </div>
    )
}

export default ComfirmOrder;