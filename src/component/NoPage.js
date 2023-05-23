import React from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";


function NoPage(){
    const history=useHistory();
    return(
    <Base>
    <h3>Page is Not Found</h3>
    <button onClick={()=>history.push("/")}>Go to Dashboard</button>
    </Base>
    )
}

export default NoPage