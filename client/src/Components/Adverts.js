import React from "react";
import '../Css/Adverts.css'

function Adverts(props) {
	return (props.trigger) ? (
		<div className="advetisement">
			<div className="advetisement_inner">
				<button className="close_btn" onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
			</div>
		</div>
	) : "";
}

export default Adverts;
