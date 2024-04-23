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
                src="https://media.discordapp.net/attachments/817260455960510464/1231999807468474429/image.png?ex=6628857b&is=662733fb&hm=edf2bac9fd46cbc2685bcdf4c949fd026bc9af02e71b9928ce958e7df2664099&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Press B</h5>
                <hr />
                <p className="card-text">
                  Press B to close the Happy Halloween message.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231999807942426705/image.png?ex=6628857b&is=662733fb&hm=cd1b855a8b74a356092de7dd7d5ee50dd5dd01033b59ddfd9880f1bec961aa4c&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Press V</h5>
                <hr />
                <p className="card-text">
                  Press V to turn off the lights inside the pumpkin model.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231999808391221248/image.png?ex=6628857b&is=662733fb&hm=389b640a4b5caa5e7034bdae37c20185b1eabb0ff9c2b6d01ba0fd52b1659cc1&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Press C</h5>
                <hr />
                <p className="card-text">Press C to mute the sound effect.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231999809058111508/image.png?ex=6628857b&is=662733fb&hm=0350411f524a098cbcfb7a8cd268833dca1eaa892b5803fd1af45f4d146edc8a&=&format=webp&quality=lossless&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Cart page</h5>
                <hr />

                <p className="card-text">
                  1. Scene Setup: Created a 3D scene with a Skybox background
                  and fog effect for ambiance.
                  <br />
                  2. Loading and Displaying 3D Models: Used GLTFLoader to load
                  and display 3D models like houses and pumpkins.
                  <br />
                  3. Control with Clicks and Buttons: Managed object behaviors
                  with event handling, such as toggling lights and playing
                  sounds.
                  <br />
                  4. Lighting Effects: Implemented moving lights and adjusted
                  their properties for visual effects.
                  <br /> 5. Audio Usage: Utilized THREE.Audio to add and control
                  sound effects triggered by keyboard input. <br />
                  6. Rendering and Motion: Animated objects smoothly using
                  requestAnimationFrame and updated rendering continuously.{" "}
                  <br />
                  7. OrbitControls: Enhanced user interaction with the scene by
                  adding mouse controls for navigation.
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
