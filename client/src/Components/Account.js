import "../Css/Account.css";

import React, { useState } from "react";

import AddPost from "./AddPost";
import Admin from "./Admin";
import Moment from "moment";
import { FaComments } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import {  MdOutlinePostAdd, MdGroupAdd, MdOutlineAccountCircle, MdOutlineMenuOpen } from "react-icons/md";
import {
	FaCheckCircle,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Groups from "./Groups";

function Account({ user, userPosts }) {
	const [show, setShow] = useState(false);
	const [showGroupForm, setShowGroupForm] = useState(false);
	const [query, setQuery] = useState("");

	const { username, image_url, created_at, posts, comments, groups } = user;

	function handleShow() {
		setShow((show) => !show);
	}

	function handleShowGroupForm() {
		setShowGroupForm((showGroupForm) => !showGroupForm);
	}

	const addIconStyles = {
		color: "orange",
	};

	const socialStyles = {
		height: "40px",
		width: "40px",
		padding: "10px",
		color: "white",
		cursor: "pointer",
		borderRadius: "50%",
	};

	const liveUser = {
		fontWeight: "bold",
	};

	const crudIcon = {
		cursor: "pointer",
	};

	const sideBarIcons ={
		marginTop: "35px",
		color: "gray",
		cursor: "pointer"
	}

	const sideBarIconsTop = {
		marginTop: "60px",
		backgroundColor: "blue",
		width: "73px",
		height: "73px",
		padding: "15px"
	}

	console.log(user);
	return (
		<div className="account">
			<div className="account_side_left">
			<MdOutlineMenuOpen style={sideBarIconsTop} size="1em"/>
				<div className="sideBarIcons">
				{/* <MdOutlineMenuOpen style={sideBarIconsTop} size="3em"/>
				<br/> */}
				<MdOutlinePostAdd onClick={handleShow} style={sideBarIcons} size="2em"/>
				<br/>
				<MdGroupAdd onClick={handleShowGroupForm} style={sideBarIcons} size="2em"/>
				<br/>
				<MdOutlineAccountCircle style={sideBarIcons} size="2em"/>
				</div>
			</div>
			<div className="account_center">
				<div>
					{/* <div className=" account_search_bar">
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
				</div> */}
					<div className="profile_top">
					{show ? <AddPost/> : null} 
						<div className="div"></div>
						{showGroupForm ? <Groups/> : null}
						<div className="div_container">
							<img className="account_profile" src={image_url} />
							<div className="sideOf_profile">
								<h4 className="username">{username}</h4>
								<p className="createdAt">created on {created_at}</p>
								<div className="liveUser">
									<AiOutlineCheck size="1.5em" />
								</div>
								<div className="prof_icon">
									<FaFacebookF
										className="profIcon"
										id="face"
										size="0.9em"
										style={socialStyles}
									/>
									<br />
									<FaInstagram
										className="profIcon"
										id="insta"
										size="0.9em"
										style={socialStyles}
									/>
									<br />
									<FaLinkedinIn
										className="profIcon"
										id="linked"
										size="0.9em"
										style={socialStyles}
									/>
									<br />
									<FaTwitter
										className="profIcon"
										id="twitter"
										size="0.9em"
										style={socialStyles}
									/>
									<br />
									<FaYoutube
										className="profIcon"
										id="tube"
										size="0.9em"
										style={socialStyles}
									/>
								</div>
							</div>
							<div className="involved">
								<p className="p_involved">
									<b>posts:</b> {posts.length}
								</p>
								<p className="p_involved">
									<b>groups:</b> {groups.length}
								</p>
								<p className="p_involved">
									<b>comments:</b> {comments.length}
								</p>
							</div>
						</div>
					</div>

					{/* <div className="profile_bottom">
					<button className="account_add_post" onClick={handleShow}>
						Add Post
					</button>
				</div> */}

					<div className="more">
						<h5 className="more_nav first">chat rooms</h5>
						<h5 className="more_nav">posts</h5>
						<h5 className="more_nav">comments</h5>
						<h5 className="more_nav">fundraisers</h5>
						<h5 className="more_nav">premium membership</h5>
						<h5 className="more_nav ">adverts</h5>
						<h5 className="more_nav ">add something</h5>
						<h5 className="more_nav last">add something</h5>
					</div>
				</div>

				<div className="account_center">
					{/* <div className="vid"> */}
					{/* <h4>Advert area</h4> */}
					{/* <video  className="account_adverts" src="https://ak.picdn.net/shutterstock/videos/1043972062/preview/stock-footage-reeds-sway-on-wind-and-sun-rays-wild-grass-sway-from-wind-on-nature-sky-reed-in-meadow-sways-grass.webm" autoPlay loop muted />
				</div> */}
					{user.posts
						?.filter((item) => item.content.toLowerCase().includes(query))
						.map((item) => (
							<div className="account_posts">
								<div className="img_container">
									<img className="account_img" src={item.image_url} />
								</div>
								<div className="account_posts_content">
								<button className="read">read</button>
									<h4 className="postTitle">{item.title}</h4>
									<div id="body">
									<p className="body">
										A post by {username}: {item.content}...
									</p>
									</div>

									<div className="info">
										{/* <p>{item.created_at}</p> */}
										<p className="right">
											<b>{item.comments}</b>
											<FaComments style={addIconStyles} size="1.2em" />
										</p>
										<div className="dup_btn">
											<RiDeleteBin6Line
												className="account_delete"
												style={crudIcon}
												size="1.2em"
											/>
											<RiEditBoxLine
												className="account_update"
												style={crudIcon}
												size="1.2em"
											/>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>

			<div className="account_side_right"></div>
		</div>
	);
}

export default Account;
