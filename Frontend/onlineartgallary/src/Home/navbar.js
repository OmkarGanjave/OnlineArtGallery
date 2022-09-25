import {Link,useResolvedPath,useMatch} from 'react-router-dom';
import {login,logout,} from "./loggedSlice";
import {useDispatch,useSelector  } from 'react-redux';



export default function Navbar() {

  const mystate = useSelector((state)=>state.myreducer);

  const dispatch = useDispatch();
 
    return (
      <div >
      <nav className="nav bg-dark">

      <a href="/"><h2 >Online Art Gallery</h2></a>
     
      <ul>
        <div>
        <a className='nav' href="/">Home</a>
        </div>
        <div>
        <a className='nav' href="/aboutus">About Us</a>
        </div>
        <div>
        <a className='nav' href="/contactus">Contact Us</a>
        </div>
        <div className="nav" style={{display: mystate.loggedIn?"none":"block"}}>
        <a className='nav' href="/login" onClick={()=> {dispatch(login())}}>Login</a>
        </div >
       
        <div className="nav" style={{display: mystate.loggedIn?"none":"block"}}>
        <a className='nav' href="/register" onClick={()=> {dispatch(login())}}>Register</a>
        </div>
       
        <div className="nav" style={{display: mystate.loggedIn?"block":"none"}}>
        <a className='nav' href="/" onClick={()=> {dispatch(logout())}}>Logout</a>
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
  