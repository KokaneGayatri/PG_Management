import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
import { showToast } from '../../utils';

const Mess = props => {
  const INITIAL_DETAILS = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    RoomNumber: "",
    MessType: "Two Time",
    EnrollmentDate: ""
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
    fetch("http://localhost:5000/api/mess", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);

        if (user.status === "OK") {
          //alert('login successfull')
          console.log('Mess booking request raised successfull.');
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
                    <legend className="f1 fw6 ph0 mh0">Enrollment for Mess</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="Name"
                        required
                        value={details.Name}
                        onChange={onChange}
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
                        name="Email"
                        required
                        value={details.Email}
                        onChange={onChange}
                        id="email-address"
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
                        name="PhoneNumber"
                        required
                        value={details.PhoneNumber}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="Room-Number">
                        Room Number
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="Number"
                        id="Number"
                        name="RoomNumber"
                        required
                        value={details.RoomNumber}
                        onChange={onChange}
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="mess-type">
                        Mess Type
                        <select required name="MessType" id="selectList" className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                          value={details.MessType}
                          onChange={onChange}>
                          <option value="One Time">One Time</option>
                          <option value="Two Time">Two Time</option>

                        </select>
                      </label>

                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="enrollment-date">
                        Enrollment Date
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="date"
                        id="enrollmentdate"
                        name="EnrollmentDate"
                        required
                        value={details.EnrollmentDate}
                        onChange={onChange}
                      />
                    </div>


                  </fieldset>
                  <div className="">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Enroll in mess"
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

export default Mess;
