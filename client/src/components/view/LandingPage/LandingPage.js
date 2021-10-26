import React, { useEffect } from "react";
import axios from "axios";
import "./Sections/LandingPage.css";
import News from "./Sections/News";
import mockup from "../../images/phone-mockup.png";
import main1 from "../../images/main1.png";
import main2 from "../../images/main2.png";
import main3 from "../../images/main3.png";
import pills from "../../images/pills.png";

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
            <button className="startBtn">
              <span style={{ fontWeight: 700 }}>메디킷</span> 시작
            </button>
            <div
              className="titleText"
              // style={{ fontFamily: "NanumSquareRound", fontWeight: "600" }}
            >
              내가 먹는 약 <br /> 제대로 알고 먹기
            </div>
            <div className="mainSubText" style={{}}>
              손쉽게 약사와 상담하고
              <br />
              복용중인 약을 관리해보세요
            </div>
            {/* <button className="main-btn" onClick={onClickHandler}>
            메디킷 시작하기
          </button> */}

            <img className="pills" src={pills} alt="pills"></img>
            <img className="mockup" src={mockup} alt="mockup"></img>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="sectionContainer">
          <div className="sectionLeft">
            <div className="imgDiv">
              <img src={main1} className="subImage" alt="register-pill"></img>
              <img src={main2} className="subImage" alt="alert-pill"></img>
              <div className="helper"></div>
            </div>
          </div>
          <div className="sectionRight">
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
      <div className="second-section" style={{ backgroundColor: "aliceblue" }}>
        <div className="sectionContainer">
          <div className="sectionLeft">
            <div className="imageContainer">
              <img src={main3} className="subImage2" alt="register-pill"></img>
            </div>
          </div>
          <div className="sectionRight" style={{ display: "block" }}>
            <span className="accent">02. </span>
            <br />
            어떤 약을 얼만큼?
            <br />
            <span style={{ fontWeight: "600" }}>의약품 달력으로</span>
            <br />
            <span style={{ fontWeight: "600" }}>한 눈에 알 수 있도록</span>
            <div className="subText">
              <br />
              <span style={{ fontWeight: "550" }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
