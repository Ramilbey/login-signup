import "./LoginSignup.css";
import email from "../Assests/email.png";
import password from "../Assests/password.png";
import person from "../Assests/person.png";
import React from "react";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline">underline</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person} alt="" />
          <input type="text" />
        </div>

        <div className="input">
          <img src={email} alt="" />
          <input type="email" />
        </div>

        <div className="input">
          <img src={password} alt="" />
          <input type="password" />
        </div>
          </div>
          <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          <div className="submit-container">
              <div className="submit">Sign up</div>
              <div className="submit">Login</div>
          </div>
    </div>
  );
};

export default LoginSignup;
