import './App.css';
import Base from './Base/Base';
import React,{useEffect, useState} from 'react';
import data from './Data/data';
import AddStudents from './component/AddStudents';
import Dashboard from './component/Dashboard';
import StudentList from './component/StudentList';
import {Switch,Route } from "react-router-dom";
import UpdateStudent from './component/UpdateStudent';
import NoPage from './component/NoPage';
import TeacherList from './component/TeachersList';
import AddTeachers from './component/AddTeachers';


function App() {
  const [students,setStudents]=useState([]);
  const [teachers,setTeachers]=useState([]);
  
  useEffect(()=>{
  const getStudents= async ()=>{
  const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
    method:"GET",
  });
  const data=await response.json();
  if(data){
    setStudents(data)
  }
  }
  getStudents();
  },[])
 
 //teacher list use-effect
 useEffect(()=>{
  const getTeachers= async ()=>{
  const response=await fetch("https://644b33c04bdbc0cc3a8ce2dd.mockapi.io/Users",{
    method:"GET",
  });
  const data=await response.json();
  if(data){
    setTeachers(data)
  }
  }
  getTeachers();
  },[]) 

  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Dashboard/>
    </Route>
    <Route path="/Studentlist">
    <StudentList
    students={students}
    setStudents={setStudents}
    />
    </Route>
    <Route path="/add">
    <AddStudents
    students={students}
    setStudents={setStudents}
    />
    </Route>
    <Route path="/edit/:id">
    <UpdateStudent
    students={students}
    setStudents={setStudents}

    />
    </Route>
    <Route path="/TeacherList">
    <TeacherList
    teachers={teachers}
    setTeachers={setTeachers}
    />
    </Route>
    <Route path="/add-teacher">
    <AddTeachers
    teachers={teachers}
    setTeachers={setTeachers}
    />
    </Route>
    <Route path="/edit-teacher">
    <AddTeachers
    teachers={teachers}
    setTeachers={setTeachers}
    />
    </Route>
    
    <Route path="**">
    <NoPage/>
    </Route>
    
    
    </Switch>
    </div>
  );
}

export default App;
