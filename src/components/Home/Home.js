import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/Images/img12.jpeg"
                class="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "90vh", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="/Images/img10.jpeg"
                class="d-block w-100"
                alt="..."
                style={{ width: "100%", height:"90vh", objectFit: "cover" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="/Images/img11.jpeg"
                class="d-block w-100"
                alt="..."
                style={{ width: "100%",height:"90vh", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div style={{marginLeft:"10%", marginRight:'10%'}}>
      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem"  }}>
            <img
              src="/Images/img1.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Washing Machine</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="/Images/img4.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Well Furnished Rooms</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="/Images/img20.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Cupboard</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://5.imimg.com/data5/VC/TA/MY-17022191/aquagrand-ro-water-purifier-500x500.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">RO Water</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/9/MI/NE/KA/75452602/ip-camera-installation-services-500x500.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">24hrs Security</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://5.imimg.com/data5/LB/FX/NI/GLADMIN-61925540/img-20181204-wa0349-500x500.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">24hrs hot and cold water</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://image.made-in-china.com/2f0j00LjutTKVzFpfQ/630kg-8-Person-Omega-Factory-Cheap-Price-Passenger-Lift-Elevator-in-China-for-Sale.jpg" 
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lift Facility</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://5.imimg.com/data5/EG/SC/MY-27647751/wifi-router-500x500.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">WiFi</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://thumbs.dreamstime.com/b/top-view-car-bike-parking-india-scooters-cars-under-shadow-summer-season-city-two-people-talking-udaipur-may-183432652.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Bike and Car Parking</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
