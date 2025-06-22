import React, { useContext, useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { ApiContext } from "../../context/ApiContext.jsx";

const auth = () => {
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await api.post("/api/v1/sign-up", formData);
      navigate("/login");
    } catch (err) {
      console.error("Sign-up failed:", err.response?.data || err.message);
      // Maybe show an error message UI here
    }
  };

  return (
    <div className="sign-up-page px-1 d-flex justify-content-center flex-column align-items-center">
      <Link
        to="/"
        className="logo justify-content-center mt-5 text-decoration-none text-white fs-1 mb-4 bg-black"
      >
        <BsChatDots className="bg-black" />
        <h1 className=" ps-1 mb-0 bg-black">Talk</h1>
      </Link>

      <div className="d-flex w-75 justify-content-center flex-column align-items-center border rounded-3 py-2">
        <h1 className=" w-75 text-white">Sign-Up</h1>

        <form
          action=""
          onSubmit={handleSubmit}
          className="login-form d-flex justify-content-center flex-column align-items-center gap-3 mt-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className=" border-0 border-bottom  border-white px-2 pb-1"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="username"
            className=" border-0 border-bottom  border-white px-2 pb-1"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            className="border-0 border-bottom  border-white px-2 pb-1"
            required
          />

          <button
            type="submit"
            className="px-4 pb-1 mb-4 mt-4 fw-bolder border-0 bg-warning rounded text-white"
          >
            Create an account
          </button>
        </form>

        <p className=" bg-transparent text-white">
          Already have an account?{" "}
          {
            <Link to="/login" className=" fw-bold">
              Login
            </Link>
          }
        </p>
      </div>
    </div>
  );
};

export default auth;
