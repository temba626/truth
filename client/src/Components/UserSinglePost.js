import React from 'react'

function UserSinglePost() {
  return (
    <div>
        <div key={item.id} className="account_posts">
								<div className="img_container">
									<img className="account_img" src={item.image_url} />
								</div>
								<div className="account_posts_content">
								<button className="read">read</button>
									<h4 className="postTitle">{item.title}</h4>
									<div id="body">
									<p className="body">
										A post by {username}: {item.content}...
									</p>
									</div>

									<div className="info">
										{/* <p>{item.created_at}</p> */}
										<p className="right">
											<b>{item.comments}</b>
											<FaComments style={addIconStyles} size="1.2em" />
										</p>
										<div className="dup_btn">
											<RiDeleteBin6Line
												className="account_delete"
												style={crudIcon}
												size="1.2em"
												
											/>
											<RiEditBoxLine
												className="account_update"
												style={crudIcon}
												size="1.2em"
												onClick={showEditUi}
											/>
										</div>
										{editUi ? <EditPost onClick={showEditUi}/> : null}
									</div>
								</div>
							</div>
    </div>
  )
}

export default UserSinglePost