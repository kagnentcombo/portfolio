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
            <div className="card" style={{  border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/Mercy1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Home page</h5>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{  border: "none", }}>
              <img
                className="card-img-top"
                src="/photo/Mercy2.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Clothing type page</h5>
                <hr />
                <p className="card-text">
                  Show clothes according to the selected category.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{  border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/Mercy3.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Details page</h5>
                <hr />
                <p className="card-text">Show details of clothes.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="/photo/Mercy4.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Cart page</h5>
                <hr />

                <p className="card-text">
                  The order of applying campaigns is Coupon {">"} On Top {">"}
                  Seasonal <br />- Fixed amount(Coupon), Percentage
                  discount(Coupon)
                  <br />- Percentage discount by item category(On Top), Discount
                  by points(On Top)
                  <br />- Special campaigns(Seasonal)
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
