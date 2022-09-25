import { useEffect, useState } from 'react';
import {Link,useResolvedPath,useMatch} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {login,logout,} from "./loggedSlice";
import {useDispatch,useSelector  } from 'react-redux';
import NavBar from './NavBar';
import MainHome from './MainHome';
let Home = () => {
 
  

    let nav = useNavigate();

    const[allProducts,setProduct] = useState([]);
    const mystate = useSelector((state)=>state.myreducer);

    const dispatch = useDispatch();

    useEffect(()=>{
      fetch("http://localhost:8080/allproducts")
      .then(resp => resp.json())
      .then(data=>setProduct(data))
      // console.log(allProducts);
      console.log(allProducts);
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
        
   
      <div className="bg-img-home">
    <div><NavBar/></div>
 
            <div className="row">
            {
              allProducts.map((v)=>{
                      var pid = v.productId;
                      var imgName = v.artist.artistId+'_'+pid;
                      // console.log(imgName);
                return(
              
                  <div >
                      <MainHome/>
                
                  </div>
                )
                
              })
            }
            </div>
            </div>
          
           
           
    )

}

export default Home;