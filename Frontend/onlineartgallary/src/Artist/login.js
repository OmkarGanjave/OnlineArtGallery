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
        
       
        <div className="container-fluid" >
            
            <br/>
            <div className="container" >
            <h2>Login</h2>
            <br/>
            <form>
                <div class="row">
                    <div className="col-md-3">
                        <input type="text" name="user_id" class="form-control"
                        placeholder="USER ID"
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
        </div>
    );
}

export default Login;