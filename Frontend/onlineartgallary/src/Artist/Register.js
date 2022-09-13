import axios from "axios";
import { useReducer, useState  } from "react";
let Register = () => {

    const[resData,setResdata] = useState([]);

    const[artist,setArtist] = useState({
        firstName:"",
        lastName:"",
        emailId:"",
        contactNo:"",
        address:"",
        userId:"",
        password:"",
        role:"Artist",
        status:1
    });

    const{  
            firstName,
            lastName,
            emailId,
            contactNo,
            address,
            userId,
            password,
            role,
            status} = artist;

    const onInputChange = (e) => {
        setArtist({...artist,[e.target.name]:e.target.value});
    }; 

    var sandData = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/reg",artist).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
    }

    return(
        <div class="container mt-3">
            <h2>Artist Register</h2>
            <br/>
            <form>
            <div class="row">
                <div class="col">
                   
                    <input type="text" name="firstName" class="form-control" placeholder="First Name"
                    onChange={(e)=>onInputChange(e)}
                    />

                </div>
                <div class="col">
                   
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name"
                    onChange={(e)=>onInputChange(e)}
                    />

                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="emailId" class="form-control" placeholder="Email Address"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div class="col">
                   
                    <input type="text" name="contactNo" class="form-control" placeholder="Contact Number"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="address" class="form-control" placeholder="Address"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div class="col">
                    
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="userId" class="form-control" placeholder="User ID"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div class="col">
                   
                    <input type="text" name="password" class="form-control" placeholder="Password"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
            </div>
            <br/><br/>
            <div class="row">
            <div class="col">
                <button type="submit"  class="btn btn-primary" onClick={(v)=>{sandData(v)}}>Register</button>
                </div>
                <div class="col">
                <button type="reset" className="btn btn-primary" >Clear</button>
                </div>
            </div>
            </form>

            {/* <br/><br/>
            <h2> Artist ID : {artist.userId} Artist pass : {artist.password} Artist firstName : {artist.firstName} Artist lastName : {artist.lastName}</h2>
            <br/><br/>
            <h2> Artist Email : {artist.emailId} Artist Contact : {artist.contactNo} Artist Address : {artist.address} Artist role :{artist.role}</h2>
            <br/><br/> */}
             <h4>{resData.emailId}</h4>
        </div>     
        
            
    );
}

export default Register;