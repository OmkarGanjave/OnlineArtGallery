
import { useState } from "react";

let  AddProduct = () => {

    let user =JSON.parse(localStorage.getItem('user'));

    const[product,setProduct] = useState({  
        artistId:user.user_id,
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

    const[file,setFile]=useState([]);

    const onInputChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value});
        setFile({...file,[e.target.name]:e.target.files[0]});
    }; 

    var addProduct = (e) => {
        e.preventDefault();
        
        console.log(product);
        console.log(file);

        const formaData = new FormData();
        formaData.append(product);
        formaData.append(file);

        console.log(formaData.file);


        
        let res = fetch("http://localhost:8080/addproduct",{method:'POST',body:formaData});
        
        if(res == 1)
        {
            console.log("Product Added !");
        }
        else
        {
            console.log("Product not Added !");
        }

    }

    

    return(
        <div>
           <h2>Add Product</h2>
            <br/>
                <form>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3">
                            <input type="text" name="productName" class="form-control" placeholder="Product Name"
                            onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                        <br/><br/>
                        <div class="col-sm-6 offset-sm-3">
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
                        <div class="col-sm-6 offset-sm-3">
                            <input type="number" name="price" class="form-control" placeholder="Product price"
                           onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                    </div>
                    <br/>
                        <div class="col-sm-2 offset-sm-3">
                            <input type="file" name="file" class="form-control"
                            enctype="multipart/form-data"
                            onChange={(e)=>setFile(e.target.files[0])}
                            /> 
                            <br/>
                            <button type="submit" class="btn btn-primary mt-4" onClick={(v)=>{addProduct(v)}}> AddProduct </button> 
                         </div>
                </form>
        </div>
    );
} 

export default AddProduct;