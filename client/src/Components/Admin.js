import "../Css/Admin.css";
import AddPost from "./AddPost";

import { React, useEffect, useState } from "react";

function Admin({ user }) {
	const [users, setusers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [show, setShow] = useState(false);
	const [ads, setAds] = useState([]);
	const [errors, setErrors] = useState([])

    function handleSubmitImage(e) {
		e.preventDefault();
		setErrors([]);
		fetch("/adverts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				image_url: ads
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((ad) => {
                    setAds(ad.image_url)
                });
			} else {
				r.json().then((err) => setErrors(err.errors));
			}


            setAds("")
		});
	}



	useEffect(() => {
		fetch("/users")
			.then((r) => r.json())
			.then((data) => setusers(data));
	}, []);

	useEffect(() => {
		fetch("/posts")
			.then((r) => r.json())
			.then((data) => setPosts(data));
	}, []);

	function handleShow() {
		setShow((show) => !show);
	}

	return (
		<div className="panel">
			{show ? (
				<div className="adm_add_post">
					<AddPost />
				</div>
			) : null}
			<div className="left">
				<h4>manage</h4>
				<ul>
					<li>advert</li>
					<li>fundraiser</li>
					<li>private group</li>
					<li>delete group</li>
					<li>update user</li>
					<li onClick={handleShow}>add post</li>
				</ul>
			</div>
			<div className="adm_right">
				<h2 className="header">welcome to the panel {user.name}</h2>
				<div className="adm_nav">
					<div className="users_box">
						<p>#{users.length} users</p>
					</div>

					<div className="users_box" onClick={handleShow}>
						<p>#{posts.length} posts</p>
					</div>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>image</th>
							<th>Cohort</th>
							<th>name</th>
							<th>Email</th>
							<th>add admin</th>
							<th>invite</th>
						</tr>
					</thead>
					{users.map((user) => {
						return (
							<tbody>
								<tr>
									<td className="td">{user.id}</td>
									<td>
										<img className="adm_image" src={user.image_url} />
									</td>
									<td className="td">{user.cohort}</td>
									<td className="td">{user.name}</td>
									<td className="td">{user.email}</td>
									<td>
										<button type="button" className="adm_btn">
											ADD AS ADMIN
										</button>
									</td>
									<td>
										<button type="button" className="adm_btn">
											INVITE TO COHORT
										</button>
									</td>

									{/* <td>
									<button type="button" className="adm_btn">
										ADD AS ADMIN
									</button>
								</td> */}
								</tr>
							</tbody>
						);
					})}
				</table>

				{show ? (
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>title</th>
								<th>author</th>
								<th>delete</th>
							</tr>
						</thead>
						{posts.map((post) => {
							return (
								<tbody>
									<tr>
										<td className="td">{post.id}</td>
										{/* <td>
									<img className="adm_image" src={user.image_url} />
								</td> */}
										<td className="td">{post.title}</td>
										<td className="td">{post.user.name}</td>
										{/* <td>
									<button type="button" className="adm_btn">
										ADD Post
									</button>
								</td> */}
										<td>
											<button type="button" className="adm_btn">
												DELETE
											</button>
										</td>

										{/* <td>
									<button type="button" className="adm_btn">
										ADD AS ADMIN
									</button>
								</td> */}
									</tr>
								</tbody>
							);
						})}
					</table>
				) : null}
			</div>
			<div>
				<form onSubmit={handleSubmitImage}>
					<input type="text" value={ads} onChange={(e) => setAds(e.target.value)} placeholder="insert image"/>

					<button type="submit">add</button>
				</form>
			</div>
		</div>
	);
}
export default Admin;
