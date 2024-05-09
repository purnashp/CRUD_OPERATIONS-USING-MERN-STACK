import React, { useEffect, useState } from 'react'
import "../Styles/employee.css"
import axios from 'axios'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom'
import EmpUpdate from './EmpUpdate';

const Employee = () => {
  const [data, Setdata] = useState([]);

  const getdata = async () => {
    const resp = await axios.get("http://localhost:3000/")
    Setdata(resp.data)
  }
  useEffect(() => {
    getdata()
  }, [])

  let navigate = useNavigate()
  let addnavigate = useNavigate()

  let handllenavigate=()=>{
    navigate("/")
  }

  let handleAddemp=()=>{
    addnavigate("/addemployee")
  }
  //!
  let updatenavigate = useNavigate()
  const updateemp=(id)=>{
     updatenavigate(`/empupdate/${id}`)
  }
  //! 
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/developers/${id}`);
      alert("Data is deleted")
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  console.log(data);
  
  return (
    <div className="emp-file">
      <div className="add">
        <button onClick={handleAddemp}>
          add employee <PersonAddIcon  sx={{ fontSize: 20 }}/>
        </button>
      </div>
      <div className="back">
        <button onClick={handllenavigate}>
          back <ExitToAppIcon  sx={{ fontSize: 20 }}/>
        </button>
      </div>
      <div className="cont">
        <table>
          <thead>
            <tr>
              <th>s.no</th>
              <th>first-name</th>
              <th>last-name</th>
              <th>gender</th>
              <th>d-o-b</th>
              <th>mobile</th>
              <th>email</th>
              <th>department</th>
              <th>join-date</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((elem, ind) => {
                let { department, dob, email, firstname, lastname, gender, mobile,joindate } = elem;
                return (
                  <>
                    <tr>
                      <td>{ind + 1}</td>
                      <td>{firstname}</td>
                      <td>{lastname}</td>
                      <td>{gender}</td>
                      <td>{dob}</td>
                      <td>{mobile}</td>
                      <td>{email}</td>
                      <td>{department}</td>
                      <td>{joindate}</td>
                      <td><button className='e' onClick={()=>updateemp(elem._id)}>edit</button></td>
                      <td><button className='d' onClick={() => deleteItem(elem._id)} >delete</button></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee