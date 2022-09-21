import { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";

let UpdateProduct=()=>{

    
    let nav = useNavigate();
    let product1 =JSON.parse(localStorage.getItem('product'));
   // const[productid,setProductid] = useState();
   
    const[product,setProduct] = useState({  

        productId:0,
        productName:"",
        productDiscription:"",
        price:0,
        categoryName:" ",
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
    
   let update=()=>{
       
   }
   
   
    //  useEffect(()=>{
    //     fetch("http://localhost:8080/getproduct/"+product.productId).then(resp => resp.json()).then(data => setResdata(data))
    //     //console.log(res);
    //  },[]);

    return (

        <div className="container">
        <form action="" method="get" >
           
            <div className="mt-3 mb-3">
                <label htmlFor="productId" className="form-label">Product ID : </label>
                <input type="text" readOnly className="form-control-plaintext" id="productId" defaultValue={product.productId} />
            </div>

            <div className="mt-3 mb-3">
                <label htmlFor="productName" className="form-label"> productName: : </label>
                <input type="text" name="productName" id="productName" className="form-control" defaultValue={product.productName} />
            </div>
            
            <div className="mt-3 mb-3">
                <label htmlFor="productDiscription" className="form-label"> productDiscription : </label>
                <input type="text" name="productDiscription" id="productDiscription" className="form-control" defaultValue={product.productDiscription}/>
            </div>
           
            <div className="mt-3 mb-3">
                <label htmlFor="price" className="form-label"> productDiscription : </label>
                <input type="text" name="price" id="price" className="form-control"defaultValue={product.price} />
            </div>

            <div className="mt-3 mb-3">
                <label htmlFor="categoryName" className="form-label">categoryName : </label>
                <input type="text" readOnly name="categoryName" id="categoryName" className="form-control"defaultValue={product.categoryName} />
            </div>

            <div>
                <button className="btn btn-primary w-100" onClick={(e)=>update(e)} >update</button>
            </div>
        </form>
    </div>
    );
}
export default UpdateProduct;