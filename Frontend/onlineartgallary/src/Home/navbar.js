import {Link,useResolvedPath,useMatch} from 'react-router-dom';
// import {login,logout} from "./loggedSlice";
//import {useDispatch,useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  let nav = useNavigate();
 
  // const dispatch = useDispatch();
  // const mystate = useSelector((state)=>state.myreducer);

    return (
      <div >
      <nav className="nav">
      {/* {mystore.login?"block":"none"}
      {mystore.logout?"block":"none"} */}
      
      
        <h2 onClick={()=>{nav('/')}}>Online Art Gallery</h2>
      
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/aboutus">About Us</CustomLink>
        <CustomLink to="/contactus">Contact Us</CustomLink>
        <div className="nav" >
        <CustomLink to="/login" >Login</CustomLink>
       
        </div >
        <div className="nav" >
        <CustomLink to="/register" >Register</CustomLink>
        </div>
        <div className="nav" >
        <CustomLink to="/logout" >Logout</CustomLink>
        </div>
        
     
       
      </ul>
      </nav>
      </div>
    )
  }
  
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
  