import { useEffect,useState } from "react";
import { Navigate, useNavigate} from 'react-router-dom';
import ArtistNavBar from './artistnavbar';
import img from './user.png';
let PersnoalInfo = () => {

    let user =JSON.parse(localStorage.getItem('artist'));

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
        <div><ArtistNavBar/></div>
        <div className="container">
        <h1 className="text-start"><b>Persnoal Information</b></h1>
        <br/><br/>
        <div className="row">
        
        <div className="col-md-3 text-start">
            <h4><b>Artist Id</b> </h4>
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
        <div className="col-md-8 text-start" style={{width:"250px"}}>
        <h4><b >{persnoalInfo.artistId}</b></h4>
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
        <div className="col" >
            <img  src={img} style={{width:"50%"}}/>
        </div>
        
        </div>
    </div>
    </div>
    )
}

export default PersnoalInfo;