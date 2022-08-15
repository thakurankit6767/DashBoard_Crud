import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    console.warn("email,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please Enter Correct Details");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter Password"
      />
      <button className="appButton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
