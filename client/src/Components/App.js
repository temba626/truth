import { Routes, Route } from "react-router-dom";
import "../Css/App.css";
import Home from "./Home";
import Posts from "./Posts";
import Nav from "./Nav";
import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
	return (
		<div className="App">
      <Nav/>
			<Routes>
				<Route exact path="/" element={<Home onLogin={setUser}/>} />
				<Route exact path="/posts" element={<Posts />} />
			</Routes>
		</div>
	);
}

export default App;
