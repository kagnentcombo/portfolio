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
                src="/photo/Income1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Home page</h5>
                <hr />
                <p className="card-text">
                  Show details of income and expenses recorded each day.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/Income3.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Create page</h5>
                <hr />
                <p className="card-text">
                  It is a form for filling in product names, prices, and dates
                  to generate income or expenses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/Income2.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Edit page</h5>
                <hr />
                <p className="card-text">Selected items can be edited or deleted.</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
