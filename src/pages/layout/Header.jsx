import React from 'react';
import UserAvatar from '../../assets/img/user_avatar.jpg';

const Header = () => {
  return (
    <div className='ui-header'>
      <div className="user">
        <img src={UserAvatar} alt="User Name" className="img-thumbnail rounded-circle avatar"/>
        <div className='welcome'>
          <label>Welcome back</label>
          <span>Ariel Cardoso</span>
        </div>
        <div className='divisor'></div>
        <div className='last-access'>
          <label>Last access on</label>
          <span>Apr 01, 2021 at 21:00 PM EST</span>
        </div>
      </div>
      <div className="menu">
        <div className='search'>
          <input className='form-control' name='search' id='search-bar' placeholder='Search' />
          <i className='bi bi-search' ></i>
        </div>
        <div className='notifications'>
          <a href="#">
            <i className='bi bi-bell has-news' ></i>
          </a>
        </div>
        <div className='settings'>
          <a href="#">
            <i className='bi bi-gear' ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;