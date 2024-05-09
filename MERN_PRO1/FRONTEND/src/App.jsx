import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

import LandingPage from './Components/LandingPage'
import Employee from './Components/Employee'
import AddEmp from './Components/AddEmp'
import EmpUpdate from './Components/EmpUpdate'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Employee/>} path='/employees'/>
        <Route element={<AddEmp/>} path='/addemployee'/>
        <Route element={<EmpUpdate/>} path='/empupdate/:id'/> 
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App