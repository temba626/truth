import '../Css/LoginForm.css'

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function LoginForm({onLogin}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => {onLogin(user);
			if (user.status==="admin") {
				navigate("/admin");
			} else {
				navigate("/account");
			}}
			);
					// if (user.status=="admin") {
					// 	navigate("/admin");
					// } else {
					// 	navigate("/account");
					// }

          }
		  else {
            r.json().then((err) => setErrors(err.errors));
          }
		 //Added code for testing
		  console.log(r)
        });
      }

	return (
		<form onSubmit={handleSubmit} className="loginForm loginContainer">
			<h3 className='lTop'>welcome Back</h3>
			<div className='mb-3'>
			<input
				type="text"
				id="username"
				value={username}
				placeholder="username"
				className='form-control'
				onChange={(e) => setUsername(e.target.value)}
			/>
			</div>
			<br/>
			<div className='mb-3'>
			<input
				type="password"
				id="password"
				value={password}
				placeholder="password"
				className='form-control'
				onChange={(e) => setPassword(e.target.value)}
			/>
			</div>
            <br/>
			<button variant="fill" className="log_btn" type="submit">
				{isLoading ? "Loading..." : "Login"}
			</button>
			<br/>
			<div className="errors">
				{errors.map((err) => (
					<li key={err}>{err}</li>
				))}

			</div>
		</form>
	);
}

export default LoginForm;
