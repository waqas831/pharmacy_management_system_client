import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from "react";
import "./register.css";
import { getUserLogin } from "../../services/userService";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async () => {
    const mydata = await getUserLogin(email, password);
    localStorage.setItem("token", mydata.data.token);
    localStorage.setItem("user", JSON.stringify(mydata.data.userData));
    console.log("asasssssssss", mydata.data);
    navigate("/");
  };

  return (
    <div className="login ">
      <p className="login_title">Login</p>
      <p style={{ color: "red", fontSize: "23px" }}></p>
      {/* <form className="login_form"> */}
      <label>Email</label>
      <div className="div_main">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="Enter Your Email"
        />
      </div>
      <label>Password</label>
      <div className="div_main">
        <input
          type="password"
          autoComplete="true"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          placeholder="Enter Your Password"
        />
      </div>
      <button className="login_btn" onClick={userLogin}>
        Login
      </button>
      {/* </form> */}
      <div className="signup_btn_redirect">
        <span>Dont have an account ?</span>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};
export default Login;
