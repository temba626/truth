import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/ChatRoom.css";
import Messages from "./Messages";

function ChatRoom({ user }) {
	const [title, setTitle] = useState("");
	// const [status, setStatus] = useState(0);
	const [messages, setMesages] = useState([]);

	let { id } = useParams();

	let { name, username, image_url } = user;

	console.log(title);
	useEffect(() => {
		fetch(`/groups/${id}`)
			.then((r) => r.json())
			.then((data) => {
				setMesages(data.messages);
				setTitle(data.title);
				// setStatus(data.status);
			});
	}, []);

	const smsInput = {
		with: "400px",
		color: "red",
	};
	return (
		<div className="chatroom">
			<div className="user_p">
				<h3>{title}</h3>
				<p>
					{username} welcome to {title}
				</p>
				<p>
					<img className="chat_pic" src={image_url} />
				</p>
			</div>
			<div className="message_area">
				{messages.map((item) => {
					return (
						<div key={item.id} className="chatroom_body">
							<div></div>
							<div className="test">
								<li className="">{item.content}</li>
							</div>
						</div>
					);
				})}
				<Messages
					style={smsInput}
					id={id}
					setData={setMesages}
					messages={messages}
				/>
			</div>
		</div>
	);
}

export default ChatRoom;
