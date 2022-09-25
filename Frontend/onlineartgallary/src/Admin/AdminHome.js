import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector  } from 'react-redux';
import AdminNavBar from './Adminnavbar';
let Adminthome = () => {
    let nav = useNavigate();

    


    return(
        <div>
        <div><AdminNavBar/></div>
        <div>
           <h1>Admin home</h1>
           <nav className="navbar navbar-expand-sm nav-tabs justify-content-center text-dark">
                <ul className="navbar-nav text-black">
                    <li className="nav-item">
                        <a className="nav-link" href="/updateuserstatus"><b>Add/Remove User</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/addcategory"><b>Add New Category</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><b>Review Rating</b></a>
                    </li>
                 </ul>
            </nav>
        <br/>
            {/* <button className="btn btn-primary" onClick={()=>{nav('/updateuserstatus')}}></button> */}
            <br/><br/>
            {/* <button class="btn btn-primary" onClick={()=>{nav('')}}>Show Product's</button>  */}
        </div>

        </div>
    );

}

export default Adminthome;