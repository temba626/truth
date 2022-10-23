import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Css/LoginForm.css'

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
            r.json().then((user) => onLogin(user));
			navigate("/account");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
      
	return (
		<form onSubmit={handleSubmit} className="loginForm loginContainer">
			<input
				type="text"
				id="username"
				value={username}
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br/>
			<input
				type="password"
				id="password"
				value={password}
				placeholder="pasword"
				onChange={(e) => setPassword(e.target.value)}
			/>
            <br/>
			<button variant="fill" className="log_btn" type="submit">
				{isLoading ? "Loading..." : "Login"}
			</button>
			<div className="errors">
				{errors.map((err) => (
					<li key={err}>{err}</li>
				))}
			</div>
		</form>
	);
}

export default LoginForm;
