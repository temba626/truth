import React from "react";
import "../Css/SinglePost.css"
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri"


function SinglePost({ onDelete, postImg, id, post, image, time, author, content, comments, title  }) {
	function handleDeleteClick(){
        
		fetch(`/posts/${id}`, {
			method: "DELETE"
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }

	const crudIcon = {
		cursor: "pointer"
	}
	return (
		<div className="post_container">
			<div className="post">
				<div>
				<img className="postImg" src={postImg}/>
				</div>
				<div className="post_content">
				<h3 className="title">{title}</h3>
					<p className="body">
						{content}
					</p>
					<div className="sumUp">
					<img src={image} alt="profile_img" className="sp_img"/>
					<p className="sumUP_info"><b className="bGrey">written by</b> <br/> <b>{author}</b>, {time}</p>
					</div>
					{/* <div className="info">
						<p>{time}</p>
						<p className="right_comments"><b>{comments}</b><FaComments size="1.4em"/></p>
					</div> */}
					<div className="dup_btn">
					<RiDeleteBin6Line style={crudIcon} size="1.2em" onClick={handleDeleteClick}/>
					<RiEditBoxLine  style={crudIcon} size="1.2em"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SinglePost;
