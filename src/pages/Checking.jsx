import React from 'react';
import OnGuard from '../assets/img/onguard.jpg';

const Checking = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Checking
          <a href='javascript:;' className='btn btn-default btn-sm' >
            <i className="bi bi-printer me-1"></i> Print
          </a>
        </div>
        <div className="card-body">
          <p className='text-justify' >Primary Chequing Account <strong>0123 4567-890</strong>.</p>
          <p className='text-justify' >The current balance shown is as of today's date. Please report any items that do not match your records.</p>
        </div>
      </div>

      <ul class="nav nav-tabs mt-4" role="tablist">
        <li class="nav-item" >
          <button class="nav-link active" id="transaction-tab-bt" data-bs-toggle="tab" data-bs-target="#transaction-tab" type="button" role="tab" aria-controls="transaction-tab" aria-selected="true">Transaction</button>
        </li>
        <li class="nav-item" >
          <button class="nav-link" id="onguard-tab-bt" data-bs-toggle="tab" data-bs-target="#onguard-tab" type="button" role="tab" aria-controls="onguard-tab" aria-selected="false">OnGuard</button>
        </li>
      </ul>
      <div class="tab-content" >
        <div class="tab-pane fade show active" id="transaction-tab" role="tabpanel" aria-labelledby="transaction-tab-bt">
          <div className="card card-in-tab">
            <div className="card-body">
              <p className='mt-3' >View transactions by selecting a time period or date range, or filter your results by entering a description.</p>
              <div className="row align-items-end my-4">
                <div className="col-md-2 mb-3">
                  <label class="form-label">Period</label>
                  <select name='period' type="text" class="form-select" >
                    <option>Last 15 days</option>
                    <option selected >Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last 6 months</option>
                    <option>Last 12 months</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <label class="form-label">From</label>
                  <input name='from_date' type="date" class="form-control" placeholder="MM/DD/YYYY" />
                </div>
                <div className="col-md-2 mb-3">
                  <label class="form-label">To</label>
                  <input name='to_date' type="date" class="form-control" placeholder="MM/DD/YYYY" />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label class="form-label">Description</label>
                  <input name='description' type="text" class="form-control" placeholder="" />
                </div>
                <div className="col-md-2 mb-3">
                  <label class="form-label">&nbsp;</label>
                  <button class='btn btn-primary' type='button' >
                    <i className='bi bi-filter me-2' ></i>
                    Filter
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>Transaction Date</th>
                      <th>Code</th>
                      <th>Description</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Currency</th>
                      <th className='text-end' >Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>Balance Forward</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>CAD</td>
                      <td className='text-end' >$100.00</td>
                    </tr>
                    <tr>
                      <td>Feb 28. 2021</td>
                      <td>SC</td>
                      <td>PERFORMANCE PLAN</td>
                      <td>$15.00</td>
                      <td>&nbsp;</td>
                      <td>CAD</td>
                      <td className='text-end'>$85,00</td>
                    </tr>
                    <tr>
                      <td>Mar 31. 2021</td>
                      <td>SC</td>
                      <td>PERFORMANCE PLAN</td>
                      <td>$15.00</td>
                      <td>&nbsp;</td>
                      <td>CAD</td>
                      <td className='text-end' >$70.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="onguard-tab" role="tabpanel" aria-labelledby="onguard-tab-bt">
          <div className="card card-in-tab card-body">
            <div className="card card-body bg-light">
              <div className="row">
                <div className="col-12 col-md-3 col-lg-2 text-center mb-3">
                  <img src={OnGuard} alt="OnGuard" className="w-75 img-fluid"/>
                </div>
                <div className="col-12 col-md-9 col-lg-10">
                  <p>Safeguard your personal information against identify theft and online fraud with OnGuard®.</p>
                  <p className='fw-bold' >It’s free* with your Bank Plan!</p>
                  <p>Here’s how OnGuard® protects you:</p>
                  <p className='fw-bold mb-0' >Identity and Credit Profile Monitoring</p>
                  <p>Keep up-to-date on activity related to your digital and financial identity and react quickly to potential fraud.</p>
                  <p className='fw-bold mb-0' >Identity Restoration</p>
                  <p>Get access to identity restoration specialists to help save you time, money and stress by guiding you through the necessary steps to report fraudulent activity and get your identity restored.</p>
                  <p className='fw-bold mb-0' >Lost wallet protection</p>
                  <p>One call is all you'll need to get all your lost or stolen payment cards cancelled.</p>
                  <p><strong>*You should know:</strong> Your existing Bank plan, transactions, service and product fees may still apply. And you may not be eligible for this product if you change Bank plans.</p>
                  <button class='btn btn-primary' type='button' >Get OnGuard®</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Checking;