import axios from "axios";
import { useReducer, useState  } from "react";
import { Navigate, useNavigate} from 'react-router-dom';
import LoginNavBar from "./LoginNavBar";
const init = {
    firstName:{value:"", hasError: true,touched: false, error:""},
    lastName:{value:"", hasError: true,touched: false, error:""},
    emailId:{value:"", hasError: true,touched: false, error:""},
    contactNo:{value:"", hasError: true,touched: false, error:""},
    address:{value:"", hasError: true,touched: false, error:""},
    userId:{value:"", hasError: true,touched: false, error:""},
    password:{value:"", hasError: true,touched: false, error:""},
    role:{value:"", hasError: true,touched: false, error:""},
    status:{value:"", hasError: true,touched: false, error:""},
    isFormValid: false
}


const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
        case "userId":
            let uname = /^[a-zA-Z0-9]+$/;
            // /^[a-z]+[0-9]+@[a-z]+\.[a-z]+$/
            if (!uname.test(value)) {
                hasError = true;
                error = "Username is like Emailid"
            }
            break;

            case "firstName":
                let fname = /^[A-Z][a-z]{2,15}$/;
                if (!fname.test(value)) {
                    hasError = true;
                    error = "First letter capital rest small"
                }
                break;

            case "lastName":
                let lname =  /^[A-Z][a-z]{2,15}$/;
                if (!lname.test(value)) {
                    hasError = true;
                    error = "First letter capital rest small"
                }
                break;

            case "emailId":
                    let email = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
                    if (!email.test(value)) {
                        hasError = true;
                        error = "email ex:- abcd@xyz.pqr"
                    }
                    break;

            case "address" :
                    let regex5 =  /^[a-zA-Z\s,]{2,15}$/;
                    if(!regex5.test(value))
                    {
                        hasError = true;
                        error = "Invalied address"
                    }
                break;



            case "password":
                 let pass =/^[a-z]+@+[0-9]{3}$/;
                    if (!pass.test(value)) {
                    hasError = true;
                    error = "Password should be ex:- abc@123 in this form "
                    }
                break;

            case "contactNo":
                let contact = /^[0-9]{10}$/;
                    if (!contact.test(value)) {
                        hasError = true;
                        error = "contact number should of 10 digits"
                    }
                break;

            }
            return { hasError, error }
        
} 

    const reducer = (state,action) => {
    
            switch(action.type){
                case 'update' : {
                    const {name,value,hasError, error, touched, isFormValid} = action.data;
                return { 
                        ...state,
                        [name]: { ...state[name],value, hasError, error, touched},
                        isFormValid
            }   
        }
        
    }
}



