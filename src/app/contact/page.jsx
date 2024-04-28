import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const Page = () => {
  const popoverBottomMap = (
    <Popover id="popover-positioned-bottom" title="Popover bottom" style={{ padding: "5px", maxWidth: "200px" }}>
      <strong> Location:</strong> 888 Vibhavadi-Rangsit, Ladyao Subdistrict, Chatuchak District, Bangkok 10900
    </Popover>
  );
  const popoverRightTel = (
    <Popover id="popover-positioned-right" title="Popover right" style={{ padding: "5px", maxWidth: "200px" }}>
      <strong> Tel:</strong> 0648602968
    </Popover>
  );
  const popoverRightGmail = (
    <Popover id="popover-positioned-right" title="Popover right" style={{ padding: "5px", maxWidth: "200px" }}>
      <strong> Gmail:</strong> nattapon093kag@gmail.com
    </Popover>
  );

  return (
    <div style={{ marginTop: "250px", display: "flex", justifyContent: "center" }}>
      <div className="row mt-5" style={{ border: "solid 5px", padding: "10px", maxWidth: "100%" }}>
        <div className="container d-flex flex-column gap-4">
          <div>
            <a className="nav-link" href="https://github.com/kagnentcombo">
              <img src="/photo/github.png" style={{ width: "36px", height: "36px" }} alt="GitHub" />
            </a>
          </div>
          <div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverRightGmail}>
              <Button style={{ backgroundColor: 'transparent', border: "0", padding: "0" }}>
                <img src="/photo/gmail.png" style={{ width: "36px", height: "36px" }} alt="Gmail" />
              </Button>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottomMap}>
              <Button style={{ backgroundColor: 'transparent', border: "0", padding: "0" }}>
                <img src="/photo/pin.png" style={{ width: "36px", height: "36px" }} alt="Location" />
              </Button>
            </OverlayTrigger>
          </div>
          <div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverRightTel}>
              <Button style={{ backgroundColor: 'transparent', border: "0", padding: "0" }}>
                <img src="/photo/phone-call.png" style={{ width: "36px", height: "36px" }} alt="Telephone" />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
