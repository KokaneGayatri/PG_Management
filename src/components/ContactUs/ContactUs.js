import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { showToast } from '../../utils';

const ContactUs = () => {
  const INITIAL_DETAILS = {
    FullName: '',
    ContactNumber: '',
    Email: '',
    Message: ''
  };
  const [details, setDetails] = useState(INITIAL_DETAILS);

  const onChange = e => {
    setDetails((oldDetails) => ({
      ...oldDetails,
      [e.target.name]: e.target.value
    }))
  }

  const clearForm = () => {
    setDetails(INITIAL_DETAILS);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(details).every(value => Boolean(value))) return;
    fetch("http://localhost:5000/api/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);

        if (user.status === "OK") {
          //alert('login successfull')
          console.log('Contact details added successfully.');
          showToast('Contact details added successfully.', 'success');
          clearForm();
          // navigate('/signin')
        } else {
          showToast('Invalid credentials.', 'error')
        }
        // setUser(INITIAL_USER_VALUE)
      });
  }

  return (
    <div>
      <Navbar />

      <section className="section mt-5">
        <form className="container" onSubmit={onSubmit}>
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      name="FullName"
                      value={details.FullName}
                      onChange={onChange}
                      className="form-control"
                      placeholder="Enter fullname"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Contact Number</label>
                    <input
                      required
                      type="number"
                      name="ContactNumber"
                      value={details.ContactNumber}
                      onChange={onChange}
                      className="form-control"
                      placeholder="Enter contact number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Email address</label>
                    <input
                      required
                      type="email"
                      name="Email"
                      value={details.Email}
                      onChange={onChange}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Message</label>

                    <textarea
                      name="Message"
                      required
                      rows="3"
                      className="form-control"
                      onChange={onChange}
                      value={details.Message}
                      placeholder="Type Your Message..."
                    />
                  </div>

                  <div className="form-group py-3">
                    <button type="submit" className="btn btn-primary shadow">
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start mt-4">
                  <h5 className="main-heading">Address Information</h5>
                  <div classname="underline"></div>
                  <p>
                    411 041, Pune , Vadgaon Budruk , Near Sinhgad Institute Of Management
                  </p>
                  <p>Phone: +91 8668688405</p>
                  <p>Email: sourabhbaravkar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
