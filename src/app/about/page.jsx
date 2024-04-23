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
          <h1 className="display-1">EDUCATION</h1>
          <h1 className="display-1">Thammasat University</h1>
          <p className="h5">Bachelor of Science in Computer Science, GPA 2.96</p>
        </div>
      </div>
    </>
  );
};

export default page;
