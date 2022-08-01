import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { showToast } from "../../utils";
import { Link } from "react-router-dom";
import "./AdminHome.css";

export const AdminHome = () => {
  const INITIAL_DETAILS = {
    "Id": "",
    "Name": "",
    "Email": "",
    "Phone": "",
    "ParentPhone": "",
    "Address": "",
    "ArrivalDate": "",
    "enrollmentDate": "",
    "RoomNumber": ""
  };

  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const clearForm = () => {
    setDetails(INITIAL_DETAILS);
  };

  const onSubmit = (e) => {
    clearForm();
    e.preventDefault();
    if (!email) return;
    fetch(`http://localhost:5000/api/tenantDetails?email=${email}`)
      .then((response) => response.json())
      .then((user) => {
        if(!user.data.length) return showToast("No record found.", "error");
        setDetails(...user.data);
        showToast("Details populated successfully.", "info");
      })
      .catch(() => {
        showToast("Some error occurred.", "error");
      })
  };

  useEffect(() => console.log("details: ", details), [details]);

  return (
    <div>
      <AdminNavbar />
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
                      <legend className="f1 fw6 ph0 mh0">
                        View Tenant's Records
                      </legend>

                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="id">
                          Id
                        </label>
                        <input
                          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="text"
                          name="Id"
                          disabled
                          value={details?.Id}
                          id="Id"
                        />
                        {/* <div className="">
                          <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="View"
                          />
                        </div> */}
                      </div>

                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="text"
                          name="Name"
                          disabled
                          // required
                          value={details?.Name}
                          // onChange={onChange}
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
                          value={email}
                          onChange={onChange}
                          id="email-address"
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="Phone-Number"
                        >
                          Phone Number
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="Number"
                          id="Number"
                          name="PhoneNumber"
                          disabled
                          value={details?.Phone}
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="Phone-Number"
                        >
                          Parent Phone Number
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="Number"
                          id="Number"
                          name="ParentPhone"
                          disabled
                          value={details?.ParentPhone}
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="Phone-Number"
                        >
                          Permanent Address
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="Text"
                          id="Address"
                          name="Address"
                          disabled
                          value={details?.Address}
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="Room-Number"
                        >
                          Room Number
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="Number"
                          id="Number"
                          name="RoomNumber"
                          disabled
                          value={details?.RoomNumber}
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="enrollment-date"
                        >
                          Arrival Date
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          // type="date"
                          id="arrivaldate"
                          name="arrivaldate"
                          disabled
                          value={details?.ArrivalDate}
                        />
                      </div>

                      <div className="mv3">
                        <label
                          className="db fw6 lh-copy f6"
                          htmlFor="enrollment-date"
                        >
                          Mess Enrollment Date
                        </label>
                        <input
                          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          // type="date"
                          id="enrollmentdate"
                          name="EnrollmentDate"
                          disabled
                          value={details?.enrollmentDate}
                        />
                      </div>
                    </fieldset>
                    <div className="">
                      <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Get Details"
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
    </div>
  );
};

export default AdminHome;
