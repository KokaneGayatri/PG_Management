import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">About Us</h5>
        {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p class="card-text">
            
          Happy Nest PG Services in Pune is one of the leading business 
          in the paying guest Accommodations. Also known as Paying Guest 
          Accommodation for women. Happy Nest PG is a place where they provide
           a happy, untroubled and delighted home to girls who are benefited with 
           different kinds of services. These services includes free Wi-Fi, washing 
           machine, fridge, bed, chair, table, cooking facility,24 hours hot and cold 
           water, RO water ,Car and bike parking and free cleaning services to their livings. 
           PG has cameras at several spots and guard so there is no security issues of threatening 
           and harm. In 1 BHK flat there are 5 beds and charges varies according to rooms.


          </p>
          {/* <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
