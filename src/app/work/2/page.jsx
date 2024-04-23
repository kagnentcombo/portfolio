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
                src="https://media.discordapp.net/attachments/817260455960510464/1231876350542086194/image.png?ex=66388d41&is=66261841&hm=76e471d3a601bdd96024b00b2dcca10de5a8ffbabf944cc564edb1e143385916&=&format=webp&quality=lossless&width=1191&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1231876761994924032/image.png?ex=66388da3&is=662618a3&hm=f1358399641a41114515adec7df25812b90a2020baeb3fc3f72c8224b3d1318f&=&format=webp&quality=lossless&width=1191&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1231876761554518067/image.png?ex=66276a23&is=662618a3&hm=85702267b6b88840e015c665661cf93d84c6d32f50a2c2c7bc6a0b4b5d737cb5&=&format=webp&quality=lossless&width=1191&height=670"
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
