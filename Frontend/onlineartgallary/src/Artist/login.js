import { Navigate, useNavigate} from 'react-router-dom';

import axios from "axios";
import {  useState  } from "react";
let Login = () => {

    const myStyle={
        backgroundImage: 
        "url('https://media.istockphoto.com/illustrations/blur-gradient-sky-background-illustration-id889535070?k=20&m=889535070&s=612x612&w=0&h=mvu4HFuCUhSz4PbgP46qzbGOoUtBAu_M9ioXXHzdnu8=')",
        width:'62255px',
        height:'1000px',
        marginTop:'0px',
        // fontSize:'50px',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    
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

            setResdata(response.data);

            console.log(response.data);

            if(response.data.role == "Artist")
            {
            localStorage.setItem("user",JSON.stringify(response.data));
            
            nav('/artisthome');
            
            }
            else if(response.data.role == "Customer")
            {
                localStorage.setItem("user",response.data);
            
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
        
       
        <div class="container mt-3" >
            <h2>Login</h2>
            <br/>
            <form>
                <div class="row">
                    <div className="col-md-3">
                        <input type="text" name="user_id" class="form-control"
                        placeholder="LOGIN ID"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
                <br/><br/>
                <div class="row">
                    <div className="col-md-3">
                        <input type="password" name="password" class="form-control"
                        placeholder="PASSWORD"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
            <br/><br/>
            <div class="row">
                    <div className="col-md-3">
                        <button type="submit"  class="btn btn-primary mt-4" onClick={(v)=>{sandData(v)}}>Login</button>
                </div>
            </div>
            </form>
            <br/><br/>
            
            <h4>{err}</h4>
        </div>
    );
}

export default Login;