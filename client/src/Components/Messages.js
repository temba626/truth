import React, { useState } from 'react'

function Messages({id, setData, messages}) {

    const[newObj, setNewObj] = useState({
        content: "",
        group_id: id
    })

    function handleChange(event) {
        //  console.log(event.target.value)
        setNewObj({ [event.target.name]: event.target.value , group_id: id});
      }
console.log(id)
    function handleSubmit(e) {
        e.preventDefault()

        fetch("/messages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newObj),
		})
        .then((r) => r.json())
        .then((data) => setData([...messages, data]));

        // window.location.reload(false);
    }
  return (
    <div>
         <form onSubmit={handleSubmit} className="group_form">
                <input
                    className="post_input"
                    type="text"
                    value={newObj.content}
                    name="content"
                    placeholder="message"
                    onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>
    </div>
  )
}

export default Messages