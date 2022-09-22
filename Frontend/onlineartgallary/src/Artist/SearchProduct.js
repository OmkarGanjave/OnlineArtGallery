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
           <nav className="navbar navbar-expand-sm nav-tabs justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/persnoalinfo">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/addproduct">Add New Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Review Rating</a>
                    </li>
                 </ul>
            </nav>
            <br/>
           
            <div className="row">
            
            
                {
                    
                    res.map((v)=>{
                        var pid = v.productId;
                        var imgName = artistId+'_'+pid;
                        
                        return(
                                <div className="col-sm-3 text-start">
                        <div className="card" style={{width:"250px"}}>
                            <img src={images[imgName+'.jpg']} width="250" height="250"/>
                        <div className="card-body">
                        <p><b >{v.productName}</b></p>
                        
                        <dl>
                            <dt>Product Details </dt> 
                            <dd>{v.productDiscription}</dd>
                        </dl>
                        
                        <p><b>Price </b> {v.price} </p>
                        <button className="btn btn-primary btn-sm" onClick={()=>{updateProduct(v)}}>Update</button>

                        <button className="btn btn-danger btn-sm" 
                        onClick={()=>{
                            console.log("selected product is for deletion "+v.productId);

                            var url = "http://localhost:8080/deleteproduct/"+v.productId+"/0";

                            console.log(url);

                            fetch(url).then(resp =>{ resp.json()
                                console.log(resp);
                            
                            

                                //console.log(data);
                                if(resp.ok == true)
                                {
                                    
                                    alert("Product deleted succesfully !!! ");
                                    window.location.reload();
                                    nav('/searchproduct');
                                }    
                                else
                                {
                                    alert("Failed to Product deleted Try again !!! ");
                                    nav('/searchproduct');
                                }
                            })
                        }}
                        >Delete</button>
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