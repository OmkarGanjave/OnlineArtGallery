import {useNavigate} from 'react-router-dom'
let Home = () => {
    let nav = useNavigate();
    return(
        <div>
           <h1>Home Page</h1>
        <br/>
            <button class="btn btn-primary" onClick={()=>{nav('/login')}}>Login</button>
            <br/><br/>
            <button class="btn btn-primary" onClick={()=>{nav('/register')}}>Register</button>
        </div>
    )

}

export default Home;