import React from "react";
import "../Css/Nav.css"
import { NavLink } from "react-router-dom"

function Nav() {
	return (
		<div className="nav_bar">
            <img className="logo" src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png" alt="logo"/>
			<ul className="nav">
				<NavLink className="li" to="/" style={{ textDecoration: "none" }}>
					home
				</NavLink>
				<NavLink className="li" to="/posts" style={{ textDecoration: "none" }}>
					posts
				</NavLink>
				<NavLink className="li" to="/groups" style={{ textDecoration: "none" }}>
					groups
				</NavLink>
				<NavLink className="li" to="funds" style={{ textDecoration: "none" }}>
					fundraisers
				</NavLink>
				<NavLink className="li" to="/about" style={{ textDecoration: "none" }}>
					about
				</NavLink>
				<NavLink
					className="li"
					to="contacts"
					style={{ textDecoration: "none" }}
				>
					contact us
				</NavLink>
			</ul>
		</div>
	);
}

export default Nav;
