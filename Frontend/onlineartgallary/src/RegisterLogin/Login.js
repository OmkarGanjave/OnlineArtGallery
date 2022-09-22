import { Navigate, useNavigate} from 'react-router-dom';

import axios from "axios";
import {  useState  } from "react";
let Login = () => {

    
    
    let nav = useNavigate();

    const[resData,setResdata] = useState([]);
    const[err,setErr] = useState("");

    const[user,setArtist] = useState({
        user_id:"",
        password:"",
    });

    const{
        user_id,
        password,
    } = user;

    const onInputChange = (e) => {
        setArtist({...user,[e.target.name]:e.target.value});
    }; 

    var sandData = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/login",user)
        .then(response=>{

            console.log(response.data.role);
            setResdata(response.data);

            console.log(response.data);

            if(response.data.role == "Artist")
            {
            localStorage.setItem("artist",JSON.stringify(response.data));
            
            nav('/searchproduct');
            
            }
            else if(response.data.role == "Customer")
            {
                localStorage.setItem("customer",JSON.stringify(response.data));
            
                nav('/customerhome');
            }
            

        })
        .catch(error=>{
                    if(error)
                    {
                        console.log("error");
                        setErr("LOGIN FAILED");
                    }
                    
                    });
        ///console.log(resData);
        
        
    }

    return(
        
       
        <div class="container mt-3" style={ {
            width: "360px",
            padding: "8% 0 0",
            margin: "auto"
          }} >
            <h2>Login</h2>
            <br/>
            <form className='form-body'>
                <div class="row">
                    <div className="col">
                        <input type="text" name="user_id" class="form-control"
                        placeholder="LOGIN ID"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
                <br/><br/>
                <div class="row">
                    <div className="col">
                        <input type="password" name="password" class="form-control"
                        placeholder="PASSWORD"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
            <br/><br/>
            <div class="row">
               <div className="col">
                        <button type="submit" class="btn btn-primary" onClick={(v)=>{sandData(v)}}>Login</button>
                </div>
          
                <div className="col">
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            </form>
           
            <br/><br/>
            
            <h4>{err}</h4>
        </div>
    );
}

export default Login;