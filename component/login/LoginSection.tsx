import React from "react";
import UserLoginForm from "../form/UserloginForm";

function LoginSection() {
  return (
    <div className='page-area pt-100 pb-85'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='cafeu-page-content'>
              <div className='post-entry post-entry--top-margin'>
                <div className='login'>
                  <div className='login-notices-wrapper'></div>

                  <UserLoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
