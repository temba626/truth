import React from 'react'

function DeletePost() {

    function handleDeleteClick(){
        
		fetch(`/posts/${id}`, {
			method: "DELETE"
		  })
			.then((r) => r.json())
			.then(() => onDelete(post));
    }

  return (
    <div>

    </div>
  )
}

export default DeletePost