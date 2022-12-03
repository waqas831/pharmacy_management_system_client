import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState, useEffect } from "react";
import ".././login/register.css";
import { addUsers } from "../../services/userService";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("636212008c2c7bce18773348");
  const [name, setName] = useState("");

  const userRegister = async (e) => {
    e.preventDefault();
    const mydata = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    const userRegister = await addUsers(mydata);
    console.log("mydata", userRegister.data);
    if (userRegister.data.msg == "Success") {
      navigate("/login");
    } else {
      alert("Email already exists");
    }
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span
                className="link-primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
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
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                placeholder="Enter Your password"
                className="form-control mt-1"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={userRegister}
              >
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
