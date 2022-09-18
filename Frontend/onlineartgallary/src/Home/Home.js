import {useNavigate} from 'react-router-dom'
let Home = () => {
    let nav = useNavigate();
    return(
      
        <div className='container-fluid'>
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <h5>Online Art Gallary</h5>
            </div>
          </div>
          <li className="nav-item">
            <button class="btn btn-outline-success btn-sm" onClick={()=>{nav('/login')}}>Login</button>
          </li>
          <li className="nav-item">
            <button class="btn btn-outline-success btn-sm" onClick={()=>{nav('/register')}}>Register</button>
          </li> 
        </nav> 
        </div>
    )

}

export default Home;