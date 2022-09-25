import axios from "axios";
import { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";
import ArtistNavBar from './artistnavbar';

let UpdateProduct=()=>{

    
    let nav = useNavigate();

    let product1 =JSON.parse(localStorage.getItem('product'));
   // const[productid,setProductid] = useState();

 
   function importAll(r) 
   {
       // array 
       let images = {};
       r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
       return images;
   }

   const images = importAll(require.context('C:/Users/omkar/OneDrive/Documents/OMKAR/C-DAC/March2022/Project/Online Art Gallary/ProjectOnlineArtGallery/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));

    const[product,setProduct] = useState({  

        productId:0,
        productName:"",
        productDiscription:"",
        price:0,
        categoryName:"",
        });

        const{  
            productId,
            productName,
            productDiscription,
            price,
            categoryName,
            } = product;

            const onInputChange = (e) => {
                setProduct({...product,[e.target.name]:e.target.value});
                
            }; 
    
   let update=(e)=>
   {
    e.preventDefault();

    console.log("Update Product"+product.productName);
    let updateProduct = {

        productId:product1.productId,
        artistId:product1.artist.artistId,
        productName:product.productName,
        productDiscription:product.productDiscription,
        price:product.price,
        categoryName:product.categoryName

    }
    console.log("final product detils fro updatetion ");
    console.log(updateProduct);

    // update url
    var url = "http://localhost:8080/updateproduct";

    axios.post(url,updateProduct)
        .then(response=>{
            console.log(response.data);

            if(response.data != null)
            {
                alert("Product details updated succesfully !!! ")
                nav('/searchproduct');
            }
            else
            {
                alert("Product details updated succesfully !!! ")
                nav('/updateproduct');
            }
        })
   
    }
    

    var imageNAme = product1.artist.artistId+"_"+product1.productId;
    console.log("Image Name = "+imageNAme)
    
    return (
        
  <div  className='container-fluid justify-content-center'>
  <div><ArtistNavBar/></div>
        <div className='container-fluid justify-content-center' >
            <br/>
        <div className='row'>
        {/* <div className="col-sm-4">   
                {/* <img src={images[imageNAme+'.jpg']} width="350" height="450"/> 
            </div> */}
            <div className="col-sm-4">  
            <a href="/updateImage"> 
                <img src={images[imageNAme+'.jpg']} width="350" height="450"/>
            </a>
            </div>
        <div class="col-sm-4 ">
        <form >
            <div className="mt-3 mb-3">
                <label for="productId" className="form-label">Product ID : </label>
                <input type="text" readOnly className="form-control-plaintext" id="productId" Value={product1.productId} 
                onChange={(e)=>onInputChange(e)}
                />
            </div>

            <div className="mt-3 mb-3">
                <label for="productName" className="form-label"> productName: : </label>
                <input type="text" name="productName" id="productName" className="form-control" Value={product1.productName} 
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            
            <div className="mt-3 mb-3">
                <label for="productDiscription" className="form-label"> productDiscription : </label>
                <input type="text" name="productDiscription" id="productDiscription" className="form-control" Value={product1.productDiscription}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
           
            <div className="mt-3 mb-3">
                <label for="price" className="form-label"> product price : </label>
                <input type="text" name="price" id="price" className="form-control" Value={product1.price}
                onChange={(e)=>onInputChange(e)}
                 />
            </div>

            <div className="mt-3 mb-3">
                <label for="categoryName" className="form-label">categoryName : </label>
                <input type="text"  name="categoryName" id="categoryName" className="form-control" Value={product1.category.categoryName} 
                onChange={(e)=>onInputChange(e)}
                />
            </div>

            <div>
                <button className="btn btn-primary" onClick={(e)=>update(e)} >update</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </div>
    );
}
export default UpdateProduct;