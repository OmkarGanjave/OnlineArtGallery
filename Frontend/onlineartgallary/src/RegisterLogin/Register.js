import axios from "axios";
import { useReducer, useState  } from "react";
import { Navigate, useNavigate} from 'react-router-dom';
// const init = {
//     firstName:{value:0, hasError: true,touched: false, error:""},
//     lastName:{value:0, hasError: true,touched: false, error:""},
//     emailId:{value:0, hasError: true,touched: false, error:""},
//     contactNo:{value:0, hasError: true,touched: false, error:""},
//     address:{value:0, hasError: true,touched: false, error:""},
//     userId:{value:0, hasError: true,touched: false, error:""},
//     password:{value:0, hasError: true,touched: false, error:""},
//     role:{value:0, hasError: true,touched: false, error:""},
//     status:{value:0, hasError: true,touched: false, error:""},
//     isFormValid: false
// }

// const reducer = (state,action) => {
    
//     switch(action.type){
//         case 'update' : {
//             const {name,value,hasError, error, touched, isFormValid} = action.data;
//             return { 
//                 ...state,
//                 [name]: { ...state[name],value, hasError, error, touched},
//                 isFormValid
//             }   
//         }
        
//     }
// }

// const validateData = (name,value) => {
//     let hasError = false, error= "";
//     switch(name){
//         case "firstName" :
//             let regex1 = /^[A-Z][a-z]{2,15}$/;
//             if(!regex1.test(value))
//             {
//                 hasError = true;
//                 error = "*First name - first letter should be capital"
//             }
//         break;

//         case "lastName" :
//             let regex2 = /^[A-Z][a-z]{2,15}$/;
//             if(!regex2.test(value))
//             {
//                 hasError = true;
//                 error = "*Last name - first letter should be capital"
//             }
//         break;

//         case "contactNo" :
//             let regex3 = /^[0-9]{10}$/;
//             if(!regex3.test(value))
//             {
//                 hasError = true;
//                 error = "*Contact number should be 10 digits"
//             }
//         break;

//         case "emailId" :
//             let regex4 =  /^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$/;
//             if(!regex4.test(value))
//             {
//                 hasError = true;
//                 error = "*Invailed email id "
//             }
//         break;

//         case "address" :
//             let regex5 =  /^[0-9a-zA-Z\s,]{2,10}$/;
//             if(!regex5.test(value))
//             {
//                 hasError = true;
//                 error = "*Invailed address"
//             }
//         break;

//         case "userId" :
//             let regex6 =  /^[a-zA-Z0-9]{3,8}[a-zA-Z0-9]$/;
//             if(!regex6.test(value))
//             {
//                 hasError = true;
//                 error = "*Invailed user id"
//             }
//         break;

//         case "password" :
//             let regex7 =  /^[a-zA-Z0-9]{3,8}[a-zA-Z0-9]$/;
//             if(!regex6.test(value))
//             {
//                 hasError = true;
//                 error = "*Invailed user id"
//             }
//         break;
                 

//     }
//     return {hasError, error}

// } 

let Register = () => {
    // const [flag,setFalg] = useState(false);
    // const [state,dispatch] = useReducer(reducer, init);

    // const onInChange = (name,value,dispatch) => {
        
    //     const {hasError, error} = validateData(name,value); 

    //     let isFormValid = true;
    //     for(const key in state)
    //     {
    //         let item = state[key];
            
    //         if(item.hasError)
    //         {
    //             isFormValid = false;
    //             break;
    //         }
    //     } 
       
    //     dispatch({type: 'update', data: {name,value,hasError,error, touched: true, isFormValid }})

    // }

    // const onFocusOut = (name, value, dispatch) => {
    //     const { hasError, error } = validateData(name, value)
    //     let isFormValid = true
    //     for (const key in state) {
    //       const item = state[key]
    //       if (key === name && hasError) {
    //         isFormValid = false
    //         break
    //       } else if (key !== name && item.hasError) {
    //         isFormValid = false
    //         break
    //       }
    //     }
    //     dispatch({
    //       type: "update",
    //       data: { name, value, hasError, error, touched: true, isFormValid },
    //     })
    //   }

    let nav = useNavigate();
    const[resData,setResdata] = useState([]);
    
    const[artist,setArtist] = useState({
        firstName:"",
        lastName:"",
        emailId:"",
        contactNo:"",
        address:"",
        userId:"",
        password:"",
        role:"",
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
            status} = artist ;

           

    const onInputChange = (e) => {
        setArtist({...artist,[e.target.name]:e.target.value});


    }; 

   
     

    var sandData = (e) => {
        e.preventDefault();
        console.log(artist.role);
        console.log(artist);
       if(artist.role=="Artist")
       {
        
        axios.post("http://localhost:8080/reg",artist).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
       }
       if(artist.role=="Customer")
       {
        axios.post("http://localhost:8080/register",artist).then(response=>setResdata(response.data)).catch(error=>console.log(error));
        console.log(resData);
       }
    }

    // var sendData = (e) => {
    //     e.preventDefault();    
           
    //         nav('/login');       
    // }

    return(
        <div class="container mt-3" >
            <h2>Registration form</h2>
            <br/>
            <form >
            <div class="row" >
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
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="role" id="Artist" value="Artist"  onChange={(e)=>onInputChange(e)} />
                    <label class="form-check-label" for="Artist">Artist</label>
                </div>
              <div class="form-check">
                    < input class="form-check-input" type="radio" name="role" id="Customer"  value="Customer"  onChange={(e)=>onInputChange(e)}/>
                    <label class="form-check-label" for="Customer">Customer</label>
                </div>
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
                    <button type="submit"  class="btn btn-primary" onClick={()=>{nav('/login')}}>Login</button>
                </div>
           
                <div class="col">
                    <button type="reset" className="btn btn-primary">Clear</button>
                </div>
            </div>
            
            </form>

           
            {/* // <h4>{resData.role}</h4> */}
        </div>     
        
            
    );
}

export default Register;