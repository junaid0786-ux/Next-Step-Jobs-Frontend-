import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username must be 3-15 characters (letters, numbers, underscores only)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters, include uppercase, lowercase, number, and special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted ✅", formData);
      alert("Login successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen bg-blue-400 flex items-center justify-center">
        <div className="bg-white max-w-md w-full p-4  rounded-2xl shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold ">
              <span className="inline-block border-b-4 border-blue-500 leading-none">Lo</span>
              <span>gin</span>
            </h1>

            {/* Username */}
            <div className="flex flex-col mb-4 mt-5">
              <label htmlFor="username" className="text-gray-700 font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={`border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>

            {/* Password */}
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>

              <div className='mt-2 text-center'>
                <h2>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Register
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
