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
							kick start your dreams <br /> with us at map
						</h1>
						<p>
							Figma image overlay can come in handy when trying to put text on top
							of an image.
							<br /> Figma image tricks and trips. Design well Figma image overlay
							can come in handy when trying <br />
							to put text on top of an image. Figma image tricks and trips. Design
							well ...
						</p>
					</div>

					<div className="home_btn">
						<button className="signup" onClick={handleShow}>Signup</button>
						<button className="login" onClick={handleShow}>login</button>
						
						
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
