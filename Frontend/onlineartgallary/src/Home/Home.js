import {useNavigate} from 'react-router-dom'
let Home = () => {
    let nav = useNavigate();
    const myStyle={
      backgroundImage: 
      "url('https://www.wallpaperup.com/uploads/wallpapers/2016/10/20/1027710/5ed1f59b81d2dde9d3c6ea07550304eb-1000.jpg')",
      width:'1225px',
      height:'1000px',
      marginTop:'0px',
      // fontSize:'50px',
      // backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
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
        <div className='container-fluid' style={myStyle}>
            <h1>Online Art Gallary</h1>

        </div>
        </div>
    )

}

export default Home;