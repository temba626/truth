import { React, useEffect, useState } from "react";
function CreatePrivateGroup(params) {

    const [title, setTitle] = useState("");
	const [name,setName]=useState("");
	const [description,setDescription]=useState("");
	const [fundraisergroups,setfundarisergroups]=useState([]);

	function handleSubmit(e) {
		e.preventDefault();

		const data = { title};

		fetch("/private_group", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => {
			console.log("new private group");
		});
        e.target.reset();
	}
	function handleSubmitfund(e) {
		e.preventDefault();

		const data = { name,description};

		fetch("/fundarisergroups", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
		.then(r=>r.json())
		.then(data=>setfundarisergroups(current=>[...current,data]))
        e.target.reset();
	}
	
	useEffect(() => {
		fetch("/fundarisergroups")
			.then((r) => r.json())
			.then((data) => setfundarisergroups(data));
	},[]);

	function handleclick({ id }) {
		setfundarisergroups(fundraisergroups.filter((i) => i.id !== id));
		fetch(`/fundarisergroups/${id}`, {
		  method: "DELETE",
		})
		  .then((resp) => resp.json())
		  .then();
	  }

    return(
		 <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap" }}>
			<div >
				<form style={{padding:"100px",width:"100%"}} onSubmit={handleSubmit}>
					<h2>Add private group below</h2>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Title of private group</label>
						<input type="text" class="form-control"  placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
						
					</div>
				
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
			<div>
			
				<form style={{padding:"100px",width:"100%"}} onSubmit={handleSubmitfund}>
				<h2>Add Fundraiser group below</h2>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Name of fundraiser group</label>
						<input type="text" class="form-control"  placeholder="Name" onChange={(e) => setName(e.target.value)}/>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Description of the group</label>
						<input type="text" class="form-control"  placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
						
					</div>
				
					<button type="submit" class="btn btn-primary">Submit</button>
					<br/><br/><br/>
					<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>DELETE</th>
						</tr>
					</thead>
					{fundraisergroups.map((group) => {
						return (
							<tbody>
								<tr>
									<td className="td">{group.id}</td>
									<td className="td">{group.name}</td>
									<td>
										<button type="button" className="btn btn-danger" onClick={() => handleclick(group)}>
											DELETE
										</button>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
				</form>
			</div>
		</div>
    )
}
export default CreatePrivateGroup