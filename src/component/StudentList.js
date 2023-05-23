import React,{useState} from "react";
import Base from "../Base/Base";
import Button from '@mui/material/Button';
import data from "../Data/data"
import AddStudents from "./AddStudents";
import UpdateStudent from "./UpdateStudent";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function StudentList({students,setStudents}){
    const history=useHistory("");
    
    const deleteStudent=async (studId)=>{

       const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${studId}`,{
        method:"DELETE",
        
       });
       const data=await response.json()
if(data){
        const remainingStudents=students.filter((stud,idx)=>stud.id!== studId)
        setStudents(remainingStudents)
}
    }
    return(
        <Base>
        <span className="stud-bar"><h3>StudentList</h3><Button onClick={()=>history.push("/add")} style={{ width: "10vw" }} variant="contained">Add Students</Button> 
        
        </span>
        <br/>
        <div className="container">
      
        <div className="card-container">
           
          {students.map((stud,idx)=>(
            <div className="stud-card" key={idx}>
               <h3>{stud.name}</h3>
               <p>{stud.email}</p>
               <p>{stud.country}</p>
               <p>{stud.state}</p>
               <p>{stud.phone}</p>
               <div className="control">
               <button onClick={()=>history.push(`edit/${stud.id}`)}>Edit</button>{" "}
               <button onClick={()=>deleteStudent(stud.id)}>Delete</button></div>
               
             </div>
           ))}
        </div>
        </div>
       </Base>
    )
}



export default StudentList