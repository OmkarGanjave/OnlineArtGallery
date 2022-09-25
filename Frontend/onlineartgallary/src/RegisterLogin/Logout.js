import { useNavigate} from 'react-router-dom';



let Logout = () => {
    let nav=useNavigate();
    localStorage.clear();
        nav('/');
    

}

export default Logout;