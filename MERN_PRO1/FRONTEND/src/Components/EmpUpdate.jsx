import React, { useState } from 'react'
import "../Styles/addemp.css"
import img1 from "../imgs/logo1.jpg"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EmpUpdate = () => {
  let [firstname,setfirstname]=useState("");
  let [lastname,setlastname]=useState("");
  let [gender,setgender]=useState("");
  let [dob,setdob]=useState("");
  let [email,setemail]=useState("");
  let [mobile,setmobile]=useState("");
  let [department,setdepartment]=useState("");
  let[joindate,setjoindate]=useState("")


  let navigate = useNavigate()
  let param = useParams()
  let handllenavigate=()=>{
    navigate("/employees")
  }
  
  //! handle submit
  let handleupdate=(e)=>{
    e.preventDefault()
    axios.patch(`http://localhost:3000/api/developers/${param.id}`,{
      firstname,lastname,gender,dob,email,mobile,department,joindate
    })
    .then(resp=>{
      alert("Employee Details is Updated")
      console.log("resgistred",resp);
      setfirstname("")
      setlastname("")
      setdepartment("")
      setdob("")
      setemail("")
      setgender("")
      setjoindate("")
      setmobile("")
    })
    .catch(err=>{
      console.log("error",err);
    })

   
   
  }
 
  return (
    <div className="addemp">
      <div className="cont">
        <div className="form">

          <form onSubmit={handleupdate}>
            <label htmlFor="firstname">firstname</label>
            <input type="text" id='firstname' onChange={(e)=>{setfirstname(e.target.value)}} />

            <label htmlFor="lastname">lastname</label>
            <input type="text"  id='lastname'  onChange={(e)=>{setlastname(e.target.value)}}  />

            <label htmlFor="gender">gender</label>
            <input type="text" id='gender'  onChange={(e)=>{setgender(e.target.value)}} />

            <label htmlFor="dob">dob</label>
            <input type="text" id='dob'  onChange={(e)=>{setdob(e.target.value)}} />

            <label htmlFor="email">email</label>
            <input type="email" id='email' onChange={(e)=>{setemail(e.target.value)}} />

            <label htmlFor="mobile">mobile</label>
            <input type="Number"  id='mobile' onChange={(e)=>{setmobile(e.target.value)}} />

            <label htmlFor="department">department</label>
            <input type="text"  id='department' onChange={(e)=>{setdepartment(e.target.value)}} />

            <label htmlFor="joindatedate">joindatedate</label>
            <input type="date" id='joindatedate' onChange={(e)=>{setjoindate(e.target.value)}} />

            <button className='can' onClick={handllenavigate}>cancel</button>
            <button>update</button>
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

export default EmpUpdate