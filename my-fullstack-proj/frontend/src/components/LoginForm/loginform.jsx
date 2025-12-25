import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../../img/lahat.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setTimeout(() => {
      localStorage.setItem("userRole", "member");
      navigate("/member/MemberHome");
    }, 500);
  };

  return (
    <div className="login-container">
      <style>{`
        body, html {
          height: 100%;
          font-family: 'Arial', sans-serif;
        }
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; 
          padding: 20px;
          background-color: #ffffff;
          box-sizing: border-box;
        }
        .login-content {
          background-color: #FFD966;
          text-align: center;
          min-width: 120%;
        }
        .login_img {
          width: 200px;
          height: auto;
          margin-top: 50px;
        }
        .call-to-action {
          font-size: 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .call-to-action strong {
          color: #001B71;
        }
        .call-to-action span {
          color: #D59E00;
          font-weight: bold;
        }
        .form-box {
          background-color: #D59E00;
          padding: 80px 80px;
          width: 100%;
          max-width: 600px;
          box-sizing: border-box;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        .input-group {
          display: flex;
          align-items: center;
          background-color: #f3f3f3;
          padding: 14px 18px;
          border-radius: 4px;
          width: 100%;
        }
        .input-group .icon {
          margin-right: 10px;
          color: #333;
        }
        .input-group input {
          border: none;
          outline: none;
          font-size: 16px;
          background: transparent;
          width: 100%;
        }
        .login-btn {
          background-color: #2C2C2C;
          color: white;
          padding: 12px 0;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          width: 120px;
          align-self: center;
          transition: background-color 0.3s ease;
        }
        .login-btn:hover {
          background-color: #444;
        }
        .login_link {
          font-size: 14px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
      <div className="login-content">
        <img src={logo} alt="TA YOU Logo" className="login_img" />
      </div>
      <p className="call-to-action">
        <strong>Be a Volunteer</strong>. <span>Be the Change</span>.
      </p>
      <div className="form-box">
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="login_link" onClick={() => navigate("/signup")}>
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
