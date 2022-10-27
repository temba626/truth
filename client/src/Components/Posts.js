import "../Css/Posts.css";

import React, { useEffect, useState } from "react";

import { MdOutlineAdd } from "react-icons/md";
import NewPosts from "./NewPosts";
import SinglePost from "./SinglePost";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [query, setQuery] = useState('')

	useEffect(() => {
		fetch("/posts")
			.then((r) => r.json())
			.then((d) => {
				setPosts(d);
			});
	}, []);

	const addIconStyles = {
		color: "rgb(23, 27, 18)",
	};
	console.log(posts);

	function handleDeleteItem(deletedItem) {
		const updatedItems = posts.filter((item) => item.id !== deletedItem.id);
		setPosts(updatedItems);
	  }
	return (
		<div className="container">
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
					<button className="add_post">
						<MdOutlineAdd style={addIconStyles} size="1.2em" /> Post
					</button>
				</div>
				<div className="center">
					{/* .filter((post) => post.user.name.toLowerCase().includes(query)) */}
					{posts.map((post) => {
						return (
							<div key={post.id}>
								<SinglePost
								 onDelete={handleDeleteItem}
								 setPosts={setPosts}
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

				<div className="advert">
                    <h3 className="new_h3 ad_h3">advert area</h3>
                </div>
			</div>
		</div>
	);
}

export default Posts;
