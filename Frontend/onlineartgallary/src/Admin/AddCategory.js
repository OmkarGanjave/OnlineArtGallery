import AdminNavBar from './Adminnavbar'
import {  useState  } from "react";
import { Navigate, useNavigate} from 'react-router-dom';
import axios from "axios";
let AddCategory=()=>{

    let nav = useNavigate();
    
   
    const[resData,setResdata] = useState([]);
    const[err,setErr] = useState("");

    const[cat,setCategory] = useState({
        categoryName:"",
    });

    const{
        categoryName
    } = cat;

    const onInputChange = (e) => {
        setCategory({...cat,[e.target.name]:e.target.value});
    }; 

    var sandData = (e) => {
        e.preventDefault();


        axios.post("http://localhost:8080/addcategory",cat)
        .then(response=>{
            setResdata(response.data);
            console.log(response.data);
            nav('/adminhome');
        })
        .catch(error=>{
                    if(error)
                    {
                        console.log("error");
                        setErr("Fail to add category");
                    }
                    
                    });

        
        
    }
    
    return(
        <div>
        <div>
            <AdminNavBar/>
        </div>
       
        <div class="bg-img" >
           
            <div style={ {
            width: "360px",
            height:"500px",
            padding: "8% 0 0",
            margin: "auto"
          }} >
            <form className="container  ">
            <h2 className="text-white">Add Category</h2>
            <br/>
                <div class="row">
                    <div className="col">
                        <input type="text" name="categoryName" class="form-control"
                        placeholder="Category Name"
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                </div>
               
            <br/>
            <div class="row">
                    <div className="w3-button w3-block w3-teal">
                        <button type="submit"  class="btn btn-primary mt-4" onClick={(v)=>{sandData(v)}}>Add</button>
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
export default AddCategory;