import { useEffect,user, useState } from "react";
import pic from 'F:/cdac2022/Project/OnlineArtGallery/OnlineArtGallery/Frontend/onlineartgallary/src/Artist/3_1.jpg';

let SearchProduct = () => {

    let user =JSON.parse(localStorage.getItem('user'));

    const[res,setResdata]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/searchproduct/"+user.user_id).then(resp => resp.json()).then(data => setResdata(data))
    },[]);
    
    
    return(
        <div class="container-fluid">
           {/* <h4>{user.user_id}</h4> */}
           <h3>{user.user_id}'s Products</h3>
            <br/><br/>
            <table className="table ">
                <tr>
                    <th>Product Image</th>
                    <th>Product ID</th>
                    <th>Product  Name</th>
                    <th>Product Discription</th>
                    <th>Category</th>
                    <th>price</th>                 
                </tr>
                {
                    res.map((v)=>{
                        return(
                            <tr>
                                <td>
                                <img src={pic}width="200" height="150"/></td>
                                <td>{v.productId}</td>
                                <td>{v.productName}</td>
                                <td>{v.productDiscription}</td>
                                <td>{v.category.categoryName}</td>
                                <td>{v.price}</td>
                                <td><button class="btn btn-primary btn-sm" >Update</button></td>
                                <td><button class="btn btn-secondary btn-sm" >Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default SearchProduct;