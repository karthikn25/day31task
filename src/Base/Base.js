import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../Css/sb-admin-2.css';
import "../Css/fontawesome-free";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser  }  from "@fortawesome/free-solid-svg-icons";

function Base({children}){
    const history=useHistory();
    
     return(
         
         
         <div className="base-design">
          
         <div className="left-content">
         
        <div className="font-style">
         <h4>
             <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                 <div className="sidebar-brand-icon rotate-n-15">
                     <i className="fas fa-laugh-wink"></i>
                 </div>
                 <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
             </a>
         </h4>
         <br/>
         <hr className="sidebar-divider my-0"></hr>
         <a className="nav-link" href="#" >
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span
              onClick={()=>history.push("/")}
              >Dashboard</span>
         </a>
         <hr className="sidebar-divider my-0"></hr>
         <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                     <FontAwesomeIcon icon={faCircleUser} />
                     <span onClick={()=>history.push("/StudentList")} >Student list</span>
                     
         </a>
         
        
         </div>
         </div>
         
         <div className="container">
         <div className="row top-bar">
         <div className="col-12">
         <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
         <div className="input-group">
             <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
             <div className="input-group-append">
                 <button className="btn btn-primary" type="button">
                     <i className="fas fa-search fa-sm"></i>
                 </button>
             </div>
         </div>
     </form>
        <div className="icons">
        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <i className="fas fa-bell fa-fw"></i>
        
        <span className="badge badge-danger badge-counter"><sup>3+</sup></span>
    </a>
         <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <i className="fas fa-envelope fa-fw"></i>
                                 
                                 <span className="badge badge-danger badge-counter">7</span>
                             </a>
         <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
         <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
         <img className="img-profile rounded-circle" src="img/undraw_profile.svg"/>
     </a>
        </div>
  </div>
         </div>
         
         </div>
         <div className="right-content">{children}</div>
         </div>
     )
 }
 
 export default Base