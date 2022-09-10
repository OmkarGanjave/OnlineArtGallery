import { useEffect, useReducer, useState  } from "react";
let Register = () => {

    let init = {
        firstName:"",
        lastName:"",
        emailId:"",
        contactNo:"",
        address:"",
        userId:"",
        password:"",
        role:"Artist",
        status:1
    }

    let reducer = (state,action)=>{
        switch(action.type)
        {
            case 'reg':
                return{...state,[action.field]:[action.value]}
            break;
            
            case 'clear':
                return init
            break;
        }
    }

    const[artist,dispatch] = useReducer(reducer,init);
    
    const[resData,setRes] = useState("");

    var sandData = (e) => {
        e.preventDefault();
        //console.log(e);
        //additiona info about req
        const reqIfno = {
                            method:'POST',
                            headers:{"content-type":"application/json"},
                            body: JSON.stringify({
                                
                                firstName:artist.firstName,
                                lastName:artist.lastName,
                                emailId:artist.emailId,
                                contactNo:artist.contactNo,
                                address:artist.address,
                                userId:artist.userId,
                                password:artist.password,
                                role:artist.role,
                                status:artist.status,
                            })

                        }
        //featch
        fetch("http://localhost:8080/reg",reqIfno).then(res => res.json()).then(data => setRes(data));
    }

    return(
        <div class="container mt-3">
            <h2>Artist Register</h2>
            <br/>
            <form>
            <div class="row">
                <div class="col">
                   
                    <input type="text" name="firstName" class="form-control" placeholder="First Name"
                    onChange={(v)=>{dispatch({type:'reg',field:'firstName',value:v.target.value})}}
                    />

                </div>
                <div class="col">
                   
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name"
                    onChange={(v)=>{dispatch({type:'reg',field:'lastName',value:v.target.value})}}
                    />

                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="emailId" class="form-control" placeholder="Email Address"
                    onChange={(v)=>{dispatch({type:'reg',field:'emailId',value:v.target.value})}}
                    />
                </div>
                <div class="col">
                   
                    <input type="text" name="contactNo" class="form-control" placeholder="Contact Number"
                    onChange={(v)=>{dispatch({type:'reg',field:'contactNo',value:v.target.value})}}
                    />
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="address" class="form-control" placeholder="Address"
                    onChange={(v)=>{dispatch({type:'reg',field:'address',value:v.target.value})}}
                    />
                </div>
                <div class="col">
                    
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col">
                    
                    <input type="text" name="userId" class="form-control" placeholder="User ID"
                    onChange={(v)=>{dispatch({type:'reg',field:'userId',value:v.target.value})}}
                    />
                </div>
                <div class="col">
                   
                    <input type="text" name="password" class="form-control" placeholder="Password"
                    onChange={(v)=>{dispatch({type:'reg',field:'password',value:v.target.value})}}
                    />
                </div>
            </div>
            <br/><br/>
            <div class="row">
            <div class="col">
                <button type="submit"  class="btn btn-primary" onClick={(v)=>{sandData(v)}}>Register</button>
                </div>
                <div class="col">
                <button type="reset" className="btn btn-primary" onClick={()=>{dispatch({type:'clear'})}}>Clear</button>
                </div>
            </div>
            </form>

            <br/><br/>
            <h2> Artist ID : {artist.userId} Artist pass : {artist.password} Artist firstName : {artist.firstName} Artist lastName : {artist.lastName}</h2>
            <br/><br/>
            <h2> Artist Email : {artist.emailId} Artist Contact : {artist.contactNo} Artist Address : {artist.address} Artist role :{artist.role}</h2>
            <br/><br/>
           
        </div>     
        
            
    );
}

export default Register;