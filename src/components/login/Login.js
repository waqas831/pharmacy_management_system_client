import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState, useEffect } from "react";
import "./register.css";
import SidebarMenu from "../Sidebar/SidebarMenu";
import { getUserLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    const mydata = await getUserLogin(email, password);
    if (mydata.data.msg == "Success") {
      localStorage.setItem("token", mydata.data.token);
      localStorage.setItem("user", JSON.stringify(mydata.data.userData));
      console.log("mydata", mydata.data);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span
                className="link-primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                placeholder="Enter Your Email"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                placeholder="Enter Your Password"
                className="form-control mt-1"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={userLogin}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
