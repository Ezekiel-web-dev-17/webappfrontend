import React, { useContext, useEffect, useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ApiContext } from "../../context/ApiContext.jsx";

const login = ({ onLogin }) => {
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // handles change in form input
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // On clicking the submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const res = await api.post("/api/v1/sign-in", formData);
      // const { token, user: userData } = res.data;

      // // Save token in localStorage
      // localStorage.setItem("auth-token", token);

      // // Decode token to get payload
      // const mod = await import("jwt-decode");
      // const jwtDecode = mod.default || mod;
      // const payload = jwtDecode(token);

      // // Let parent know who’s logged in
      // onLogin(payload);

      // // Optionally store user data separately
      // localStorage.setItem("user", JSON.stringify(userData));

      // goes to home page
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page px-1 d-flex justify-content-center flex-column align-items-center">
      <Link
        to="/"
        className="logo justify-content-center mt-5 text-decoration-none text-white fs-1 mb-4 bg-black"
      >
        <BsChatDots className=" bg-black" />
        <h1 className=" ps-1 mb-0 bg-black">Talk</h1>
      </Link>

      <div className="d-flex w-75 justify-content-center flex-column align-items-center border rounded-3 py-2">
        <h1 className=" w-75 text-white">Login</h1>
        {error && <p className="error">{error}</p>}
        <form
          onSubmit={handleSubmit}
          action=""
          className="login-form d-flex justify-content-center flex-column align-items-center gap-3 mt-2"
        >
          <input
            type="text"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            value={formData.email}
            autoComplete={formData.email}
            required
            className=" border-0 border-bottom  border-white px-2 pb-1"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={formData.password}
            className="border-0 border-bottom border-white px-2 pb-1"
            required
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="px-4 pb-1 mb-4 mt-4 fw-bolder border-0 bg-warning rounded text-white"
          >
            Login
          </button>
        </form>

        <p className=" bg-transparent text-white">
          Don't have an account?{" "}
          {
            <Link to="/sign-up" className=" fw-bold">
              Sign up
            </Link>
          }
        </p>
      </div>
    </div>
  );
};

export default login;
