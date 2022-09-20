import { useEffect,user, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Header from "../Home/Header";
import Header2 from "../Home/ArtistHeader";
let SearchProduct = () => {

    let nav = useNavigate();

    function importAll(r) 
    {
        // array 
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('F:/cdac2022/Frontend/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));

    let user =JSON.parse(localStorage.getItem('user'));

    const[res,setResdata]=useState([]);
    const[artistId,setArtistid]=useState();

    useEffect(()=>{
        fetch("http://localhost:8080/searchproduct/"+user.user_id).then(resp => resp.json())
        .then(data =>{
            
            setResdata(data)
            setArtistid(data[0].artist.artistId)
            console.log(data[0].artist.artistId)    
        })
       
        // console.log(res.artist.loginId.loginId);
    },[]);
    

    
    return(
        <div className="container">
            <Header2/>
            <br/><br/>
           {/* <h4>{user.user_id}</h4> */}
           <h3><b> Products </b></h3>
            
            {/* <button class="btn btn-primary" onClick={()=>{nav('/addproduct')}}>AddProduct</button> */}
            <br/><br/>
            <div className="row">
            
            {/* <table className="table ">
                <tr>
                    <th>Product Image</th>
                    <th>Product ID</th>
                    <th>Product  Name</th>
                    <th>Product Discription</th>
                    <th>Category</th>
                    <th>price</th>                 
                </tr> */}
                {
                    
                    res.map((v)=>{
                        var pid = v.productId;
                        var imgName = artistId+'_'+pid;
                        return(
                                <div className="col-sm-4">
                        <div className="card" style={{width:"250px"}}>
                        <img src={images[imgName+'.jpg']} width="250" height="250"/>
                        <div className="card-body">
                        <p><b>{v.productName}</b></p>
                        <br/>
                        <p><b>Product Details :-</b>{v.productDiscription}</p>
                        <br/>
                        <p><b>Product Price :-</b>{v.price} </p>
                        <button className="btn btn-primary btn-sm" >Update</button>

                        <button className="btn btn-secondary btn-sm" >Delete</button>
                        </div>
                        </div>
                        <br/><br/>
                        
                    
                             <br/><br/>
                            {/* <tr>
                                <td>
                                <img src={images[imgName+'.jpg']} width="200" height="150"/></td>
                                <td>{v.productId}</td>
                                <td>{v.productName}</td>
                                <td>{v.productDiscription}</td>
                                <td>{v.category.categoryName}</td>
                                <td>{v.price}</td>
                                <td><button className="btn btn-primary btn-sm" >Update</button></td>
                                <td><button className="btn btn-secondary btn-sm" >Delete</button></td>
                        </tr> */}
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SearchProduct;