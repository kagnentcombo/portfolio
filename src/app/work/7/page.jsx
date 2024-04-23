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
                src="https://media.discordapp.net/attachments/817260455960510464/1232066894048137237/image.png?ex=66281b36&is=6626c9b6&hm=6b6fe8f96a330ab6ac8cf0c83c953f3f40f79930bd4a89b5a0915fa83d1f7cbf&=&format=webp&quality=lossless&width=1190&height=670"
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
                src="https://media.discordapp.net/attachments/817260455960510464/1232066894534803546/image.png?ex=66281b36&is=6626c9b6&hm=ddfcd1d8cb56deea8d0e075a8e4ed876912c30530faa60606e954fd0b824066c&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Side bar</h5>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232066894995918969/image.png?ex=66281b36&is=6626c9b6&hm=2db9f12245366888521927beb0342edc6d61ad4873278ce3517483bf9841e147&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Clothing type page</h5>
                <hr />
                <p className="card-text">Show clothes according to the selected category.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232066895587446784/image.png?ex=66281b36&is=6626c9b6&hm=b62a5050cbea6cc42b0f221b8d0d1f201607b5192a608b3ee4afc125205ed753&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Details page</h5>
                <hr />
                <p className="card-text">Show details of clothes.</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
