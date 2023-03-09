
import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { deleteData , getData } from '../../../services/EmployeeServices'


const EmployeeList = () => {
    const navigate = useNavigate()
    
    
    const [employee ,setEmployee] = useState([]);
   
  


useEffect(()=>{
    getData().then(result=>{
    
    setEmployee(result.data);
  })
  },  []);
  
  let confdelete = (obj)=>{
    
    deleteData(obj._id).then(result=>{
      
      setEmployee((preData)=>{
        return preData.filter(item => item !== obj);
      });
    })
  }
  
  let edit = (obj)=>{

    navigate(`/employee/edit/${obj._id}`);
  }

  return (
    <>
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>S.NO.</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((t,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{t.name}</td>
                                    
                                        
                                        <td>{t.age}</td>
                                        <td>{t.contact}</td>
                                        <td>{t.city}</td>
                                        <td><button onClick={()=>(confdelete(t))} className='btn btn-sm btn-danger'>Delete</button></td>
                                        <td><button onClick={()=>(edit(t))} className='btn btn-sm btn-warning'>Edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default EmployeeList