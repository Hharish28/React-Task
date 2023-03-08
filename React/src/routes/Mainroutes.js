import React from 'react'
import {Route , Routes} from 'react-router-dom'
import DashBoard from '../components/pages/DashBoard/DashBoard'
import AddEmployee from '../components/pages/Employee/AddEmployee'
import EmployeeList from '../components/pages/Employee/EmployeeList'
import Login from '../components/pages/Login/Login'


const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <DashBoard/>} />
        <Route path='/employee' element={<AddEmployee />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/employee/list' element={<EmployeeList />}  />
        <Route path='/employee/edit/:id' element={<AddEmployee />}  />

    </Routes>
  )
}

export default Mainroutes