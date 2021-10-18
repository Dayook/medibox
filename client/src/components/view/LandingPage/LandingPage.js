import React, { useEffect } from "react";
import axios from "axios";
import "./Sections/LandingPage.css";
import News from "./Sections/News";
import mockup from "../../images/phone-mockup.png";
import main1 from "../../images/main1.png";
import main2 from "../../images/main2.png";
import main3 from "../../images/main3.png";

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
        <div className="container">
          <div className="copyright">
            내가 먹는 약 <br /> <span>제대로 알고 먹기</span>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "300",
                lineHeight: "1.5em",
                marginTop: "10px",
              }}
            >
              손쉽게 약사와 상담하고
              <br />
              복용중인 약을 관리해보세요
            </div>
            {/* <button className="main-btn" onClick={onClickHandler}>
            메디킷 시작하기
          </button> */}
            <img className="mockup" src={mockup} alt="mockup"></img>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="sectionContainer">
          <div className="sectionLeft">
            <div style={{ position: "relative" }}>
              <img
                src={main1}
                className="subImage"
                height="320px"
                // position="absolute"
                style={{ position: "relative", left: "0px", top: "-10px" }}
                alt="register-pill"
              ></img>

              <img
                src={main2}
                className="subImage"
                height="320px"
                style={{
                  position: "absolute",
                  left: "140px",
                  top: "130px",
                  zIndex: "3",
                }}
                alt="alert-pill"
              ></img>
            </div>
          </div>
          <div className="sectionRight">
            <div style={{ fontSize: "40px", margin: "0 0 0 60px" }}>
              <span className="accent">01. </span>
              <br />
              병원에서 기록하지 않는
              <br />
              <span style={{ fontWeight: "600" }}>비처방약까지 꼼꼼하게</span>
              <div className="subText">
                <br />
                복용 시 주의사항을
                <br />
                <span style={{ fontWeight: "550" }}>
                  의학 전문 데이터에 기반하여 알려드려요
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section" style={{ backgroundColor: "aliceblue" }}>
        <div className="sectionContainer">
          <div className="sectionLeft">
            <img
              src={main3}
              className="subImage"
              height="350px"
              alt="register-pill"
            ></img>
          </div>
          <div className="sectionRight" style={{ display: "block" }}>
            <div style={{ fontSize: "40px", margin: "0 0 0 60px" }}>
              <span className="accent">02. </span>
              <br />
              어떤 약을 얼만큼?
              <br />
              <span style={{ fontWeight: "600" }}>의약품 달력으로</span>
              <br />한 눈에 알 수 있도록
              <div className="subText">
                <br />
                <span style={{ fontWeight: "550" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
