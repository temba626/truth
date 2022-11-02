import "../Css/Posts.css";

import React, { useEffect, useState } from "react";

import { MdOutlineAdd } from "react-icons/md";
import NewPosts from "./NewPosts";
import SinglePost from "./SinglePost";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Courier from "./Courier";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [query, setQuery] = useState("");
	// const [adverts, setAdverts] = useState([])

	useEffect(() => {
		fetch("/posts")
			.then((r) => r.json())
			.then((d) => {
				setPosts(d);
			});
	}, []);

	// useEffect(() => {
	// 	fetch("/adverts")
	// 		.then((r) => r.json())
	// 		.then((d) => {
	// 			setPosts(d);
	// 		});
	// }, []);

	const addIconStyles = {
		color: "rgb(23, 27, 18)",
	};

	const socialStyles = {
		height: "35px",
		width: "35px",
		padding: "5px",
		color: "white",
		cursor: "pointer",
	};
	console.log(posts);

	function handleDeleteItem(deletedItem) {
		const updatedItems = posts.filter((item) => item.id !== deletedItem.id);
		setPosts(updatedItems);

		console.log(updatedItems);
	}

	console.log(posts);
	return (
		<span className="post_container">
			<div className="left"></div>
			<div className="middle">
				<div className="search_bar">
					<div className="search_area">
						<input
							className="search"
							type="text"
							id="search"
							placeholder="search"
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</div>
				<div className="center">
					{/* .filter((post) => post.user.name.toLowerCase().includes(query)) */}
					{posts.map((post) => {
						return (
							<div key={post.id}>
								<SinglePost
									onDelete={handleDeleteItem}
									setPosts={setPosts}
									postImg={post.image_url}
									post={post}
									id={post.id}
									title={post.title}
									image={post.user.image_url}
									time={post.created_at}
									author={post.user.name}
									content={post.content}
									comments={post.comments.length}
								/>
							</div>
						);
					})}
				</div>
			</div>

			<div className="right">
				<div className="new">
					<h3 className="new_h3">Latest Posts</h3>
					<NewPosts />
				</div>
				<div className="postsMediaIcons">
					<h3 className="pSocial_header">follow us</h3>
					<div className="post_social">
						<FaFacebookF id="face" size="0.9em" style={socialStyles} />
						<br />
						<FaInstagram id="insta" size="0.9em" style={socialStyles} />
						<br />
						<FaLinkedinIn id="linked" size="0.9em" style={socialStyles} />
						<br />
						<FaTwitter id="twitter" size="0.9em" style={socialStyles} />
						<br />
						<FaYoutube id="tube" size="0.9em" style={socialStyles} />
					</div>
				</div>

				<div className="advert">
					<h3 className="new_h3 ad_h3">advert area</h3>
				</div>
			</div>
		</span>
	);
}

export default Posts;
