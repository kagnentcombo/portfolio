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
    const newPosition = cardPosition + 50;
    setCardPosition(Math.min(newPosition, maxPosition));
  };

  const handleScrollRight = () => {
    const minPosition = -2000; // 400 is the minimum width of each card, and 6 is the number of cards
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
    <div style={{ marginTop: "200px" }}>
      <div
        className="card-group"
        style={{
          overflowX: "hidden",
        }}
      >
        <div
          className="d-flex flex-nowrap "
          style={{
            transform: `translate(-0%, -0%) translateX(${cardPosition}%)`,
            transition: "transform 0.5s ease",
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231330976869646406/image.png?ex=66369155&is=66241c55&hm=71e45291e3b7a93a640491304376b384803c93e72140cc601aa87aa2aa5e86b4&=&format=webp&quality=lossless&width=1191&height=670"
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
              <a href="/work/1" className="btn btn-outline-info">
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

              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231876350542086194/image.png?ex=66388d41&is=66261841&hm=76e471d3a601bdd96024b00b2dcca10de5a8ffbabf944cc564edb1e143385916&=&format=webp&quality=lossless&width=1191&height=670"
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
              <a href="/work/2" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232232774899994696/1.png?ex=6628b5b3&is=66276433&hm=f79d83138cc87ced7b94ab1895ff5e7ee63a2bbc5244141e8253356f76d9cb29&=&format=webp&quality=lossless&width=1278&height=670"
                alt="Card image cap"
              />
            </div>

            <div className="card-body pt-4">
              <h5 className="card-title">Time Tracking (Intership)</h5>
              <hr />
              <p className="card-text" style={{ whiteSpace: "normal" }}>
                Feature My Team - feature for direct managers to effortlessly
                monitor the progress of their team members
              </p>
            </div>
            <div className="pt-4">
              <a href="/work/3" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1231999807468474429/image.png?ex=6627dcbb&is=66268b3b&hm=da5f49d665589b35bcccb29b546c1574f5f29e8eb57804e9709e0f0f8dbee735&=&format=webp&quality=lossless&width=1187&height=667"
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
              <a href="/work/4" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232057804894765197/image.png?ex=662812bf&is=6626c13f&hm=92fe7efa18802cc6b2a75987d654da238f2da597a9bf0d4eb03b2e383772d01b&=&format=webp&quality=lossless&width=1187&height=667"
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
              <a href="/work/5" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232065595927691315/image.png?ex=66281a00&is=6626c880&hm=0c7c1cf4de15ac691aaffd57de5f7b28584d4ac4f48395b7fc35c351da2712fe&=&format=webp&quality=lossless&width=1187&height=667"
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
              <a href="/work/6" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232066894048137237/image.png?ex=66281b36&is=6626c9b6&hm=6b6fe8f96a330ab6ac8cf0c83c953f3f40f79930bd4a89b5a0915fa83d1f7cbf&=&format=webp&quality=lossless&width=1187&height=667"
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
              <a href="/work/7" className="btn btn-outline-info">
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
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          >
            <div>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232002622299308063/image.png?ex=6627df5a&is=66268dda&hm=33a82e1d562a2130adcf0a600191465afcb849eceefa5a068d6792ee82169bc3&=&format=webp&quality=lossless&width=1187&height=667"
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
              <a href="/work/8" className="btn btn-outline-info">
                details
              </a>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Page;
