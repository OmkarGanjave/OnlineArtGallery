import { useEffect,useState } from "react";

let PersnoalInfo = () => {

    let user =JSON.parse(localStorage.getItem('user'));

    const[persnoalInfo,setPersnoalInfo] = useState([]);

    useEffect(()=>{
        var url = "http://localhost:8080/profile/"+user.loginId;

        console.log(url);

        fetch(url)
        .then(resp => resp.json())
        .then(data =>{
            
            setPersnoalInfo(data);
            console.log(data)    
        })
    },[])
    return(
        <div>
            <h2>{persnoalInfo.firstName}</h2>
            
            <h2>{persnoalInfo.lastName}</h2>
            
        </div>
    )
}

export default PersnoalInfo;