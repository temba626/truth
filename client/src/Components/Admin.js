import 'bootstrap/dist/css/bootstrap.min.css';

import { React, useEffect, useState } from "react";

function Admin() {
    
    const [users,setusers]=useState([])
    useEffect(()=>{
        fetch("/users")
        .then((r) => r.json())
        .then((data) => setusers(data))
    },[]);
    
    return(
        <div style={{width:"70%",margin:"30px"}}>
          <br/>
          <br/>
          <br/>
          <br/>
           <h2>This is the admin page!!!</h2>

        <table className="table table-bordered" >
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cohort</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
{users.map((user)=>{
    return(
                <tbody>
                    <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.cohort}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button type="button" className="btn btn-success" >ADD AS ADMIN</button></td>
                    <td><button type="button" className="btn btn-success">INVITE TO COHORT</button></td>
                    
                    <td><button type="button" className="btn btn-success">ADD AS ADMIN</button></td>
                    </tr>
                
                </tbody>
                 )
                })}
        </table>
   
        <td><button type="button" className="btn btn-success">CREATE A POST</button></td> <br/>
        <td><button type="button" className="btn btn-success">START A TEAM FUNDRAISER</button></td> <br/> 
        <td><button type="button" className="btn btn-success">CREATE A PRIVATE /PUBLIC COHORT</button></td>    
           
    </div>
    )
}
export default Admin;