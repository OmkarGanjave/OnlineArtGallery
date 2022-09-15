import { useState } from "react";

let  AddProduct = () => {

    // const[product,setProduct] = useState({  
    //     productName,
    //     productDesc,
    //     price,
    //     category,
    //     }); 

    // const{  
    //     productName,
    //     productDesc,
    //     price,
    //     category,
    //     } = product;

    // const onInputChange = (e) => {
    //     setProduct({...product,[e.target.name]:e.target.value});
    // }; 

    // const{
    //     file,
    // } = file;

    return(
        <div>
           <h2>Add Product</h2>
            <br/>
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" name="productName" class="form-control" placeholder="Product Name"
                            // onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                        <div class="col">
                            <input type="text" name="category" class="form-control" placeholder="Product category"
                            // onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                    </div>
                    <br/><br/>
                    <div class="row">
                        <div class="col">
                            <input type="textarea" name="productDesc" class="form-control" placeholder="product Description"
                            // onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                        <div class="col">
                            <input type="number" name="price" class="form-control" placeholder="Product price"
                            // onChange={(e)=>onInputChange(e)}
                        />   
                        </div>
                    </div>
                    <br/><br/>
                    <div class="row">
                        <div class="col">
                            <input type="file" name="file" class="form-control" 
                                // onChange={(e)=>onInputChange(e)}
                            />   
                        </div>
                    </div>
                </form>
        </div>
    );
} 

export default AddProduct;