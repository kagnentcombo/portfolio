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
                src="https://media.discordapp.net/attachments/817260455960510464/1232065595927691315/image.png?ex=66281a00&is=6626c880&hm=0c7c1cf4de15ac691aaffd57de5f7b28584d4ac4f48395b7fc35c351da2712fe&=&format=webp&quality=lossless&width=1190&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1232065596397584454/image.png?ex=66281a00&is=6626c880&hm=3da0cf9739a28949c3677d51d402c75cfd9555b0b2b20a3d639ee6471506c4e5&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Clothing type page</h5>
                <hr />
                <p className="card-text">Show all rooms.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232065596829466725/image.png?ex=66281a00&is=6626c880&hm=f705bf45145cba45eb8216dfa5210d2cd9931f275f3b1f5c51e91977d45362b2&=&format=webp&quality=lossless&width=1190&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1232065597131718696/image.png?ex=66281a01&is=6626c881&hm=d9d8ff8d241a57cf3eee91e4c5dae54c99816f36392c0e32c7f48a6bcf5b1077&=&format=webp&quality=lossless&width=1190&height=670"
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
