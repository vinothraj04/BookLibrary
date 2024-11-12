import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my-login.css';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset here
    console.log('New password:', password);
  };

  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center align-items-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img
                  src="img/logo.jpg"
                  alt="bootstrap 4 login page"
                />
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Reset Password</h4>
                  <form onSubmit={handleSubmit} className="my-login-validation" noValidate>
                    <div className="form-group">
                      <label htmlFor="new-password">New Password</label>
                      <input
                        id="new-password"
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        autoFocus
                      />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                      <div className="form-text text-muted">
                        Make sure your password is strong and easy to remember
                      </div>
                    </div>

                    <div className="form-group m-0">
                      <button type="submit" className="btn btn-primary btn-block">
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer">
                Copyright &copy; 2017 &mdash; Your Company
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPasswordPage;
