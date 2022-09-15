import {useNavigate} from 'react-router-dom'
let Artisthome = () => {
    let nav = useNavigate();
    return(
        <div>
           <h1>Artisthome</h1>
        <br/>
            <button class="btn btn-primary" onClick={()=>{nav('/addproduct')}}>Login</button>
        </div>
    )

}

export default Artisthome;