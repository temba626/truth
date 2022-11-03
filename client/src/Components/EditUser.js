import React, { useState } from "react";

function EditUser({onClose, id}) {

    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
		setErrors([]);
		fetch(`/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				image_url: imageUrl
			}),

		}).then((r) => {
			if (r.ok) {
				r.json().then((post) => {
                    setUsername(post.username)
                    setImageUrl(post.imageUrl)
                });
			} else {
				r.json().then((err) => setErrors(err.errors));
			}

            window.location.reload(false);

            // setContent('')
            // setTitle('')
		});


    }
    //console.log(id)

    return (
        <form onSubmit={handleSubmit}>
            <input id="username" className="post_input" placeholder="Enter a new username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <p></p>
            <input id="imageurl" className="post_input" placeholder="Enter a new image URL" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            <p></p>
            <button type="submit" className="btn">Update</button>

            <button style={{marginLeft: "30px"}} onClick={onClose}>Close</button>
        </form>
    );
}

export default EditUser;

