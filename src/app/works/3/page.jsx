import React from "react";
import { Row } from "react-bootstrap";
const page = () => {
  return (
    <>
      <div
        className="container "
        style={{
          marginTop: "200px",
          marginBottom: "150px",
          backgroundColor: "rgba(255, 255, 255, 0.5);",
          padding: "20px",
          borderRadius: "10px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Row>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/intern1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">My team page</h5>
                <hr />
                <p>
                  Select the time period you want to check. <br />
                  Select Filter to search for the desired employee.
                  <br />
                  Select to check individual information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/intern2.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">My team details page</h5>
                <hr />
                <p>Displays the time sheet of the selected employee.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                style={{ width: "300px" }}
                src="/photo/intern3.png"
                alt="Card image cap"
              />

              <div className="card-body">
                <h5 className="card-title">Poster Time Tracking</h5>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/intern4.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Certificate</h5>
                <hr />
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
