import React from 'react';
import { ReactSVG } from 'react-svg';

import Brand from '../../assets/img/bmo_brand.svg';

const Sidebar = () => {
  return (
    <div className='ui-sidebar'>
      <div className='brand'>
        <ReactSVG src={Brand} alt="BMO" />
      </div>
      
      <div className="menu">
        <ul className="list-unstyled">
          <li>
            <a href="#menu-account" className='active dropdown-toggle collapsed' data-bs-toggle="collapse" aria-expanded="false" >My Account</a>
            <ul id='menu-account' className="collapse list-unstyled">
              <li>
                <a href="#" className='account-number' >
                  <small>Checking</small>
                  <span>0123 4567-890</span>
                  <i className='bi bi-chevron-right' ></i>
                </a>
              </li>
              <li>
                <a href="#" className='account-number' >
                  <small>Savings</small>
                  <span>0987 6543-210</span>
                  <i className='bi bi-chevron-right' ></i>
                </a>
              </li>
              <li><a href="#">Account Summary</a></li>
              <li><a href="#">Manage accounts</a></li>
            </ul>
          </li>
          <li>
            <a href='#menu-payments-transfers' className="dropdown-toggle collapsed" data-bs-toggle="collapse" aria-expanded="false" >Payments & Transfers</a>
            <ul id='menu-payments-transfers' className="collapse list-unstyled">
              <li><a href="#">Make a Payment</a></li>
              <li><a href="#">Make a Transfer</a></li>
              <li><a href="#">My Payment History</a></li>
              <li><a href="#">My Transfer History</a></li>
              <li><a href="#">Investigate a Bill Payment</a></li>
              <li><a href="#">Manage a Payees</a></li>
              <li><a href="#">Add a Payee</a></li>
              <li><a href="#">Add a Pre-Authorized Payment</a></li>
            </ul>
          </li>
          <li>
            <a href="#menu-profile_documents" className="dropdown-toggle collapsed" data-bs-toggle="collapse" aria-expanded="false" >My Profile & eDocuments</a>
            <ul id='menu-profile_documents' className="collapse list-unstyled">
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
            </ul>
          </li>
          <li>
            <a href="#menu-products" className="dropdown-toggle collapsed" data-bs-toggle="collapse" aria-expanded="false" >Explore Products</a>
            <ul id='menu-products' className="collapse list-unstyled">
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="menu bottom-menu">
        <ul className="list-unstyled">
          <li>
            <a href="" >
              <i className='bi bi-gear'></i>
              Visit other BMO Sites
            </a>
          </li>
          <li>
            <a href="" >
              <i className='bi bi-geo-alt'></i>
              Locate an ATM or Branch
            </a>
          </li>
          <li>
            <a href="" >
              <i className='bi bi-chat-left-dots'></i>
              Support / Contact Us
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
export default Sidebar;