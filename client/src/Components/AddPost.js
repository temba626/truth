import React, { useState } from "react";
import "../Css/AddPost.css"

function AddPost({onClick}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    

    function handleSubmit(e) {
		e.preventDefault();
		setErrors([]);
		fetch("/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				content: content
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((post) => {
                    setTitle(post.title)
                    setContent(post.content)
                });
			} else {
				r.json().then((err) => setErrors(err.errors));
			}

            window.location.reload(false);

            setContent('')
            setTitle('')
		});
	}

	return (
		<div className="addPost">
			<form onSubmit={handleSubmit}>
				<input type="text" id="title" className="post_input" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
<br/>
				<input type="text" id="content" className="post_input" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)}/>
<br/>
                <button type="submit" className="btn" >submit</button>
                <button onClick={onClick}>X</button>
			</form>
		</div>
	);
}

export default AddPost;
