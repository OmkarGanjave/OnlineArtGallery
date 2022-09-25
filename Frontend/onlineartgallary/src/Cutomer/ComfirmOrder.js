import { useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import  CustomerNavBar from './customernavbar';
import StarRating from './starrating';
import './rating.css';
let ComfirmOrder = () => {
    let cust =JSON.parse(localStorage.getItem("customer"));
let ratingpid=JSON.parse(localStorage.getItem("ratingpid"));
let aid=JSON.parse(localStorage.getItem("aid"));
let nav=useNavigate();
console.log(ratingpid+" "+aid);
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);

    const[res,setResdata]=useState([]);
    const[index,setIndex]=useState();

    // useEffect(()=>{
    //     let loginId = cust.loginId;
    //     //console.log(loginId);
    //     var url = "http://localhost:8080/artistrating/"+ratingpid+"/"+index;
    //               console.log(url); 
    //               fetch(url)
    //               .then(resp => resp.json())
    //               .then(data=>setResdata(data))
                  
    
    // },[]);

    function importAll(r) 
    {
        // array 
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('C:/Users/omkar/OneDrive/Documents/OMKAR/C-DAC/March2022/Project/Online Art Gallary/ProjectOnlineArtGallery/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));
    let img=aid+"_"+ratingpid;

    return(
        <div>
        <div><CustomerNavBar/></div>
        <div className="jumbotron">
            <h2><b>Your order place successfully ... !</b></h2>
            <h4><b> Thank You ... !</b></h4>
            <br/>
            <div className='row'>
            <div className="col-md-4 text-center p-5">
                     
                        <a href="#" >
                        <img src={images[img+'.jpg']} width="100" height="100" className="rounded"/>
                        </a>
                     
                        </div >
                            <div className="col-md-4 text-center p-5">
                            <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
        
            <button
            type="button" 
            key={index}
            className={index <= ((rating && hover) || hover) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() =>{ setHover(index); }}
            onMouseLeave={() => {setHover(rating); }}
            onDoubleClick={() => {
                setRating(0);
                setHover(0);
                }}
          >
            <span className="star" >&#9733;</span>
          </button>
         
        );
      })}
    </div>
    <div>
    <button className="btn btn-primary" onClick={()=>{
                              
                                var url = "http://localhost:8080/artistrating/"+ratingpid+"/"+rating;
                                fetch(url)  ;                
                                console.log(url); 
                                                                         
                                nav('/comfirmOrder');
                            }}>Rating</button>
    </div>
                            
                            </div>
                    
             </div>
        </div>
        </div>
    )
}

export default ComfirmOrder;