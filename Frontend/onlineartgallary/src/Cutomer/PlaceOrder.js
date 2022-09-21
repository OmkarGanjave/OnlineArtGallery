import { useEffect,useState } from "react";

let PlaceOrder = ()=>{

    let cust =JSON.parse(localStorage.getItem("customer"));
    const[res,setResdata]=useState([]);
    // const[products,setProduct] = useState([]);
    // const[artistId,setArtistid]=useState();
    let totalPrice=0;

    useEffect(()=>{
        let loginId = cust.loginId;
        //console.log(loginId);
        var url = "http://localhost:8080/placeorder/"+loginId;
                  console.log(url); 
                  fetch(url)
                  .then(resp => resp.json())
                  .then(data=>setResdata(data))
                  
    
    },[]);
    
    function importAll(r) 
    {
        // array 
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('E:/CDAC/WP Programming/React Programming/onlineartgallary/src/images', false, /\.(png|jpe?g|svg)$/));
    
    return(
         
        <div class="container-fluid ">
            
           <h3>Products in cart</h3>

            <br/><br/>      
            <table className="table  table-borderd ">
                <tr>
                    <th>Product Image</th>
                    <th>Product  Name</th>
                    <th>price</th>                 
                </tr>
                {
                    res.map((v)=>{
                        
                        var pid = v.productId;
                        let img=v.artistId+"_"+pid;
                        totalPrice=totalPrice+v.price;
                       // console.log("TotalPrice:"+totalPrice)
                        return(
                                
                             <tr>
                            <td><img src={images[img+'.jpg']} width="100" height="100"/></td>                          
                            {/* <td>{v.productId}</td> */}
                                <td>{v.productName}</td>
                                <td>{v.price}</td> 

                            </tr>
                        )
                    })
                   
                }
                 <tr>
                        <th colSpan="3" align="right" >Total Price :{ totalPrice}</th>
                </tr>
            </table>
        </div>

       
        
    )
}

export default PlaceOrder;