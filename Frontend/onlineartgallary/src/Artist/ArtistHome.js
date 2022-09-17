import {useNavigate} from 'react-router-dom'
let Artisthome = () => {
    let nav = useNavigate();

    return(
        <div>
           <h1>Artisthome</h1>
        <br/>
            <button class="btn btn-primary" onClick={()=>{nav('/addproduct')}}>AddProduct</button>
            <br/><br/>
            <button class="btn btn-primary" onClick={()=>{nav('/searchproduct')}}>Show Product's</button> 
        </div>
    )

}

export default Artisthome;