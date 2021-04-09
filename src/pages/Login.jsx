import React from 'react';
import { ReactSVG } from 'react-svg';

import Brand from '../assets/img/bmo_brand.svg';
import Banner1 from '../assets/img/banner_1.jpg';
import Banner2 from '../assets/img/banner_2.jpg';
import Banner3 from '../assets/img/banner_3.jpg';

const Login = () => {
  return (
    <div className="login-page">
      
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div className="container" >
          <a class="navbar-brand" href="/">
            <ReactSVG src={Brand} alt="BMO" />
          </a>
          <div class="collapse navbar-collapse" id="login-navbar">
            <div class="navbar-nav ms-auto">
              <a class="nav-link" aria-current="page" href="/" alt="Visit other BMO Sites">
                <i className='bi bi-gear me-2'></i>
                Visit other BMO Sites
              </a>
              <a class="nav-link ms-2" aria-current="page" href="/" alt="Locate an ATM or Branch">
                <i className='bi bi-geo-alt me-2'></i>
                Locate an ATM or Branch
              </a>
              <a class="nav-link ms-2" aria-current="page" href="/" alt="Contact Us">
                <i className='bi bi-chat-left-dots me-2'></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    
      <div className="container mt-2 mb-5" >
        <div className="card">
          <div className="card-body p-4">

            <div className="row mt-3">
              <div className="col-12 col-md-8">
                <h4 className='text-primary' >Sign In to Online Banking</h4>
                <p className="mt-4">To begin, enter your 16 digit BMO Debit Card or BMO Credit card number and your password on the same page to sign in. You can also choose to remember your card number for future sign-ins, making signing in even easier.</p>
                <form action="" className="form-login card card-body bg-light mt-4">
                  <div className='form-inputs' >
                    
                    <div className="form-floating mb-2">
                      <input type="text" class="form-control" id="login_cardnumber" placeholder="Card Number" />
                      <label for="card_number">Card Number</label>
                      <i className='bi bi-credit-card' ></i>
                    </div>
                  
                    <div className="form-floating mb-2">
                      <input type="password" class="form-control" id="login_password" placeholder="Password" />
                      <label for="login_password">Password</label>
                      <i className='bi bi-key' ></i>
                    </div>
                  
                    <a href='' className='btn btn-sign-in btn-primary text-start mb-2' >
                      Sign In
                      <i className='bi bi-chevron-right float-end' ></i>
                    </a>
                  </div>
                    
                  <p className='small m-0' >Forgot your password?</p>
                </form>
              </div>
              <div className="col-12 col-md-4">
                <h4 className='text-primary' >Register for online banking</h4>
                <h5 className='mt-4' >BMO Debit or Credit Card Holders:</h5>
                <button className="btn btn-secondary float-end ms-3" >Register</button>
                <p className='small' >To access BMO Online Banking you will need your BMO Card. You will also be asked some security questions.</p>
                <h5 className='mt-5' >Need Help?</h5>
                <i className="bi bi-question-circle fs-1 float-end ms-3" ></i>
                <p className='small' >Visit Ways to Bank to see the features and functions of BMO Online Banking. Still have a question? Try our Online Support Tool.</p>
              </div>
            </div>

          </div>
          <div className="card-footer p-4">
            <div className="row banners pb-4 text-center">
              <div className="col-md-4">
                <a href='/'>
                  <img src={Banner1} className='img-fluid' alt="" />
                </a>
              </div>
              <div className="col-md-4">
                <a href='/'>
                  <img src={Banner2} className='img-fluid' alt="" />
                </a>
              </div>
              <div className="col-md-4">
                <a href='/'>
                  <img src={Banner3} className='img-fluid' alt="" />
                </a>
              </div>
            </div>

            <h5>Your Security. Our Priority.</h5>
            <p className='small mt-3'>BMO will never contact you via unsolicited email, text, or phone call asking for sensitive information, passwords or PINs. If you get a call, voicemail, email or text from someone claiming to be from BMO and you think it's suspicious, contact us immediately using the information on the back of your card. We encourage you to take a moment to learn how to protect your accounts against email fraud, how to report fraudulent emails and read our 100% Electronic Banking Guarantee.</p>
            <p className='small mb-0'>We also recommend that you do not allow your browser or other password management services to remember your password, especially on shared and/or public devices. Refer to your browser's Help section for instructions on how to disable this feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;