import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { AuthService, ClearToken } from '../../../services/AuthService';

const Header = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Admin Panel</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to='/'>DashBoard</NavLink>
        </li>
       
        
         <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Employee
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/employee">ADD</NavLink></li>
            <li><NavLink className="dropdown-item" to="/employee/list">List</NavLink></li>
           
          </ul>
         </li>

                {
                    AuthService() ? <AfterLogin /> : <BeforeLogin />
                }
       
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

let BeforeLogin = ()=>{
  return(
      <>
          
              <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
      </>
  )
}
let AfterLogin = ()=>{
  let navigate = useNavigate();

  let Logout = ()=>{
      // console.log("*****************");
      ClearToken();
      navigate("/login");
  }
  return(
      <>
             
               <li className="nav-item active">
                  <button className="nav-link btn btn-info" onClick={Logout}>Logout</button>
              </li>
      </>
  )
}

export default Header