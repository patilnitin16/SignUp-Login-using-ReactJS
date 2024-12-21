import React, { useState } from "react";
import emailpng from "../Components/Assets/email.png";
import passpng from "../Components/Assets/password.png";
import personpng from "../Components/Assets/person.png";
import "./Loginsignup.css";

const LoginSignup = () => {

const [header, setHeader] = useState("Sign-Up")
  return (
    <div className="container">
      <div className="subdiv">
        <div className="header">{header}</div>
        <div className="inputs">
            {header === "Login"?<div></div>:<div className="input">
            <img src={personpng} alt="" />
            <input type="text" placeholder="Name"/>
          </div>}
          
          <div className="input">
            <img src={emailpng} alt="" />
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <img src={passpng} alt="" />
            <input type="password" placeholder="Password"/>
          </div>
        </div>
        {header==="SignUp"?<div></div>:<div className="forget">
          <p>
            Forget password? <span>Click Here!</span>
          </p>
        </div>}
        
        <div className="submits">
          <button className={header === "Login" ? "gray" : "submit"} onClick={()=>{setHeader("SignUp")}}>SignUp</button>
          <button className={header === "SignUp" ? "gray" : "submit"} onClick={()=>{setHeader("Login")}}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
