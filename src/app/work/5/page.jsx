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
                src="https://media.discordapp.net/attachments/817260455960510464/1232057802877308980/image.png?ex=662812be&is=6626c13e&hm=4ec03831c571c99654609ddd445f931f19d74cb3a4cad7b81a9595d1958bb140&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Home page</h5>
                <hr />
                <p className="card-text">
                  When you search for a word it will show you the meaning of
                  that word.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232057803326361710/image.png?ex=662812be&is=6626c13e&hm=aad105a63a50e03fce9bec0f00a60964f92d156259f2d894e420dd7c20d66101&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Record interesting vocabulary</h5>
                <hr />
                <p className="card-text">
                  You can press the star icon to save words of interest.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232057803892330597/image.png?ex=662812be&is=6626c13e&hm=0c000b7d807e115badc82ec65a6eea522afbd81d8ecc520d1e74471023825143&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Interesting vocabulary page</h5>
                <hr />
                <p className="card-text">Show interesting vocabulary.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232057804362354810/image.png?ex=662812bf&is=6626c13f&hm=51d3487dbf2ce5e9a7eba9a10a387b8649b7f8782fc41e649c130ead6a8d0e24&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Search history</h5>
                <hr />

                <p className="card-text">Show search history</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
