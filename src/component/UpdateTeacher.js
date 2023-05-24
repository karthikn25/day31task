import React,{useState,useEffect} from "react";
import Base from "../Base/Base";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function UpdateTeacher({teachers,setTeachers}){
  const{id}=useParams();
  const editteacher = teachers[id];  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [country,setCountry]=useState("");
  const [state,setState]=useState("");
  const [phone,setPhone]=useState("");
  const history=useHistory("");
  useEffect(()=>{
    setName(editteacher.name)
    setEmail(editteacher.email)
    setCountry(editteacher.country)
    setState(editteacher.state)
    setPhone(editteacher.phone)
    console.log("update mounted")
    console.log("id is",id)
  },[editteacher])
 async function updateTeacher(){
  const updatedObject ={
    name : name,
    email : email,
    country : country,
    state : state,
    phone : phone
  }
 
const response=await fetch(`https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users/${editteacher.id}`,{
  method:"PUT",
  body:JSON.stringify(updatedObject),
  headers:{
    "Content-Type":"application/json"
  }
}
)

const data=await response.json()



if(data){
  console.log(updatedObject)
  students[id]=updatedObject
  setTeachers([...teachers])
  history.push("/TeacherList") 
 }}

           
            return(
       <Base>     <><><><><><><><span className="stud-bar"><h3>Update Teacher</h3><Button onClick={()=>history.push("/TeacherList")} style={{ width: "5vw" }} variant="contained">Back</Button></span><br /></><FormControl fullWidth sx={{ m: 1 }} variant="standard">
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
              </FormControl></><br /><br /><Button onClick={updateTeacher} style={{ marginLeft: "30vw", width: "10vw" }} variant="contained">Update</Button></>
              </Base>
          )
        }
    

export default UpdateTeacher