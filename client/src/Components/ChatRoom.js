import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "../Css/ChatRoom.css";
import Messages from "./Messages";

function ChatRoom({id}) {
	// const [title, setTitle] = useState("");
	// const [status, setStatus] = useState(0);
	const [messages, setMesages] = useState([]);

	// let { id } = useParams();

	useEffect(() => {
		fetch(`/groups/${id}`)
			.then((r) => r.json())
			.then((data) => {
				setMesages(data.messages);
				// setTitle(data.title);
				// setStatus(data.status);
			});
	}, []);
	return (
		<div>
			{messages.map((item) => {
				return (
					<div className="test" key={item.id}>
					   <li className="">{item.content}</li>
                    </div>
				);
			})}
          <Messages id={id} setData={setMesages} messages={messages}/>  
		</div>
	);
}

export default ChatRoom;