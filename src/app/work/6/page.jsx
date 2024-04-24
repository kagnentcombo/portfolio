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
                src="/photo/hotel1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Home page</h5>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/hotel2.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Room type page</h5>
                <hr />
                <p className="card-text">Show all rooms.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/hotel3.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Add a new room page</h5>
                <hr />
                <p className="card-text">For admins to create a new room</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/hotel4.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  For administrators to manage different rooms
                </h5>
                <hr />

                <p className="card-text">Can view, edit, and delete rooms.</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
