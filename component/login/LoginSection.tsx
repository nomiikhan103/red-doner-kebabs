'use client'
import React from 'react';
import LoginForm from '../form/LoginForm';

const LoginSection = () => {
  return (
    <div className="page-area pt-100 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cafeu-page-content">
              <div className="post-entry post-entry--top-margin">
                <div className="login">
                  <div className="login-notices-wrapper"></div>

                  <h2>Login</h2>

                  <LoginForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
