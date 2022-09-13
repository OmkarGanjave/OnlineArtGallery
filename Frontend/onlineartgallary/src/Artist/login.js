import axios from "axios";
import {  useState  } from "react";
let Login = () => {

    const[resData,setResdata] = useState([]);

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

        axios.post("http://localhost:8080/login",user).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
    }

    return(
        <div class="container mt-3">
            <h2>Login</h2>
            <br/>
            <form>
                <div class="row">
                    <input type="text" name="user_id" class="form-control"
                    placeholder="LOGIN ID"
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <br/><br/>
                <div class="row">
                <input type="password" name="password" class="form-control"
                placeholder="PASSWORD"
                onChange={(e)=>onInputChange(e)}
                />
                </div>
            <br/>
                <button type="submit"  class="btn btn-primary" onClick={(v)=>{sandData(v)}}>Login</button>
            </form>
            <br/><br/>
            
            <h4>{resData.role}</h4>
        </div>
    );
}

export default Login;