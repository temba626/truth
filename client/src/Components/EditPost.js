import React, { useState } from "react";


function EditPost({onClick, id}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])


    function handleEdit(e) {
		e.preventDefault();
		setErrors([]);
		fetch(`/posts/${id}`, {
			method: "PATCH",
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

            // setContent('')
            // setTitle('')
		});
	}

	return (
		<div className="addPost">
			<form onSubmit={handleEdit}>
				<input type="text" id="title" className="post_input" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
<br/>
				<input type="text" id="content" className="post_input" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)}/>
<br/>
                <button type="submit" className="btn" >Edit</button>
                <button onClick={onClick}>Edit</button>
			</form>
		</div>
	);
}


export default EditPost;