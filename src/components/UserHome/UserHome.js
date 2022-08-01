import React from 'react'

import { Link } from "react-router-dom";
import "./UserHome.css";


export const UserHome = () => {
  return (
    <div >
      <Link to="/">
            <a class="logout" href="#">
              <button className="btn btn-outline-warning mb-3">Logout</button>
            </a>
      </Link>
    <div style={{marginLeft:"10%", marginRight:'10%' , fontSize:'80px', fontFamily:"cursive"}}>
    <marquee behaviour="scroll" direction="left">
        Welcome to Happy Nest Girls PG
    </marquee>
    
    </div>
    

<div style={{marginLeft:"10%", marginRight:'10%'}}>
      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="./Images/img5.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Room Booking</h5>
              <p class="card-text">
                Why don't you go and live in hostel to save your cash? Book your hostel room at affordable prices which feels like your home..!
              </p>
              <a href="/booking" class="btn btn-primary">
                Raise Booking request
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Mess Enrollment</h5>
              <p class="card-text">
                People who love to eat are always the best people so Go and register for hostel mess which provides food like home..!
              </p>
              <a href="/mess" class="btn btn-primary">
                Enroll for Mess
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://corp.ezetap.com/uploads/blogs/Blog-1052x621-1_(1).jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Payment</h5>
              <p class="card-text">
                Pay your deposite, rent and mess expenses.
              </p>
              <a href="/paymentform" class="btn btn-primary">
                Payment
              </a>
            </div>
          </div>
        </div>
      </div>
   </div>
</div>

  );
}
 
 export default UserHome;