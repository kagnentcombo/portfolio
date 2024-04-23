"use client";

import React from "react";

const page = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          muted
          loop
        >
          <source src="/video/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
            transform: "translate(-20%, -50%)",
            color: "#fff",
          }}
        >
          <h1 className="display-1">Hi. I'm KAG</h1>
          <h1 className="display-1">A Software developer</h1>
          <p className="h5">I am passionate about creating experiences that are engaging, accessible, and user-centered.</p>
        </div>
      </div>
    </>
  );
};

export default page;
