import { Navigate, useNavigate} from 'react-router-dom';
let Logout = () => {
    let nav = useNavigate();
    localStorage.clear();
    alert("logout successfully !!!");
    nav('/');
}

export default Logout;