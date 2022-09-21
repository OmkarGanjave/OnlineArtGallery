import {Link,Route,Routes} from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from "react";

import { Navigate, useNavigate} from 'react-router-dom';

let  AddProduct = () => {

    //const[category,setCategory] = useState([]);

    // useEffect(()=>{
    //   fetch("http://localhost:8080/getcategories")
    //   .then(resp => resp.json())
    //   .then(data=>setCategory(data))
    //   // console.log(allProducts);
    //   console.log(category)
    // },[])

    let nav = useNavigate();

    let user =JSON.parse(localStorage.getItem('artist'));

    const[addedProduct,setAddedProduct] = useState([]);

    const[product,setProduct] = useState({  
        loginId:user.loginId,
        productName:"",
        productDiscription:"",
        price:0,
        categoryName:" ",
        }); 

    const{  
        artistId,
        productName,
        productDiscription,
        price,
        categoryName,
        } = product;

    const[artistid,setArtistid] = useState();
    const[productid,setProductid] = useState();

    const onInputChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value});
        //setFile({...file,[e.target.name]:e.target.files[0]});
    }; 

    var addProduct = (e) => {
        e.preventDefault();
        
        console.log(product);

        axios.post("http://localhost:8080/addProduct",product)
        .then(response=>{setAddedProduct(response.data)

            alert("Product detials uploaded successfully.")

            console.log(response.data.productId)
            setProductid(response.data.productId)

            localStorage.setItem("productId",JSON.stringify(response.data.productId));

            // console.log(response.data.loginId)
            //setArtistid(response.data.loginId)
            
            //localStorage.setItem("artistId",JSON.stringify(response.data.loginId));

            nav('/uploadImage');
        })
        .catch(error=>console.log(error));
        

    }

    

    return(
        <div>
           <h2>Add Product</h2>
            <br/>
                <form>
                    <div className='row'>
                        <div class="col-sm-6 offset-sm-3">
                            <input type="text" name="productName" class="form-control" placeholder="Product Name"
                            onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                        <br/><br/>
                        <div className="col-sm-6 offset-sm-3">
                           {/* <select name="categoryName" id="categoryName" className='dropdown'>
                                <option value="painting">painting</option>
                                <option value="sclupture">sclupture</option>
                                <option value="sketche">sketche</option>
                            </select> */}
                            <input type="text" name="categoryName" class="form-control" placeholder="Product category"
                            onChange={(e)=>onInputChange(e)}
                        />   
                        
                        </div>
                    <br/><br/>
                        <div class="col-sm-6 offset-sm-3">
                            <input type="textarea" name="productDiscription" class="form-control" placeholder="product Description"
                            onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                        <br/><br/>
                        <div className="col-sm-6 offset-sm-3">
                            <input type="number" name="price" class="form-control" placeholder="Product price"
                           onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                    </div>
                    <br/>
                        <div class="col-sm-2 offset-sm-3">
                            <br/>
                            <button type="submit" class="btn btn-primary mt-4" onClick={(v)=>{addProduct(v)}}> AddProduct </button> 
                         </div>
                </form>
              
                
        </div>
    );
} 

export default AddProduct;