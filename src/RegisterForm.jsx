import React from "react";
import "./RegisterForm.css";

function Register() {
  return (
    <div className="register" id="register">
      <div className="form-box register ">
        <form action={""}>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i class="fa-solid fa-user"></i>
          </div>
          
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i class="fa-regular fa-envelope-open"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i class="fa-solid fa-lock"></i>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <p>or register with social platforms</p>
          <div className="social-icon">
            <a href="#">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
