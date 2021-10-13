import React, { useEffect } from "react";
import axios from "axios";
import "./Sections/LandingPage.css";
import News from "./Sections/News";
import mockup from "../../images/phone-mockup.png";
import main1 from "../../images/main1.png";
import main2 from "../../images/main2.png";

export default function LandingPage() {
  useEffect(() => {
    axios.get("/api/user/logout").then((response) => {});
    return () => {};
  }, []);

  const onClickHandler = () => {
    alert("MEDIKIT START");
  };
  return (
    <div>
      <div className="main">
        <div className="copyright">
          내가 아프고 외로울 때면 <br></br> 누가 날 위로해주지?<br></br>
          <button className="main-btn" onClick={onClickHandler}>
            메디킷 시작하기
          </button>
          <img className="mockup" src={mockup} alt="mockup"></img>
        </div>
      </div>
      <div className="second-section">
        <div className="sectionContainer">
          <div className="sectionLeft">
            <img
              src={main1}
              className="subImage"
              height="300px"
              alt="register-pill"
            ></img>

            <img
              src={main2}
              className="subImage"
              height="300px"
              style={{ zIndex: "-2" }}
              alt="alert-pill"
            ></img>
          </div>
          <div className="sectionRight" style={{ display: "block" }}>
            <div style={{ fontSize: "40px" }}>
              01. <br />
              병원에서 기록하지 않는
              <br />
              <span style={{ fontWeight: "600" }}>비처방약까지 꼼꼼하게</span>
              <div>
                복용 시 주의사항을
                <br />
                의학 전문 데이터에 기반하여 알려드려요
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
