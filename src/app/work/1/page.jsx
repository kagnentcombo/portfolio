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
                src="https://media.discordapp.net/attachments/817260455960510464/1231330976869646406/image.png?ex=66369155&is=66241c55&hm=71e45291e3b7a93a640491304376b384803c93e72140cc601aa87aa2aa5e86b4&=&format=webp&quality=lossless&width=1191&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1231330977586876416/image.png?ex=66261696&is=6624c516&hm=d1171075b631c7d17c4b3a156f6c3a48e048fb85074ca250495a4bff3f21ea6a&=&format=webp&quality=lossless&width=1191&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1231330978103033996/image.png?ex=66261696&is=6624c516&hm=630f4711f3b2812675fe109382253e71349a27dc893b18e3941f1506ad5bc461&=&format=webp&quality=lossless&width=1191&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1231330978497036439/image.png?ex=66369156&is=66241c56&hm=56d0a9187ecf54f58a9f7f9538a49c8ed609df66cb0f9581494c5f09f59ae2c7&=&format=webp&quality=lossless&width=1191&height=670"
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
