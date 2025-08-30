import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    const nameRegex = /^[A-Za-z]{2,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^[A-Za-z0-9@#$%^&*!]{6,}$/;

    if (!data.firstname || !nameRegex.test(data.firstname)) {
      errs.firstname = "Enter a valid first name";
    }
    if (!data.lastname || !nameRegex.test(data.lastname)) {
      errs.lastname = "Enter a valid last name";
    }
    if (!data.email || !emailRegex.test(data.email)) {
      errs.email = "Enter a valid email";
    }
    if (!data.password || !passRegex.test(data.password)) {
      errs.password = "Password must be at least 6 characters";
    }
    if (data.password !== data.confirmpassword) {
      errs.confirmpassword = "Passwords do not match";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Registered successfully!");
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } else {
      toast.error("Please fix the errors");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-screen flex items-center justify-center bg-blue-400">
          <div className="bg-white w-full max-w-md p-4 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-bold mb-6">
              <span className="inline-block border-b-4 border-blue-500 leading-none">Re</span>gister
            </h1>

            {/* First Name */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                value={data.firstname}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${errors.firstname ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.firstname && (
                <p className="text-sm text-red-500">{errors.firstname}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                value={data.lastname}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.lastname ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastname && (
                <p className="text-sm text-red-500">{errors.lastname}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter e-mail"
                value={data.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={data.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="confirm password"
                value={data.confirmpassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.confirmpassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmpassword && (
                <p className="text-sm text-red-500">{errors.confirmpassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Register
            </button>

            <div className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default Register;
