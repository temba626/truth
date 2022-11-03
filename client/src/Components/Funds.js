import React, { useEffect, useState } from "react";

import PopUp from "./PopUp";

function Funds(params) {
    const [name,setName]=useState("");
    const [amount,setAmount]=useState(0);
    const [fundraisergroupid,setfundraisergroupid]=useState(0);
    const [fundraisergroup,setfundarisergroup]=useState([]);
	const [popupbut,setpopupbut]=useState(false);
    
    
    useEffect(() => {
		fetch("/fundarisergroups")
			.then((r) => r.json())
			.then((data) => setfundarisergroup(data));
	},[]);
    
    function handleSubmitfund(e) {
		e.preventDefault();

		const data = { name,amount,fundraisergroupid};

		fetch("/contributors", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
		.then(r=>r.json())
		.then(data=>console.log(data))
        e.target.reset();
	}
    return(
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap" }}>
       <div>
            <br/> <br/> <br/> <br/>
            <h2>Fundaraiser groups to contribute to</h2>
                <table className="table" style={{padding:"100px",width:"100%",margin:"20px"}}>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Description</th>
                            <th>Contributors</th>
						</tr>
					</thead>
					{fundraisergroup.map((group) => {
						return (
							<tbody>
								<tr>
									<td className="td">{group.id}</td>
									<td className="td">{group.name}</td>
                                    <td className="td">{group.description }</td>
                                    <td className="td"><button type="button" className="btn btn-success" onClick={()=> setpopupbut(true)} >SHOW</button></td>
									<PopUp trigger={popupbut} settrigger={setpopupbut} id={group.id}/>
								
								</tr>
							</tbody>
						);
					})}
				</table>
       </div>
       <div>
            <form style={{padding:"100px",width:"100%",alignItems:"right"}} onSubmit={handleSubmitfund}>
				<h2>Add your contribution below</h2>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Name of contributor</label>
						<input type="text" class="form-control"  placeholder="Name" onChange={(e) => setName(e.target.value)}/>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Amount to be contributed</label>
						<input type="text" class="form-control"  placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
						
					</div>
                    <div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Fundraiser ID</label>
						<input type="text" class="form-control"  placeholder="Description" onChange={(e) => setfundraisergroupid(e.target.value)}/>
						
					</div>
				
					<button type="submit" class="btn btn-primary">Submit</button>
            </form>    
        </div>
		
        </div>
    )
}
export default Funds;