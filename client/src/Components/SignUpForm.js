import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [status, setStatus] = useState(0);
	const [cohort, setCohort] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
   

	function handleSubmit(e) {
		e.preventDefault();
		setErrors([]);
		setIsLoading(true);
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
				password_confirmation: passwordConfirmation,
				image_url: imageUrl,
				name: name,
				status: status,
				cohort: cohort,
				email: email,
			}),
		}).then((r) => {
			setIsLoading(false);
			if (r.ok) {
				r.json().then((user) => onLogin(user));
                navigate("/posts");
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<br />
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="current-password"
				/>
				<br />

				<input
					type="password"
					id="password_confirmation"
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
					autoComplete="current-password"
				/>
				<br />

				<input
					type="text"
					id="imageUrl"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
				/>
				<br />
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					id="cohort"
					value={cohort}
					onChange={(e) => setCohort(e.target.value)}
				/>
				<br />
				<input
					type="text"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					type="text"
					id="status"
					value={status}
					onChange={(e) => setStatus(e.target.value)}
				/>
				<br />
				<button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

				<div className="errors">
					{errors.map((err) => (
						<li key={err}>{err}</li>
					))}
				</div>
			</form>
		</div>
	);
}

export default SignUpForm;
