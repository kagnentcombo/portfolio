"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [cardPosition, setCardPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  console.log(cardPosition);
  const handleScrollLeft = () => {
    const maxPosition = 0;
    const newPosition =
      windowWidth > 600 ? cardPosition + 10 : cardPosition + 50;

    setCardPosition(Math.min(newPosition, maxPosition));
  };

  const handleScrollRight = () => {
    const minPosition = -1300;
    const newPosition =
      windowWidth < 600 ? cardPosition - 50 : cardPosition - 10;
    setCardPosition(Math.max(newPosition, minPosition));
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // เรียกฟังก์ชัน handleResize เพื่อกำหนดค่าความกว้างเริ่มต้น
    window.addEventListener("resize", handleResize); // เพิ่ม event listener เมื่อมีการ resize หน้าต่าง
    return () => {
      window.removeEventListener("resize", handleResize); // ลบ event listener เมื่อ component ถูก unmount
    };
  }, []);
  return (
    <div style={{ marginTop: "150px", position: "relative" }}>
    <div
        className="card-group"
        style={{
          overflowX: "hidden",
        }}
      >
        <button
          onClick={handleScrollLeft}
          style={{
            position: "absolute",
            left: "1%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: "1",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "none",
            padding: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <img src="/photo/left-arrow.png" width="18px" height="18px" />
        </button>
        <button
          onClick={handleScrollRight}
          style={{
            position: "absolute",
            right: "1%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: "1",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "none",
            padding: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <img src="/photo/right-arrow.png" width="18px" height="18px" />
        </button>
        <div
          className="d-flex flex-nowrap p-5"
          style={{
            display: "flex",
            transform: `translateX(${cardPosition}%)`,
            transition: "transform 1s ease",
          }}
        >
          <div
            className="card mx-2"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/Mercy1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">discount-module</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Web application for buying clothes You can add products to the
                cart and can add discounts.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/1" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/Income1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title" style={{ whiteSpace: "normal" }}>
                Income and Expense Recording
              </h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Web application for recording daily income and expenses.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/2" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2
"
            style={{
              minWidth: "400px",

              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/intern1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">Time Tracking (Intern SCB)</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Feature My Team - feature for direct managers to effortlessly
                monitor the progress of their team members
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/3" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>

          <div
            className="card mx-2"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/HackerRank-logo.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">HackerRank</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Learn programming skills.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/4" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2
"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/kumsub1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">KUMSUB</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Language translation web application That will show the meaning
                and picture of the searched word.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/5" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2
"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/hotel1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title" style={{ whiteSpace: "normal" }}>
                Hotel-Booking(coming soon)
              </h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Web application for booking hotel rooms And for admins who want
                to add different types of rooms, study from YouTube.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/6" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2
"
            style={{
              minWidth: "400px",

              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/fairy1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">Fairy</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Web application for selling clothes
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/7" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>

          <div
            className="card mx-2"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/combuy1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">combuy</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                web application Selling computer equipment
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/8" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
          <div
            className="card mx-2"
            style={{
              minWidth: "400px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "10px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="/photo/threeJs1.png"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">Model & Threejs</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Project to create a model and use threejs to create a 3D
                website.
              </p>
            </div>
            <div className="pt-4">
              <a href="/works/9" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
