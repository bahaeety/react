import { useState } from 'react';

const AuthForms = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mt-4  bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="row justify-content-center w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="col-md-6">
        <h2 class="text-2xl font-semibold text-center text-blue-600">BuzzHub - Register</h2>

          <form
            id="registerForm"
            style={{ display: isLogin ? 'none' : 'block' }}
            className="mt-4 space-y-4"
          >
            <div>
              <label className="form-label  text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                className="form-control w-full px-3 py-2 border rounded-md"
                placeholder="Enter your username"
                required
              />
              <p className="text-danger" id="usernameError">
                Username is required.
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <p className="text-danger" id="emailError">
                Valid email is required.
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
              <p className="text-danger" id="passwordError">
                Password must be at least 8 characters.
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                required
              />
              <p className="text-danger" id="confirmPasswordError">
                Passwords do not match.
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Register
            </button>
          </form>

          <form
            id="loginForm"
            style={{ display: isLogin ? 'block' : 'none' }}
          >
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                id="loginEmail"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              <p className="text-danger" id="loginEmailError">
                Valid email is required.
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="Enter your password"
                required
              />
              <p className="text-danger" id="loginPasswordError">
                Password is required.
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <button
              onClick={toggleForm}
              className="btn btn-secondary"
            >
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
