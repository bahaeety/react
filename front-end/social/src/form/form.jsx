import React, { useState } from 'react';

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <form
        id="registerForm"
        className="mt-4 space-y-4"
        style={{ display: isLogin ? 'none' : 'block' }}
      >
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your username"
            required
          />
          <p className="text-red-500 text-sm hidden" id="usernameError">
            Username is required.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            required
          />
          <p className="text-red-500 text-sm hidden" id="emailError">
            Valid email is required.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
            required
          />
          <p className="text-red-500 text-sm hidden" id="passwordError">
            Password must be at least 8 characters.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Confirm your password"
            required
          />
          <p className="text-red-500 text-sm hidden" id="confirmPasswordError">
            Passwords do not match.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      <form
        id="loginForm"
        className="mt-4 space-y-4"
        style={{ display: isLogin ? 'block' : 'none' }}
      >
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            id="loginEmail"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            required
          />
          <p className="text-red-500 text-sm hidden" id="loginEmailError">
            Valid email is required.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            id="loginPassword"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
            required
          />
          <p className="text-red-500 text-sm hidden" id="loginPasswordError">
            Password is required.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>

\      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={toggleForm}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
        >
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthForms;
