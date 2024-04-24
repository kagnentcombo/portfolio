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
                src="/photo/threeJs1.png"
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
                src="/photo/threeJs2.png"
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
                src="/photo/threeJs3.png"
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
                src="/photo/threeJs4.png"
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
