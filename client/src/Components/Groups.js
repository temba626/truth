import "../Css/Groups.css";

import React, { useEffect, useState } from "react";

import ChatRoom from "./ChatRoom";
import { Link } from "react-router-dom";

function Groups() {

	// App.cable = ActionCable.createConsumer(); 

	const [title, setTitle] = useState("");
	const [status, setStatus] = useState("");
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		fetch("/groups")
			.then((r) => r.json())
			.then((data) => setGroups(data));
	},[]);

	function handleSubmit(e) {
		e.preventDefault();

		const data = { title, status };

		fetch("/groups", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => {
			console.log("new group");
		});

		window.location.reload();
	}

	return (
		<div className="group">
			<div className="groupForm">
				<form onSubmit={handleSubmit}>
				<div class="mb-3">
					<input
						type="text"
						value={title}
						placeholder="group name"
						class="form-control"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<input
						type="text"
						value={status}
						placeholder="status"
						class="form-control"
						onChange={(e) => setStatus(e.target.value)}
					/>
				</div>	
					<button type="submit" class="btn btn-primary">add</button>
				</form>
			</div>

			<div className="group-list">
			<h2>List of groups</h2>
			<ol>
				{groups.map((item) => {
					return (
						<li style={{textalign:"left"}}>
						<div key={item.id}>
						<div >
							
							<p>Go to :<Link to={`/funds/${item.id}`}>{item.title}</Link></p>
							{/* <div className="messages">
								{item.messages.map((item) => {
									return <div key={item.id}>
                                        <li>{item.name}</li>
									</div>
								})}
							</div> */}
							
						</div>
						
						</div>
						</li>
						

					);
				})}

</ol>	
			</div>
		</div>
	);
}

export default Groups;
