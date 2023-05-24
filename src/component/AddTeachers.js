import React,{useState} from "react";
import Base from "../Base/Base";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function AddTeachers({teachers,setTeachers}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [phone,setPhone]=useState("");
    const history=useHistory("");
    
    const createTeacher = async () =>{
        const newTeacher={
          name:name,
          email:email,
          country:country,
          state:state,
          phone:phone
        }
      
      
      
      const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
          method:"POST",
          body:JSON.stringify(newTeacher),
          headers:{
            "Content-Type":"application/json"
          },
        })
      const data=await response.json()
     setTeachers([...teachers,data])
     history.push("/TeacherList");
     }
    return(
    <Base> <><><><><><><span className="stud-bar"><h3>Add Teachers</h3><Button onClick={()=>history.push("/TeacherList")} style={{ width: "5vw" }} variant="contained">Back</Button></span><br /><FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Enter NAME</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Enter Email</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Enter Country</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={country}
            onChange={(e) => setCountry(e.target.value)} />
        </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Enter State</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={state}
            onChange={(e) => setState(e.target.value)} />
        </FormControl></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Enter Phone No</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
        </FormControl></><br /><br /><Button onClick={createTeacher} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Add</Button></>
        </Base>
  
    )
}


export default AddTeachers