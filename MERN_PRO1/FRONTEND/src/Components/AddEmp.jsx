import React, { useState } from 'react'
import "../Styles/addemp.css"
import img1 from "../imgs/logo1.jpg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddEmp = () => {
  let [firstname,setfirstname]=useState("");
  let [lastname,setlastname]=useState("");
  let [gender,setgender]=useState("");
  let [dob,setdob]=useState("");
  let [email,setemail]=useState("");
  let [mobile,setmobile]=useState("");
  let [department,setdepartment]=useState("");
  let[joindate,setjoindate]=useState("")


  let navigate = useNavigate()

  let handllenavigate=()=>{
    navigate("/employees")
  }
  
  //! handle submit
  let handlesubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/api/register",{
      firstname,lastname,gender,dob,email,mobile,department,joindate
    })
    .then(resp=>{
      alert("Employee Details is Added")
      console.log("resgistred",resp);
    })
    .catch(err=>{
      console.log("error",err);
    })

    setfirstname("")
    setlastname("")
    setdepartment("")
    setdob("")
    setemail("")
    setgender("")
    setjoindate("")
    setmobile("")
   
  }
 
  return (
    <div className="addemp">
      <div className="cont">
        <div className="form">

          <form onSubmit={handlesubmit}>
            <label htmlFor="firstname">firstname</label>
            <input type="text" id='firstname' onChange={(e)=>{setfirstname(e.target.value)}} required/>

            <label htmlFor="lastname">lastname</label>
            <input type="text"  id='lastname'  onChange={(e)=>{setlastname(e.target.value)}}  required/>

            <label htmlFor="gender">gender</label>
            <input type="text" id='gender'  onChange={(e)=>{setgender(e.target.value)}} required/>

            <label htmlFor="dob">dob</label>
            <input type="text" id='dob'  onChange={(e)=>{setdob(e.target.value)}} required/>

            <label htmlFor="email">email</label>
            <input type="email" id='email' onChange={(e)=>{setemail(e.target.value)}} required/>

            <label htmlFor="mobile">mobile</label>
            <input type="Number"  id='mobile' onChange={(e)=>{setmobile(e.target.value)}} required/>

            <label htmlFor="department">department</label>
            <input type="text"  id='department' onChange={(e)=>{setdepartment(e.target.value)}} required/>

            <label htmlFor="joindatedate">joindatedate</label>
            <input type="date" id='joindatedate' onChange={(e)=>{setjoindate(e.target.value)}} required/>

            <button className='can' onClick={handllenavigate}>cancel</button>
            <button>add</button>
          </form>
        </div>
        <div className="logo">
          <img src={img1}/>
          <h1>Always treat your employees exactly as you want them to treat your best customers.</h1>
          </div>
      </div>
    </div>
  )
}

export default AddEmp