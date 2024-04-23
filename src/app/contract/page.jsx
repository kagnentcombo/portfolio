import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const page = () => {
  const popoverRightMap = (
    <Popover id="popover-positioned-right" title="Popover right" style={{padding:"10px"}}>
      <strong> location:</strong> 888 Vibhavadi-Rangsit, Ladyao Subdistrict, Chatuchak District, Bangkok 10900
    </Popover>
  );
  const popoverRightTel = (
    <Popover id="popover-positioned-right" title="Popover right" style={{padding:"10px"}}>
      <strong> Tel:</strong> 0648602968
    </Popover>
  );
  const popoverRightGmail = (
    <Popover id="popover-positioned-right" title="Popover right" style={{padding:"10px"}}>
      <strong> Gmail:</strong> nattapon093kag@gmail.com
    </Popover>
  );
  
  return (
    <div
      style={{
        width: "100%",
        marginTop: "250px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="row justify-content-center mt-5"
        style={{
          maxWidth: "100px", // ปรับขนาดสูงสุดของเนื้อหา
          width: "100%",
          border:"solid 5px",
padding:"10px"
        }}
      >
        <div className="container-fluid d-flex flex-column gap-4">
          <div>
            <a className="nav-link" href="https://github.com/kagnentcombo">
              <img
                src="/photo/github.png"
                style={{ width: "48px", height: "48px" }}
              />
            </a>
          </div>
          <div>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={popoverRightGmail}
            >
              <Button style={{ backgroundColor: 'transparent',border:"0",padding:"0" }}>
                <img 
                  src="/photo/gmail.png"
                  style={{ width: "48px", height: "48px" }}
                />
              </Button>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={popoverRightMap}
            >
              <Button style={{ backgroundColor: 'transparent',border:"0",padding:"0" }}>
                <img 
                  src="/photo/pin.png"
                  style={{ width: "48px", height: "48px" }}
                />
              </Button>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={popoverRightTel}
            >
              <Button style={{ backgroundColor: 'transparent',border:"0",padding:"0" }}>
                <img 
                  src="/photo/phone-call.png"
                  style={{ width: "48px", height: "48px" }}
                />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
