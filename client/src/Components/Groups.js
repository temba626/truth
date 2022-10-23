import React, { useEffect, useState } from "react";
import "../Css/Groups.css";

function Groups() {
	const [groups, setGroups] = useState([]);
	const [title, setTitle] = useState("");
	const [status, setStatus] = useState(0);
	const [content, setContent] = useState(0);

	// const [value, setValue] = useState({
	//     title: title,
	// 	status: status,
	// })

	function handleSubmit(e) {
		e.preventDefault();
		const data = {
			title: title,
			status: status,
		};

		fetch("/groups", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((r) => r.json())
			.then((d) => {
				setStatus(d.status);
				setTitle(d.title);
			});

		setTitle("");
		setStatus(0);
	}

	function handleMessageSubmit(e) {
		e.preventDefault();
		const data = {
			content: content,
		};

		fetch("/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((r) => r.json())
			.then((d) => setContent(d.content));
	}

	useEffect(() => {
		fetch("/groups")
			.then((r) => r.json())
			.then((d) => setGroups(d));
	}, []);

	console.log(groups);

	return (
		<div>
			
		</div>
	);
}

export default Groups;
