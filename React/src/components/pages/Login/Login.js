import React, { useState } from 'react';
import { doLogin } from '../../../services/EmployeeServices'
import { AlertDanger } from '../../../shared/Alerts/Alert'
import {useNavigate} from 'react-router-dom'


const Login = () => {

  let navigate = useNavigate();
  let [admin, setUser] = useState({
    email : "",
    password : ""
  })

  let [showAlert, setShowAlert] = useState(false);
  let [msg, setMsg] = useState("");

  let submit = ()=>{
    doLogin(admin).then(result=>{ 
      
      if(result.data.success == true)
      {
        localStorage.setItem("token", result.data.token);
        navigate("/employee/list");
      }

      if(result.data.errType == 1){
        setShowAlert(true);
        setMsg("This Email and Password is incorrect");
      }
      if(result.data.errType == 2){
        setShowAlert(true);
        setMsg("This Password is incorrect");
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container p-4" style={{minHeight : '700px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Admin Login</h3>
          <div className="form-group">
            <label htmlFor="">Email/Username</label> <br />
            <input 
              type="text" 
              value={admin.email} 
              onChange={(e)=>setUser({...admin, email : e.target.value})} 
              className='form-control' />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label> <br />
            <input 
              type="password" 
              value={admin.password} 
              onChange={(e)=>setUser({...admin, password : e.target.value})} 
              className='form-control' />
          </div>
          {
            showAlert ? <AlertDanger msg={msg} /> : ''
          }
          <br />
          <button className='btn btn-success' onClick={submit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login