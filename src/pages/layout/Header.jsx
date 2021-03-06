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
        <div className='notifications dropdown'>
          <a href="#" className='' role="button" id='dropdownNotifications' data-bs-toggle="dropdown" aria-expanded="false" >
            <i className='bi bi-bell has-news' ></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="dropdownNotifications">
            <li>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a href='#' class="row no-gutters align-items-center">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <div class="col-10 text-start">
                      <div class="text-dark">Update completed</div>
                      <div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
                      <div class="text-muted small mt-1">2h ago</div>
                    </div>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href='#' class="row no-gutters align-items-center">
                    <div class="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell text-warning"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                    <div class="col-10 text-start">
                      <div class="text-dark">Lorem ipsum</div>
                      <div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                      <div class="text-muted small mt-1">7h ago</div>
                    </div>
                  </a>
                </li>
                <li class="list-group-item">
                  <a class="text-center small" href="/admin/notifications">Show all notifications</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='settings dropdown'>
          <a href="#" className='' role="button" id='dropdownSettings' data-bs-toggle="dropdown" aria-expanded="false" >
            <i className='bi bi-gear' ></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownSettings">
            <li><a class="dropdown-item" href="#">My Profile</a></li>
            <li><a class="dropdown-item" href="#">Security Settings</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;