import { useEffect,user, useState } from "react";
import {useNavigate} from 'react-router-dom'

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

    let user =JSON.parse(localStorage.getItem('artist'));

    const[res,setResdata]=useState([]);
    const[artistId,setArtistid]=useState();

    useEffect(()=>{
        console.log(user.user_id);
        var url = "http://localhost:8080/searchproduct/"+user.user_id;
        console.log(url);
        fetch(url).then(resp => resp.json())
        .then(data =>{
            
            setResdata(data)
            setArtistid(data[0].artist.artistId)
            // console.log(data[0].artist.artistId)    
        })
       
        // console.log(res.artist.loginId.loginId);
    },[]);
    
    const[product,setProduct] = useState({  
        userId:user.user_id,
            productId:0,
            productName:"",
            productDiscription:"",
            price:0,
            categoryName:" ",
            });
    
            const{  
               customerId,
                productId,
                productName,
                productDiscription,
                price,
                categoryName,
                } = product;
    
                const onInputChange = (e) => {
                    setProduct({...product,[e.target.name]:e.target.value});
                    
                };

    let updateProduct=(e)=>{
        //let pid=product.productId;
       
        localStorage.setItem('product',JSON.stringify(e));

        console.log(e);
        console.log(e.productId);
        nav('/updateproduct');
    }
    
    return(
        <div className="container">
            
            <br/><br/>
           {/* <h4>{user.user_id}</h4> */}
           <h3><b> Products </b></h3>
            
            <button class="btn btn-primary" onClick={()=>{nav('/addproduct')}}>AddProduct</button>
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
                        // console.log(imgName);
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
                        <button className="btn btn-primary btn-sm" onClick={()=>{updateProduct(v)}}>Update</button>

                        <button className="btn btn-secondary btn-sm" >Delete</button>
                        </div>
                        </div>
                        <br/><br/>
                        
                    
                             <br/><br/>
                            
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SearchProduct;