let Register = () => {
    const [flag,setFlag] = useState(false);
    const [state,dispatch] = useReducer(reducer, init);

    const onInputChange = (name,value,dispatch) => {
        
        const {hasError, error} = validateData(name,value); 

        let isFormValid = true;
        for(const key in state)
        {
            let item = state[key];
            
            if(item.hasError)
            {
                isFormValid = false;
                break;
            }
        } 
       
        dispatch({type: 'update', data: {name,value,hasError,error, touched: true, isFormValid }})

    }

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in state) {
          const item = state[key]
          if (key === name && hasError) {
            isFormValid = false
            break
          } else if (key !== name && item.hasError) {
            isFormValid = false
            break
          }
        }
        dispatch({
          type: "update",
          data: { name, value, hasError, error, touched: true, isFormValid },
        })
      }

    let nav = useNavigate();
    const[resData,setResdata] = useState([]);
    
 
    const artist={  
        firstName:state.firstName.value,
        lastName:state.lastName.value,
        emailId:state.emailId.value,
        contactNo:state.contactNo.value,
        address:state.address.value,
        userId:state.userId.value,
        password:state.password.value,
        role:state.role.value,
        status:1
    }
    

           

   
    const handleChange = (e) => {
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val });
    };
     

    var sandData = (e) => {
        e.preventDefault();
        
        
        console.log(state)

        console.log(state.role)
        console.log(artist)
       
       if(artist.role=="Artist")
       {
        
        axios.post("http://localhost:8080/reg",artist).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
        alert("Registration Successfully!!!!")
       }
       if(artist.role=="Customer")
       {
        axios.post("http://localhost:8080/register",artist).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
        alert("Registration Successfully!!!!")
       }
       nav('/login');
    }


    return(
        <div>
        <div>
            <LoginNavBar/>
        </div>
        <div className="bg-img" >
        
            <h2 className="text-white">Registration</h2>
            <br/>
            <form className="container ">
           
            <div class="row" >
            <div class="col col-sm-3 "></div>
                <div class="col col-sm-3">
                   
                    <input type="text" name="firstName" class="form-control " size="20" placeholder="First Name"
                    onChange={(e) => { onInputChange("firstName",e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("firstName", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display: state.firstName.touched && state.firstName.hasError ? "inline" : "none", color: "red" }}>{state.firstName.error}</p>
                    
                </div>
                <div class="col col-sm-3">
                   
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name"
                   onChange={(e) => { onInputChange("lastName",e.target.value, dispatch) }}
                   onBlur={(e) => { onFocusOut("lastName", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display:state.lastName.touched && state.lastName.hasError ? "inline" : "none", color: "red" }}>{state.lastName.error}</p>
                   
                </div>
            </div>
            <br/><br/>
            <div class="row">
            <div class="col col-sm-3 "></div>
                <div class="col col-sm-3">
                    
                    <input type="text" name="emailId" class="form-control" placeholder="Email Address"
                    onChange={(e) => { onInputChange("emailId",e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("emailId", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display: state.emailId.touched && state.emailId.hasError ? "inline" : "none", color: "red" }}>{state.emailId.error}</p>
                  
                </div>
                <div class="col col-sm-3">
                   
                    <input type="text" name="contactNo" class="form-control" placeholder="Contact Number"
                    onChange={(e) => { onInputChange("contactNo",e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("contactNo", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display: state.contactNo.touched && state.contactNo.hasError ? "inline" : "none", color: "red" }}>{state.contactNo.error}</p>
                    
                </div>
            </div>
            <br/><br/>
            <div class="row">
            <div class="col col-sm-3 "></div>
                <div class="col col-sm-3">
                    
                    <input type="text" name="address" class="form-control" placeholder="Address"
                    onChange={(e) => { onInputChange("address",e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("address", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display: state.address.touched && state.address.hasError ? "inline" : "none", color: "red" }}>{state.address.error}</p>
   
                </div>
                <div class="col col-sm-3">
                <div class="form-check">
                    <input class="form-check-input "  type="radio" name="role" id="Artist" value="Artist"  onChange={(e) => { onInputChange("role",e.target.value, dispatch) }} />
                    <label class="form-check-label text-light" for="Artist">Artist</label>
                </div>
              <div class="form-check">
                    < input class="form-check-input" type="radio" name="role" id="Customer"  value="Customer"  onChange={(e) => { onInputChange("role",e.target.value, dispatch) }}/>
                    <label class="form-check-label text-light text-start" for="Customer">Customer</label>
                </div>
                </div> 
            </div>
            
            <br/><br/>
            <div class="row">
            <div class="col col-sm-3 "></div>
                <div class="col col-sm-3">
                    
                    <input type="text" name="userId" class="form-control" placeholder="User ID"
                   onChange={(e) => { onInputChange("userId",e.target.value, dispatch) }}
                   onBlur={(e) => { onFocusOut("userId", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display: state.userId.touched &&  state.userId.hasError ? "inline" : "none", color: "red" }}>{ state.userId.error}</p>
                    

                </div>
                <div class="col col-sm-3">
                   
                    <input type="text" name="password" class="form-control" placeholder="Password"
                  onChange={(e) => { onInputChange("password",e.target.value, dispatch) }}
                  onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} 
                    />
                    <br/>
                    <p style={{ display:state.password.touched && state.password.hasError ? "inline" : "none", color: "red" }}>{state.password.error}</p>
                   
                </div>
            </div>
    
            </form>
            <br/><br/>
            <div class="row">
            <div class="col col-sm-3 "></div>
                <div class="col col-sm-3 ">
                    <button type="submit"  className="btn btn-primary text-dark " onClick={(v)=>{sandData(v)}                  
                }>Register</button>
                </div>          
                <div class="col col-sm-3">
                    <button type="reset"  className="btn btn-primary "  >Clear</button>
                </div>
            </div>
            </div>
        </div>           
    );
}

export default Register;