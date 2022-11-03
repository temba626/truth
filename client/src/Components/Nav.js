import "../Css/Nav.css"

import { NavLink } from "react-router-dom"
import React from "react";
import {useNavigate} from "react-router-dom"

function Nav({user, setUser}) {

    const navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser("");
            navigate("/")
          }
        });
      }

	return (
		<div className="nav_bar">
            <div className="logo_container">
			<img className="logo" src="https://pbs.twimg.com/profile_images/1489569110040141826/ZzZgytR8_400x400.png" alt="logo"/>
			</div>
			<ul className="nav">
				<NavLink className="li" to="/" style={{ textDecoration: "none" }}>
					Home
				</NavLink>
				<NavLink className="li" to="/posts" style={{ textDecoration: "none" }}>
					Posts
				</NavLink>
				<NavLink className="li" to="/groups" style={{ textDecoration: "none" }}>
					Groups
				</NavLink>
				<NavLink className="li" to="/funds" style={{ textDecoration: "none" }}>
					Fundraisers
				</NavLink>
				<NavLink className="li" to="/account" style={{ textDecoration: "none" }}>
					Account
				</NavLink>
				<NavLink className="li" to="/about" style={{ textDecoration: "none" }}>
					About
				</NavLink>
				{/* <NavLink className="li" to="/admin" style={{ textDecoration: "none" }}>
					admin
				</NavLink> */}
				{/* <NavLink
					className="li"
					to="contacts"
					style={{ textDecoration: "none" }}
				>
					Contact us
				</NavLink> */}
                <NavLink onClick={handleLogoutClick} className="li" style={{ textDecoration: "none" }}>
					Logout
				</NavLink>
			</ul>
		</div>
	);
}

export default Nav;
