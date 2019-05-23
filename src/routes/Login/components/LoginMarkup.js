import React from 'react';
import PropTypes from 'prop-types'
import './LoginMarkup.scss';
const googleIcon = require("../../../styles/img/google-logo.png");
const windowsIcon = require("../../../styles/img/office-365-logo.png");
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginMarkup = ({loginState, responseGoogle, responseFacebook, handleEmailInputChange, handlePasswordInputChange, onSubmit,onInputFocus}) => {
  return <div className="main-login-css">
    <table id="main-table">
      <tbody>
        <tr>
          <td>
            <div id="main" className="login-page">
              <div className="main-title">Start making calls</div>
              <div className="main-content" id="div_088a_0">
                <div className="iblock">
                  <h4 id="h4_088a_0">Log in using your Google<br/>or Office 365 Account</h4>
                  <a id="google-login-button">
                    <div className="">
                      <div className="g-logo">
                        <GoogleLogin className="g-logo-button" clientId="627206490110-nonl1pksovsbag5b2peit0h4rko0m7mj.apps.googleusercontent.com" buttonText="LOGIN WITH GOOGLE" onSuccess={responseGoogle} onFailure={responseGoogle}/>
                      </div>
                    </div>
                  </a>
                  <a id="microsoft-login-button">
                    <div className="">
                      <div className="f-logo">
                        <FacebookLogin className="f-logo-button" appId="410876039466808" fields="name,email,picture" callback={responseFacebook}/>
                      </div>
                    </div>
                  </a>
                  <div className="mblock" id="div_088a_1">
                    <a className="login-saml" href="/auth/saml/request">Log in with another provider</a>
                  </div>
                </div>

                <div className="login-divider iblock mobile-hide">
                  <div className="divider-text">OR</div>
                  <div className="vertical-line"></div>
                </div>

                <div className="iblock">
                  <h4 className="email">Log in using your email address</h4>
                    <div className="login-icon-error"></div>
                    <div><input type="text" id="email" name="email" placeholder="Email" autoComplete="off"  title="Email" value={loginState.email} onFocus={ onInputFocus }  onChange={handleEmailInputChange}/></div>
                    <div><input type="password" className="error" id="password" name="password" placeholder="Password" title="Password" autoComplete="off" value={loginState.password} onFocus={ onInputFocus } onChange={handlePasswordInputChange}/></div>
                    <div className="login-namepass-buttons">
                      <a id="forgot-pass" className="login-forgot-pass mblock" href="/forgotpassword" tabIndex="-1">Forgot password?</a>
                      <button value="log in" id="submit-btn" className={ (loginState.password === '' || loginState.email === '') ?  "login-submit btn p-btn disabled" : "login-submit btn p-btn"} onClick={onSubmit}>Log In</button>
                      <input type="submit" className="hide" disabled=""/>
                    </div>
                    { loginState.error != '' ? <div id="login-error-text" className="error-text">
                      {loginState.error}
                    </div>
                    : <article/>
                  }
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default LoginMarkup;
