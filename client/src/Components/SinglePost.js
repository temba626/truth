import React from "react";
import "../Css/SinglePost.css"
import { FaComments } from "react-icons/fa"

function SinglePost({ onDelete, update, id, post, image, time, author, content, comments, title  }) {
	function handleDeleteClick(){
        
		fetch(`/posts${id}`, {
			method: "DELETE",
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }
	return (
		<div className="post_container">
			<div className="post">
				<div className="intro">
					<img src={image} alt="profile_img" className="img"/>
					<h3 className="title">{title}</h3>
				</div>
				<div className="post_content">
					<p className="body">
						A post by {author}: {content}
					</p>
					<div className="info">
						<p>{time}</p>
						<p className="right"><b>{comments}</b><FaComments size="1.4em"/></p>
					</div>
					<button onClick={handleDeleteClick}>X</button>
					<button>edit</button>
				</div>
			</div>
		</div>
	);
}

export default SinglePost;
