import React, { useState } from "react";
//  import Navbar from "../Navbar/Navbar";
import { showToast } from '../../utils';

const Booking = props => {
  const INITIAL_DETAILS = {
    Name: "",
    Email: "",
    Phone: "",
    ParentPhone: "",
    Address: "",
    RoomType: "Double bed",
    ArrivalDate: ""
  }

  const [details, setDetails] = useState(INITIAL_DETAILS)

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
    console.log(details);
    if (!Object.values(details).every(value => Boolean(value))) return;
    fetch("http://localhost:5000/api/room_booking", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);

        if (user.status === "OK") {
          //alert('login successfull')
          console.log('Room booking request raised successfully.');
          showToast('Request Raised successfully.', 'success');
          clearForm();
          // navigate('/signin')
        } else {
          showToast('Invalid credentials.', 'error')
        }
        // setUser(INITIAL_USER_VALUE)
      });
  }

  return (
    <>
      {/* <Navbar /> */}
      <form className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset
                    id="sign_up"
                    className="ba b--transparent ph0 mh0"
                  >
                    <legend className="f1 fw6 ph0 mh0">Room Booking</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="name">
                        Name
                      </label>
                      <input
                        name="Name"
                        required
                        value={details.Name}
                        onChange={onChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="mt3">
                      <label
                        className="db fw6 lh-copy f6"
                        htmlFor="email-address"
                      >
                        Email
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        id="email-address"
                        name="Email"
                        required
                        value={details.Email}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="Phone-Number">
                        Phone Number
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="Number"
                        id="Number"
                        name="Phone"
                        required
                        value={details.Phone}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="Phone-Number">
                        Parents Phone Number
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="Number"
                        id="Number"
                        name="ParentPhone"
                        required
                        value={details.ParentPhone}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="permanent-address">
                        Permanent Address
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="Address"
                        required
                        value={details.Address}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="room-type">
                        Room Type
                        <select id="selectList" className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                          name="RoomType"
                          required
                          value={details.RoomType}
                          onChange={onChange}
                        >
                          <option value="Double bed">Double bed</option>
                          <option value="Triple bed">Triple bed</option>
                        </select>

                      </label>

                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="arrival-date">
                        Arrival Date
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="date"
                        id="arrivaldate"
                        name="ArrivalDate"
                        required
                        value={details.ArrivalDate}
                        onChange={onChange}
                      />
                    </div>


                  </fieldset>
                  <div className="">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Raise Booking Request"
                    />
                  </div>
                </div>
              </main>
            </article>
          </div>
          <div className="col-md-3"></div>
        </div>
      </form>
    </>
  );
}

export default Booking;
