import React from 'react'
import "./ViewPayment.css";

const ViewPayment = () => {
  return (
   
<section className="section mt-5">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>View Payments</h6>
                  <hr />
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Parents Phone Number</th>
                                <th scope="col">Permanent Address</th>
                                <th scope="col">Room Type</th>
                                <th scope="col">Arrival date</th>
                                </tr>
                            </thead>
                            </table>
                            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
    
  

export default ViewPayment