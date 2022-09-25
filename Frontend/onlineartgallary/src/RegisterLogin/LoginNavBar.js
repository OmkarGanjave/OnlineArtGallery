import {Link,useResolvedPath,useMatch} from 'react-router-dom';




export default function LoginNavbar() {

 
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
  