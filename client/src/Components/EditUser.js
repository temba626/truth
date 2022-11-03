import React, { useState } from "react";

function EditUser({onClose, email}) {

    const [username, setUsername] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function handleSubmit() {

    }

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

