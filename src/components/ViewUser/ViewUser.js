import React from 'react'
import "./ViewUser.css";

const ViewUser = () => {
  return (
   
<section className="section mt-5">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6><b>Registered Users</b></h6>
                  <hr />
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
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
    
  

export default ViewUser