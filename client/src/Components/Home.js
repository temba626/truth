import "../Css/Home.css";
import { NavLink, Navigate } from "react-router-dom";
import React, { useState } from "react";

import About from "./About";
import Admin from "./Admin";
import { BsTelephoneFill } from "react-icons/bs";
import Login from "./Login";
import { MdLocationPin } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

function Home({onLogin}) {
	const [show, setShow] = useState(false)
	const iconStyles = {
		marginTop: "12px",
		marginRight: "10px",
		marginLeft: "10px",
	};

function handleShow() {
	setShow((show) => !show);
}

	return (
		
			<div className="Home">
				{show ?(
				<Login onLogin={onLogin}/>
				) : null
				}
				<div className="home_bottom">
					<div className="home_content">
					<h1>
						Moringa Alumni Platform <br /> a robust software engineering community
						</h1>
						<p>
							
						<br /> Explore and share new ideas in the tech world while networking
						 with the best of the best from moringa pool of software engineers.
							
						</p>
					</div>

					<div className="home_btn">
						<button className="login" onClick={handleShow}>get started</button>
					</div>
					<div className="home_top home_flex">
						<div className=" inner_hf">
							<div className="home_flex">
								<BsTelephoneFill style={iconStyles} />
								<p className="htp">+254742592594</p>
							</div>

							<div className="home_flex">
								<SiMinutemailer style={iconStyles} />
								<p className="htp">map123@gmail.com</p>
							</div>

							<div className="home_flex">
								<MdLocationPin style={iconStyles} />
								<p className="htp">Ngong Lane Plaza</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		
	);
}

export default Home;
