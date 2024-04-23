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
                src="https://media.discordapp.net/attachments/817260455960510464/1232002622299308063/image.png?ex=6628881a&is=6627369a&hm=e082d5cb13b168ccb3bd4b9d0dbb9bc522593d98c594c910301d7f7a5de3d6bd&=&format=webp&quality=lossless&width=1190&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1232002623293489162/image.png?ex=6628881a&is=6627369a&hm=0260973750bda94240db8200683e41e0b5ba62c1fceb9143639161b31b1467f9&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Product page</h5>
                <hr />
                <p className="card-text">
                  You can search for product names or select product categories.
                  and can be filled in from the product price.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232002622769074237/image.png?ex=6628881a&is=6627369a&hm=7284919ad2bba3b45cb2d9604efdf7bea0bc0cf1c2b76a463f7ab521150acc0e&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Details popup</h5>
                <hr />
                <p className="card-text">Show details of product.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232002623687622766/image.png?ex=6628881a&is=6627369a&hm=efae79c690c3d38fc4b4b91a87627c0c0419bdd64023888c90bb84a0e956f79c&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Cart page</h5>
                <hr />

                <p className="card-text">
                  You can add or remove product quantities and display the total
                  price of all products.
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
