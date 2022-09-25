
import ArtistNavBar from './artistnavbar';
import { Navigate, useNavigate} from 'react-router-dom';
import { useState } from "react";

let UploadImage = ()=>{

    let nav = useNavigate();

    let user =JSON.parse(localStorage.getItem('artist'));
    let productId = JSON.parse(localStorage.getItem('productId'));

    const[file,setPicture] = useState([]);


    const submitData = (e) => {
        e.preventDefault();
        
        
        let artistId = user.loginId;

        console.log(user.loginId);
        console.log(productId.productId);

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
        
        let url = "http://localhost:8080/addimage/"+artistId+"/"+productId;

        console.log(url);

        fetch(url,reqData)
        .then(resp => resp.json())
        .then(data =>{ console.log(JSON.stringify(data))

            
        if(data == 1)
        {
            alert("Product Image uploaded successfully.")
            nav('/searchproduct');
        }
        else
        {
            alert("failed to upload Product Image Try again...")
            nav('/uploadImage');
        }

        })

    }

    return(
        <div>
        <div><ArtistNavBar/></div>
        <div className="container" style={ {
            width: "3600px",
            padding: "10% 0 0",
            margin: "auto"
          }}>
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                            Upload image : 
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
        </div>
    )
}

export default UploadImage;