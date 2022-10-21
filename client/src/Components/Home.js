import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import "../Css/Home.css";
import { NavLink } from "react-router-dom";
import Login from "./Login";

function Home({onLogin}) {
	const iconStyles = {
		marginTop: "12px",
		marginRight: "10px",
		marginLeft: "10px",
	};

	const socialStyles = {
		paddingLeft: "10px",
		marginTop: "12px",
		cursor: "pointer",
	};
	return (
		<div className="Home">
			<Login onLogin={onLogin}/>
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
					<button className="signup">signup</button>
					<button className="login">login</button>
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
					<div className="home_social">
						<FaFacebookF size="0.9em" color="blue" style={socialStyles} />
						<br />
						<FaInstagram size="0.9em" color="orange" style={socialStyles} />
						<br />
						<FaLinkedinIn size="0.9em" color="blue" style={socialStyles} />
						<br />
						<FaTwitter size="0.9em" color="skyBlue" style={socialStyles} />
						<br />
						<FaYoutube size="0.9em" color="red" style={socialStyles} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
