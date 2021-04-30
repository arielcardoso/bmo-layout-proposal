import React from 'react';

import ExpensesGraph from '../assets/img/expenses_graph.jpg';

const Home = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          All Accounts
          <a href='{() => false}' className='btn btn-default btn-sm' >
            <i className="bi bi-printer me-1"></i> Print
          </a>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th className='ps-5' >Type</th>
                  <th>Account Name</th>
                  <th>Status</th>
                  <th>As of Date</th>
                  <th>Currency</th>
                  <th className='text-end' >Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><i className="bi bi-vector-pen me-3"></i> Checking</td>
                  <td>0123 4567-890 ARIEL</td>
                  <td>Active</td>
                  <td>Mar 31. 2021</td>
                  <td>CAD</td>
                  <td className='text-end' >$6,266.33</td>
                </tr>
                <tr>
                  <td><i className="bi bi-wallet2 me-3"></i> Savings</td>
                  <td>0987 6543-210 ARIEL</td>
                  <td>Active</td>
                  <td>Mar 31. 2021</td>
                  <td>CAD</td>
                  <td className='text-end'>$10,998.10</td>
                </tr>
                <tr>
                  <td><i className="bi bi-wallet2 me-3"></i> Savings</td>
                  <td>0123 4567-890 ARIEL</td>
                  <td>Deactivated</td>
                  <td>Mar 31. 2021</td>
                  <td>CAD</td>
                  <td className='text-end' >$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pt-2">
            <a href="{() => false}" className="py-5">Add an existing account to your Account Summary.</a>
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">

          <div className="card">
            <div className="card-header">
              Recent Activity
              <a href='{() => false}' className='btn btn-default btn-sm' >
                <i className="bi bi-box-arrow-up-right me-1"></i> View All
              </a>
            </div>
            <div className="card-body p-0">
              
              <div className="activities-dashboard">
                <a href='#month-apr-content' className="group-title" id='month-apr-title' data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="month-apr-content" >
                  APRIL
                  <i className='bi bi-caret-down-fill' ></i>
                </a>
                <div className="group-content collapse show" id='month-apr-content' >
                  <div className="item">
                    <div className="date">
                      <label>APR</label>
                      <span>12</span>
                    </div>
                    <div className="description">
                      <span>Disney Plus</span>
                      <label>Subscription</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger'>-$19.99</span>
                      <label>10:48PM</label>
                    </div>
                  </div>
                  <div className="item">
                    <div className="date">
                      <label>APR</label>
                      <span>10</span>
                    </div>
                    <div className="description">
                      <span>Translink</span>
                      <label>Services and Products</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger'>-$15.00</span>
                      <label>10:48PM</label>
                    </div>
                  </div>
                  <div className="item">
                    <div className="date">
                      <label>APR</label>
                      <span>09</span>
                    </div>
                    <div className="description">
                      <span>Paypal Transfer</span>
                      <label>Services and Products</label>
                    </div>
                    <div className="amount">
                      <span className='text-primary'>+$800.00</span>
                      <label>16:00PM</label>
                    </div>
                  </div>
                </div>

                <a href='#month-mar-content' className="group-title" id='month-mar-title' data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="month-mar-content" >
                  MARCH
                  <i className='bi bi-caret-down-fill' ></i>
                </a>
                <div className='group-content collapse show' id="month-mar-content">
                  <div className="item">
                    <div className="date">
                      <label>MAR</label>
                      <span>31</span>
                    </div>
                    <div className="description">
                      <span>Wallmart</span>
                      <label>Grocery Store</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger' >-$18.12</span>
                      <label>18:01PM</label>
                    </div>
                  </div>
                  <div className="item">
                    <div className="date">
                      <label>MAR</label>
                      <span>30</span>
                    </div>
                    <div className="description">
                      <span>Translink</span>
                      <label>Services and Products</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger'>-$20.00</span>
                      <label>10:36PM</label>
                    </div>
                  </div>
                  <div className="item">
                    <div className="date">
                      <label>MAR</label>
                      <span>29</span>
                    </div>
                    <div className="description">
                      <span>Wallmart</span>
                      <label>Grocery Store</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger' >-$103.82</span>
                      <label>17:12PM</label>
                    </div>
                  </div>
                  <div className="item">
                    <div className="date">
                      <label>MAR</label>
                      <span>22</span>
                    </div>
                    <div className="description">
                      <span>Translink</span>
                      <label>Services and Products</label>
                    </div>
                    <div className="amount">
                      <span className='text-danger'>-$20.00</span>
                      <label>10:39PM</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="col-md-6">

          <div className="card">
            <div className="card-header">
              Expenses Report
              <div>
                <a href='{() => false}' className='btn btn-default' >Day</a>
                <a href='{() => false}' className='btn btn-default' >Month</a>
                <a href='{() => false}' className='btn btn-default' >Year</a>
              </div>
            </div>
            <div className="card-body p-0">
              <img className='img-fluid' src={ExpensesGraph} alt="Expense Graph"/>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}
export default Home;