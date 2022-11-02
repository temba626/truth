import "../Css/App.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Account from "./Account";
import Admin from "./Admin";
import ChatRoom from "./ChatRoom";
import Courier from "./Courier";
import CreatePrivateGroup from "./CreatePrivateGroup";
import Funds from "./Funds";
import Groups from "./Groups";
import Home from "./Home";
import Nav from "./Nav";
import Posts from "./Posts";

function App() {

  

  const [user, setUser] = useState('');
  // const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  if (!user) return<>
  <Home onLogin={setUser} />;
  </> 

	return (
		<div className="App">
      <Nav user={user} setUser={setUser}/>
			<Routes>
				<Route exact path="/" element={<Home onLogin={setUser}/>} />
				<Route exact path="/posts" element={<Posts />} />
        <Route exact path='/funds/:id' element={<ChatRoom user={user}/>} />
        <Route exact path='/funds' element={<Funds/>} />
        <Route exact path="/groups" element={<Groups />} />
        <Route exact path="/admin" element={<Admin user={user}/>} />
        <Route exact path="/account" element={<Account user={user} />} />
        <Route exact path="/about" element={<Courier/>} />
        <Route exact path="/create_private_group" element={<CreatePrivateGroup/>} />
       
			</Routes>
		</div>
	);
}

export default App;