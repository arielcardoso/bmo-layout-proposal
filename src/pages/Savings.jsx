import React from 'react';
import OnGuard from '../assets/img/onguard.jpg';

const Savings = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Savings
          <a href='#' className='btn btn-default btn-sm' >
            <i className="bi bi-printer me-1"></i> Print
          </a>
        </div>
        <div className="card-body">
          <p className='text-justify' >Primary Savings Account <strong>0987 6543-210</strong>.</p>
          <p className='text-justify' >The current balance shown is as of today's date. Please report any items that do not match your records.</p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">Transaction</div>
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

    </>
  );
}
export default Savings;