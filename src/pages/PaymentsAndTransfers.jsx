import React from 'react';

const PaymentsAndTransfers = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          My Payments & Transfers
          <a href='{() => false}' className='btn btn-default btn-sm' >
            <i className="bi bi-printer me-1"></i> Print
          </a>
        </div>
        <div className="card-body">
          <p className='text-justify' >Review your payment history, pay bills online, transfer money between accounts, and manage the list of companies (payees) you make payments to using Online Banking, Telefone Banking or the ATM (Automated Teller Machine). To make a payment to your BMO Credit Card or Line of Credit, please select Make a transfer to ensure your transaction is processed faster.</p>
          <p className='text-justify' ><strong>To get CRA payments deposited directly into your account</strong>: From the <strong>My Accounts</strong> tab, go to the account you want to use and select <strong>CRA direct deposit</strong> from the account details section. Get a status update or confirm your enrolment by calling the CRA at 1-800-959-8281 or logging into the CRA My Account website.</p>        
        </div>
      </div>


      <ul class="nav nav-tabs mt-4" role="tablist">
        <li class="nav-item" >
          <button class="nav-link active" id="payment-tab-bt" data-bs-toggle="tab" data-bs-target="#payment-tab" type="button" role="tab" aria-controls="payment-tab" aria-selected="true">Make a Payment</button>
        </li>
        <li class="nav-item" >
          <button class="nav-link" id="transfer-tab-bt" data-bs-toggle="tab" data-bs-target="#transfer-tab" type="button" role="tab" aria-controls="transfer-tab" aria-selected="false">Make a Transfer</button>
        </li>
      </ul>
      <div class="tab-content" >
        <div class="tab-pane fade show active" id="payment-tab" role="tabpanel" aria-labelledby="payment-tab-bt">
          <div className="card card-in-tab">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label class="form-label">From</label>
                  <input name='from' type="text" class="form-control" placeholder="Select an account" />
                </div>
                <div className="col-md-3 mb-3">
                  <label class="form-label">To</label>
                  <input name='to' type="text" class="form-control" placeholder="Select an account" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-4 mb-3">
                      <label class="form-label">Amount</label>
                      <input name='amount' type="text" class="form-control" placeholder="CAD $0.00" />
                    </div>
                    <div className="col-4 mb-3">
                      <label class="form-label">Date</label>
                      <input name='date' type="date" class="form-control" placeholder="MM/DD/YYYY" />
                    </div>
                    <div className="col-4 mb-3">

                      <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" value='onetime' name="onetime_ongoing" />
                        <label class="form-check-label" >One-time</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" value='ongoing' name="onetime_ongoing" checked />
                        <label class="form-check-label" >Ongoing</label>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a href="{() => false}" className="btn btn-primary">
                Make Payment
              </a>
              <div>
                <a href="{() => false}" className="btn btn-sm btn-default">Add a Payee</a>
                <a href="{() => false}" className="btn btn-sm btn-default">Add another Payment Method</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="transfer-tab" role="tabpanel" aria-labelledby="transfer-tab-bt">
          ...
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          Payments Eligible for Cancellation
        </div>
        <div className="card-body">
          <p className='text-justify' >Bill payments made today before 11p.m (ET) can be cancelled and the funds will be returned to your account inmmediately. Bill payments made after 11 p.m. (ET) can be cancelled up o 11 p.m. (ET) the following day. To cancel a bull payment not listed in your Payment History, please complete an <a href='{() => false}'>Investigate Bill Payment</a> request.</p>
          <div className="alert alert-secondary bg-light">
            You have no bill payments eligible to be cancelled.
          </div>
          <p className="pt-2">
            <a href="{() => false}" className="py-5">View Payment History.</a>
          </p>
        </div>
      </div>

    </>
  );
}
export default PaymentsAndTransfers;