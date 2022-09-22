import { useEffect,useState } from "react";
import img from 'F:/cdac2022/Frontend/onlineartgallary/src/Artist/user.png';
let CustPersnoalInfo = () => {

    let cust =JSON.parse(localStorage.getItem("customer"));

    let loginId = cust.loginId;

    const[persnoalInfo,setPersnoalInfo] = useState([]);

    useEffect(()=>{
        var url = "http://localhost:8080/custprofile/"+loginId;

        console.log(url);

        fetch(url)
        .then(resp => resp.json())
        .then(data =>{
            setPersnoalInfo(data);
            console.log(data)    
        })
    },[])
    return(
        <div className="container">
            <h2>Persnoal Information</h2>
            <br/><br/>
            <div className="row">
            <div className="col-md-8 " style={{width:"250px"}}>
                <img  src={img} style={{width:"150%"}}/>
            </div>
            <div className="col-md-3 text-start">
                
                <br/>
                <h4><b>First Name </b></h4>
                <br/>
                <h4><b>Last Name </b></h4>
                <br/>
                <h4><b>Email </b></h4>
                <br/>
                <h4><b>Contact Number </b></h4>
                <br/>
                <h4><b>Address </b></h4>
                <br/>
            </div>
            <div className="col-md-3 text-start" style={{width:"250px"}}>
            {/* <h4><b >{persnoalInfo.artistId}</b></h4> */}
            <br/>
            <h4><b> {persnoalInfo.firstName}</b></h4>
            <br/>
            <h4><b> {persnoalInfo.lastName}</b></h4>
            <br/>
            <h4><b>{persnoalInfo.emailId}</b></h4>
            <br/>
            <h4><b>{persnoalInfo.contactNo}</b></h4>
            <br/>
            <h4><b>{persnoalInfo.address}</b></h4>
            </div>
            
            
            </div>
        </div>
    )
}

export default CustPersnoalInfo;