import React, { useState, useEffect } from "react";
// import "./ViewMessEnrollments.css";

const ViewMessEnrollments = () => {
  const [results, setResults] = useState(null);

  const updateBookingStatus = (Email, Status, index) => {
    console.log(Email, Status, index);
    fetch("http://localhost:5000/api/mess/acknowledgement", {
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

  useEffect(() => {
    fetch("http://localhost:5000/api/mess")
      .then((response) => response.json())
      .then((results) => {
        setResults(results.data);
      });
  }, []);

  return (
    <section className="section mt-5">
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h6>View Mess Enrollments</h6>
                <hr />
                <table>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Room Number</th>
                      <th scope="col">Mess Type</th>
                      <th scope="col">Arrival date</th>
                      <th scope="col">Status</th>
                      <th scope="col">
                        Action
                      </th>
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

export default ViewMessEnrollments;
