import React, { useEffect, useState } from "react";
import ExportCSV from "../ExportCSV/ExportCSV";
//import "./ViewBooking.css";

const ViewBooking = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/room_booking")
      .then((response) => response.json())
      .then((results) => {
        setResults(results.data);
      });
  }, []);

  const updateBookingStatus = (Email, Status, index) => {
    console.log(Email, Status, index);
    fetch("http://localhost:5000/api/room_booking/acknowledgement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, Status }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("status updated successfully");
        const updatedResults = [...results];
        updatedResults[index] = { ...updatedResults[index], Status };
        setResults(updatedResults);
      });
  };

  return (
    <section className="section mt-5">
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2">
                <h6>View Bookings</h6>
                <hr />
                <ExportCSV csvData={results} fileName="Room Booking" />
                <table>
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
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results?.map((record, index) => (
                      <tr>
                        {Object.values(record).map((value) => (
                          <td>{value}</td>
                        ))}
                        <td>
                          <div className="action__btn-container">
                            <button
                              onClick={() =>
                                updateBookingStatus(
                                  record.Email,
                                  "Accepted",
                                  index
                                )
                              }
                              className={`btn btn--success ${
                                record.Status !== "Pending" && "btn--disabled"
                              }`}
                              disabled={record.Status !== "Pending"}
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                updateBookingStatus(
                                  record.Email,
                                  "Rejected",
                                  index
                                )
                              }
                              className={`btn btn--danger ${
                                record.Status !== "Pending" && "btn--disabled"
                              }`}
                              disabled={record.Status !== "Pending"}
                            >
                              Decline
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewBooking;
