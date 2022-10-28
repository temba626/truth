import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Groups.css";
import ChatRoom from "./ChatRoom";

function Groups() {

	// App.cable = ActionCable.createConsumer(); 

	const [title, setTitle] = useState("");
	const [status, setStatus] = useState(0);
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
	}

	return (
		<div>
			<div className="groupForm">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={title}
						placeholder="title"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						value={status}
						placeholder="status"
						onChange={(e) => setStatus(e.target.value)}
					/>
					<button type="submit">add</button>
				</form>
			</div>

			<div>
				{groups.map((item) => {
					return (
						<div key={item.id}>
						<div style={{display: "flex"}}>
							<Link to={`/funds/${item.id}`}>{item.title}</Link>
							<div className="messages">
								{item.messages.map((item) => {
									return <div key={item.id}>
                                        <li>{item.name}</li>
									</div>
								})}
							</div>
						</div>
						<ChatRoom id={item.id}/>
						</div>
						

					);
				})}

				
			</div>
		</div>
	);
}

export default Groups;
