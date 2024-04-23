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
                src="https://media.discordapp.net/attachments/817260455960510464/1232232774899994696/1.png?ex=6628b5b3&is=66276433&hm=f79d83138cc87ced7b94ab1895ff5e7ee63a2bbc5244141e8253356f76d9cb29&=&format=webp&quality=lossless&width=1278&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">My team page</h5>
                <hr />
                <p>
                  Select the time period you want to check. <br />
                  Select Filter to search for the desired employee.
                  <br />
                  Select to check individual information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232237313065615401/myteamdetail.png?ex=6628b9ed&is=6627686d&hm=15046344745647a2f59b24cb418fe295329295f28c03158fa321bd779274ddb1&=&format=webp&quality=lossless&width=1383&height=562"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">My team details page</h5>
                <hr />
                <p>Displays the time sheet of the selected employee.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-4">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                style={{ width: "300px" }}
                src="https://media.discordapp.net/attachments/817260455960510464/1232234068964282388/MicrosoftTeams-image_1.png?ex=6628b6e7&is=66276567&hm=929e9c711c46a198bb0a36cb193b569b821d825f1912333d9bd0650537c1a519&=&format=webp&quality=lossless&width=278&height=670"
                alt="Card image cap"
              />

              <div className="card-body">
                <h5 className="card-title">Poster Time Tracking</h5>
                <hr />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ border: "none" }}>
              <img
                className="card-img-top"
                src="https://media.discordapp.net/attachments/817260455960510464/1232234068633063455/NATTAPON_NIMNU_Certification.jpg?ex=6628b6e7&is=66276567&hm=2817270d0d754cd74c15543f604523c591ba8770c906b6e94629f6805700277c&=&format=webp&width=1190&height=670"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Certificate</h5>
                <hr />
              </div>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default page;
