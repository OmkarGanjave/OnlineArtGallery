import {useDispatch, useSelector }from 'react-redux';
import  {login,logout} from '../Home/loggedSlice';
let AdminNavBar=()=>{
    const dispatch = useDispatch();
    const mystate = useSelector((state)=>state.myreducer)
    

    return(
        <div  className='container-fluid'>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark  justify-content-end ">
        <ul className="navbar-nav">
           
        <li className="nav-item">       
        <a className='nav-link' href="/adminhome">Home</a>
        </li> 
        {/* <li className="nav-item">
        <a className='nav-link' href="/aboutus">About Us</a>
        </li> 
        <li className="nav-item">
        <a className='nav-link' href="/contactus">Contact Us</a>
        </li>  */}
        <li className="nav-item">
        {/* <div className="nav" style={{display: mystate.loggedIn?"block":"none"}}> */}
        <a className='nav-link text-end' href="/" onClick={()=> {dispatch(logout())}}>Logout</a>
        {/* </div> */}
        </li> 
        </ul>
        </nav>
        </div>
    )
}
export default AdminNavBar;