/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import{useNavigate,useParams} from 'react-router-dom'
import { saveData , updateData , getDataById } from '../../../services/EmployeeServices'

const AddEmployee = () => {
  let navigate = useNavigate()
  let params = useParams()
  let [employee,setEmployee] = useState({})

  useEffect(()=>{

    if(params.id){
        getDataById(params.id).then(result=>{
            // console.log(result.data);
            setEmployee(result.data);
        })
    } else{
      setEmployee({
            name : "",
            age : ""
        })
    }
}, [params.id])



let hendalchange = (e, t)=>{
    // setUser((prevData)=>{
    //     return {...prevData, [t] : e.target.value}
    // })
    setEmployee(prevData=>({...prevData, [t] : e.target.value}))
}

let hendalsubmit = () =>{
        // console.log(employee);
        // axios.post("http://localhost:4200/student", employee).then(result=>{
        //     console.log(result);
        // })
        if(params.id){
            updateData(params.id, employee).then(result=>{
                
                navigate("/employee/list");

                // navigate("http://localhost:3000/admin");
            })
        } else{
            saveData(employee).then(result=>{
                console.log(result.data);
                
                navigate("/employee/list");

                // navigate("http://localhost:3000/admin");

            })
        }
}
  
  return (

    <>
     <div className='container my-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>

          <div className='card'>
            <div className='card-header'>
              <h2><span>{ params.id? "Update" : "Add" }</span> Employee</h2>
            </div>

             <div className='card-body'>
              <div className='form-group'>
               <label htmlFor='' >Full Name</label>
               
                <input type='text' name='name' className='form-control' value={employee.name} onChange={(e)=>hendalchange(e,"name")} />
              </div>
              <div className='form-group'>
               <label htmlFor=''>Age</label>
                <input type='text' name='age'   className='form-control' value={employee.age} onChange={(e)=>hendalchange(e,"age")} />
              </div>           
             </div>

             <div className='card-footer'>
              <input type='button' value={params.id ? 'Update': 'ADD'} className='btn btn-info' onClick={hendalsubmit} />
             </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddEmployee