import React from 'react'
import "../Styles/landingpage.css"
import img1 from "../imgs/img1-removebg-preview.png"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    let navigate = useNavigate()

    let handllenavigate=()=>{
      navigate("./employees")
    }
  return (
   <>
   <div className="landingpage">
     <div className="header">
       <h1>GM'S Company</h1>
     </div>
     <div className="bottom">
      <div className="img">
      <img src={img1} />
      </div>
      <div className="text">
         <h1> office employee <br /> <span> details...</span></h1>
         <hr />
         <p>An employee is a professional who receives compensation for performing and completing their work-related duties. After completing an application and interview process, a company hires employees based on their skill set.</p>
         <button onClick={handllenavigate}>GET STARTED</button>
      </div>
     </div>
   </div>
   </>
  )
}

export default LandingPage