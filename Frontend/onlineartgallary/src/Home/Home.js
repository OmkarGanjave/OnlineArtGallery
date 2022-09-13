import {useNavigate} from 'react-router-dom'
let Home = () => {
    let nav = useNavigate();
    return(
        <div>
           <h1>Home Page</h1>
        <br/>
        <button onClick={()=>{nav('/login')}}>Login</button>
        </div>
    )

}