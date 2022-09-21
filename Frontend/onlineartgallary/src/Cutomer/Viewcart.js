import { useEffect } from "react";

let ViewCart = ()=>{

    let cust =JSON.parse(localStorage.getItem("customer"));

    let loginId = cust.loginId;

    useEffect(()=>{
        var url = "http://localhost:8080/viewcart/"+loginId;
        console.log(url);

      fetch(url)
      .then(resp => resp.json())
      .then(data=>console.log(data))
      // console.log(allProducts);
    //   console.log(allProducts)
    },[])
    
    return(
        <div>
            
        </div>
    )
}

export default ViewCart;