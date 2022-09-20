
let Header2 = () => {
    
    return(
        <div className='container-fluid' >
            {/* <nav className="nav navbar-expand-lg navbar-light bg-primary justify-content-center">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <h5>Online Art Gallary</h5>
            </div>
          </div>
          <li className="nav-item">
            <button class="btn btn-outline-success " onClick={()=>{nav('/login')}}>Login</button>
          </li>
          <li className="nav-item">
            <button class="btn btn-outline-success" onClick={()=>{nav('/register')}}>Register</button>
          </li> 
        </nav>  */}
        <nav className="navbar navbar-expand-lg bg-primary justify-content-center">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/addproduct">Add Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aboutus">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contactus">Contact Us</a>
                </li>
                
           
            </ul>
        </nav>
        </div>
    )
} 

export default Header2;