import React from "react";
import Base from "../Base/Base";
import Button from '@mui/material/Button';
import data from "../Data/data"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function TeachersList({teachers,setTeachers}){
    const history=useHistory("");
    
    const deleteTeacher=async (teachId)=>{

       const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${teachId}`,{
        method:"DELETE",
        
       });
       const data=await response.json()
if(data){
        const remainingTeachers=teachers.filter((teach,idx)=>teach.id!== teachId)
        setTeachers(remainingTeachers)
}
    }
    return(
        <Base>
        <span className="stud-bar"><h3>Teachers List</h3><Button onClick={()=>history.push("/add-teacher")} style={{ width: "10vw" }} variant="contained">Add Teachers</Button> 
        
        </span>
        <br/>
        <div className="container">
      
        <div className="card-container">
           
          {teachers.map((teach,idx)=>(
            <div className="stud-card" key={idx}>
               <h3>{teach.name}</h3>
               <p>{teach.email}</p>
               <p>{teach.country}</p>
               <p>{teach.state}</p>
               <p>{teach.phone}</p>
               <div className="control">
               <button onClick={()=>history.push(`edit/${teach.id}`)}>Edit</button>{" "}
               <button onClick={()=>deleteTeacher(teach.id)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>
       </Base>
    )
}







export default TeachersList