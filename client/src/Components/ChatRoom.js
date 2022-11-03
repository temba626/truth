import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/ChatRoom.css";
import Messages from "./Messages";

function ChatRoom({ user }) {
	const [title, setTitle] = useState("");
	// const [status, setStatus] = useState(0);
	const [messages, setMesages] = useState([]);
	const [users, setUsers] = useState([]);

	let { id } = useParams();

	let { username, image_url, groups } = user;

	console.log(title);
	useEffect(() => {
		fetch(`/groups/${id}`)
			.then((r) => r.json())
			.then((data) => {
				setMesages(data.messages);
				setTitle(data.title);
				setUsers(data.users);
				// setStatus(data.status);
			});
	}, [messages]);

	const smsInput = {
		with: "400px",
		color: "red",
	};

	let sideNote = groups.map((group) => {
		return<div key={group.id}>
           <p>{group.title}</p>
		   <p>{group.messages}</p>
		</div>
	})

	console.log(groups)
	// const cotion = if (user.id===item.user.id) {
	// 	<li style={{float: "right"}}>{item.content}</li>
	// } else {
	// 	<li style={{float: "left"}}>{item.content}</li>
	// }

	function getChatMembers (){
		var chatmembers = []
	
		messages.forEach((m,i)=>{
			let {user} = m
	
			let indx = chatmembers.findIndex(el => el.id == user.id)
	
			if(indx == -1) chatmembers.push(user)
		})

		return chatmembers
	}


	console.log("mesages", messages);
	return (
		<div className="chatroom">
			<p className="all_users">
				<h5>group users</h5>
				{getChatMembers().map((item) => {
					return (
						<div key={item.id}>
							<div className="side_users">
								<img className="user_chat_pic" src={item.image_url} />
								<p>{item.name}</p>
							</div>
						</div>
					);
				})}
			</p>
			<div className="user_p">
				<h3 className="room_name">{title}</h3>
				<p>
					<img className="chat_pic" src={image_url} /> <b className="gr_username">{username}</b> 
				</p>
				<div className="sideNote">
					<h3>chatrooms</h3>
					<p>{sideNote}</p>
				</div>
			</div>
			<div className="message_area">
				<div className="messageSearch">
					<input type="text" placeholder="search message" />
				</div>
				{messages.map((item) => {
					let cbodyClass =
						item.user.id == user.id
							? "chatroom_body current-user-chat"
							: "chatroom_body";

					console.log(item.user);

					return (
						<div id="cbody" key={item.id} className={cbodyClass}>
							<div></div>
							<div className="test">
								<li className="sms_body">{item.content}</li>
								<li className="sender">from {item.user.name}...</li>
								{/* <li id="all_users">
									<div className="side_users">
										<img className="user_chat_pic" src={item.user.image_url} />
										<p>{item.user.name}</p>
									</div>
								</li> */}
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
