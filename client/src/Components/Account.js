import "../Css/Account.css";

import React, { useState } from "react";

import AddPost from "./AddPost";
import Admin from "./Admin";
import { FaComments } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { Navigate } from "react-router-dom";

function Account({ user, userPosts }) {
	const [show, setShow] = useState(false);
	const [query, setQuery] = useState("");

	const { username, image_url, created_at } = user;

	function handleShow() {
		setShow((show) => !show);
				
	}

	const addIconStyles = {
		color: "rgb(23, 27, 18)",
	};



	console.log(user);
	return (
		<div className="account">
			<div className="account_left">
				<div className=" account_search_bar">
					<div className="search_area">
						<input
							className="search search_account"
							type="text"
							id="search"
							placeholder="search"
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<button className="add_post">
						<MdOutlineAdd style={addIconStyles} size="1.2em" /> Post
					</button>
				</div>
				<div className="profile_top">
					<div className="div"></div>
					<div className="div_container">
						<img className="account_profile" src={image_url} />
						<h4 className="username">{username}</h4>
						<p>{created_at}</p>
					</div>
				</div>

				<div className="profile_bottom">
					<button className="account_add_post" onClick={handleShow}>
					   	Add Post
					</button>
				</div>
				

				{show ? <AddPost onClick={handleShow} /> : null}

				<div className="more">
					<h5>chat rooms</h5>
					<h5>fundraisers</h5>
					<h5>premium membership</h5>
					<h5>ads</h5>
				</div>
			</div>

			<div className="account_center">
				<div className="vid">
					{/* <h4>Advert area</h4> */}
					<video  className="account_adverts" src="https://ak.picdn.net/shutterstock/videos/1043972062/preview/stock-footage-reeds-sway-on-wind-and-sun-rays-wild-grass-sway-from-wind-on-nature-sky-reed-in-meadow-sways-grass.webm" autoPlay loop muted />
				</div>
				{user.posts
					?.filter((item) => item.content.toLowerCase().includes(query))
					.map((item) => (
						<div className="account_posts">
							<h4 className="postTitle">{item.title}</h4>
							<p className="body">
								A post by {username}: {item.content}
							</p>
							
							<div className="info">
								<p>{item.created_at}</p>
								<p className="right">
									<b>{item.comments}</b>
									<FaComments size="1.4em" />
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Account;
