import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", data)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up__container">
      <form onSubmit={handleSubmit} className="sign-up__form">
        <h2>Sign Up</h2>
        <label htmlFor="username">username:</label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          type="text"
          placeholder="Username"
        />
        <label htmlFor="email">email:</label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          autoComplete="off"
          placeholder="example@example.com"
        />
        <label htmlFor="password">password:</label>
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          autoComplete="off"
          placeholder="****"
        />
        <button type="submit">Sign Up</button>
        <p>
          Have an account <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
