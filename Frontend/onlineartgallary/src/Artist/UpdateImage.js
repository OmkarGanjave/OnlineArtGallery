
import { Navigate, useNavigate} from 'react-router-dom';
import { useState } from "react";

let UpdateImage = ()=>{

    let nav = useNavigate();

    let user =JSON.parse(localStorage.getItem('artist'));

    let product1 =JSON.parse(localStorage.getItem('product'));

    const[file,setPicture] = useState([]);

     console.log("pid"+product1.productId);
    console.log("artist id"+user.loginId);

    const submitData = (e) => 
    {
        e.preventDefault();
        
        
        // let artistId = user.loginId;

        // console.log("artist id for update"+user.loginId);
        // console.log("pid for update"+product1.productId);

        console.log(product1.productId);
        // console.log(product1.artist.artistId);

        var fd = new FormData();
        //fd.append("name", name);
        fd.append("file", file);

        console.log(fd);

        const reqData = {
            method: "post",
            Headers:
            {
                "content-type":"multipart/form-data"
            },
            body: fd
        }
        
        let url = "http://localhost:8080/addimage/"+user.loginId+"/"+product1.productId;
        console.log(url);

        fetch(url,reqData)
        .then(resp => resp.json())
        .then(data =>{ console.log(JSON.stringify(data))

            
        if(data == 1)
        {
            alert("Product Image updated successfully.")
            nav('/updateproduct');
        }
        else
        {
            alert("failed to update Product Image Try again...")
            nav('/uploadImage');
        }

        })

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                            Update image : 
                            <input type="file" name="file" 
                            class="form-control"
                            onChange={(e)=>setPicture(e.target.files[0])} /> 
                            <span className='text-danger'>Image size should be less than 10MB</span>
                            <br/>
                            <button type="submit"
                            class="btn btn-primary mt-4"
                            onClick={(e)=>{submitData(e)}}>Upload </button>
            
                </div>
            </div>
        </div>
    )
}

export default UpdateImage;