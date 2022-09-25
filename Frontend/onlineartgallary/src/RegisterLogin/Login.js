import { Navigate, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector }from 'react-redux';
import  {login} from '../Home/loggedSlice';
import axios from "axios";
import {  useState  } from "react";
import LoginNavBar from "./LoginNavBar";

let Login = () => {
  
 
    
    let nav = useNavigate();
    
    const mystate = useSelector((state)=>state.myreducer)
    const dispatch = useDispatch();
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

        dispatch(login());
        console.log("state modified");


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
            else if(response.data.role == "Admin")
            {
                localStorage.setItem("admin",JSON.stringify(response.data));
            
                nav('/adminhome');
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
        <div>
        <div>
            <LoginNavBar/>
        </div>
       
        <div class="bg-img" >
           
            <div style={ {
            width: "360px",
            height:"500px",
            padding: "8% 0 0",
            margin: "auto"
          }} >
            <form className="container  ">
            <h2 className="text-white">Login</h2>
            <br/>
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
                    <div className="">
                        <input type="password" name="password" class="form-control"
                        placeholder="PASSWORD"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
            <br/>
            <div class="row">
                    <div className="w3-button w3-block w3-teal">
                        <button type="submit"  class="btn btn-primary mt-4" onClick={(v)=>{sandData(v)}}>Login</button>
                </div>
                <br/>
                <div>
                   <a href="/register"> <h4 className="text-white">Register</h4></a>
                </div>
                <br/>
            </div>
            </form>
            </div>
            <br/>
            
            <h4>{err}</h4>
        </div>
        </div>
    );

    
}

export default Login;