import { useNavigate } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
import {useDispatch,useSelector  } from 'react-redux';
import { loggedSlice, logout, login } from "../Home/loggedSlice";
import AdminNavBar from './Adminnavbar';
let AddRemoveUser=()=>{
    let nav=useNavigate();

    const[allusers,setUsers]=useState([]);
    const[flag,setFlag]=useState(false);

    const dispatch = useDispatch();
    const mystate = useSelector((state)=>state.myreducer);
    

    useEffect(()=>{
        fetch("http://localhost:8080/getallusers")
        .then(resp => resp.json())
        .then(data=>{setUsers(data)
        if(data.status==1)
        {
            setFlag(true);
        }
        dispatch(login());
        })
         
      },[])



     let changeStatus=(v)=>{
        let tempstatus;
        if(v.status==1)
            tempstatus=0;
        else if(v.status==0)
            tempstatus=1;

        axios.get("http://localhost:8080/manageaccount/"+v.loginId+"/"+tempstatus);
     }

return(

    <div>
    <div><AdminNavBar/></div>
    <div> 
        <h3>Add/Remove Users</h3>
       
        <table className="table">
            <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Status</th>
                
            </tr>
            {
               
                allusers.map((v)=>{
                    var loginId=v.loginId;
                    return(
                        <tr>
                            <td>{v.loginId}</td>
                            <td>{v.userId}</td>
                            <td>{v.role}</td>
                            <td>{v.status}</td>   

                            <td><div><button type="submit" className="btn btn-success  " onClick={(v)=>{
                            console.log(loginId);
                            var url="http://localhost:8080/manageaccount/"+loginId+"/1";
                            console.log(url);
                            fetch(url);
                           window.location.reload();
                            
                               }  
                            }> Active </button></div></td>
                             <td><div><button type="submit" className="btn btn-danger" 
                                 onClick={(v)=>{
                            console.log(loginId);
                            var url="http://localhost:8080/manageaccount/"+loginId+"/0";
                            console.log(url);    
                            fetch(url);
                            window.location.reload();
                           
                         
                           
                       }}> Suspend </button></div></td>
                            
                          
                        </tr>
                    )

                })
            }
        </table>
      
        </div>
    </div>
    
);


}
export default AddRemoveUser;