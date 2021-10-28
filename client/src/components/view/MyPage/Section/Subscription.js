import React, { useEffect, useState } from "react";
import Description from "./Description";
import Payment from "./Payment";
import person from "../../../images/person.png";
import net from "../../../images/net.png";
import home from "../../../images/home.png";
import Axios from "axios";

function Subscription(props) {
  const [purpose, setPurpose] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <div>
      <span
        className="title"
        style={{ fontSize: "30px", margin: "0 auto", display: "table" }}
      >
        {/* 요금제 선택 */}
      </span>
      <div className="subscribe">
        <label
          className="label"
          for="personal"
          style={{ width: "-webkit-fill-available" }}
        >
          <input
            type="radio"
            id="personal"
            name="purpose"
            onClick={() => {
              setPurpose(0);
              setPrice(0);
            }}
          />
          <div className="usePurpose">
            <center>
              <div>
                <img
                  src={person}
                  height="60px"
                  alt="personal"
                  className="icon"
                />
                <div className="purpose">개인용</div>
                <span className="price">무료</span>
                <br />
              </div>
              <div className="explain">
                1인 사용 가능 <br />
              </div>
            </center>
          </div>
        </label>
        <label
          className="label"
          for="family"
          style={{ width: "-webkit-fill-available" }}
        >
          <input
            type="radio"
            id="family"
            name="purpose"
            onClick={() => {
              setPurpose(1);
              setPrice(100);
            }}
          />
          <div className="usePurpose">
            <center>
              <img src={home} height="60px" alt="family" className="icon" />
              <div>
                <div className="purpose">
                  가족용
                  <br />
                  <span className="price">100원 / 월 </span>
                </div>
              </div>
              <div className="explain"> · 1~6인 관리 가능</div>
            </center>
          </div>
        </label>
        <label
          className="label"
          for="institute"
          style={{ width: "-webkit-fill-available" }}
        >
          <input
            type="radio"
            name="purpose"
            id="institute"
            onClick={() => {
              setPurpose(2);
              setPrice(200);
            }}
          />
          <div className="usePurpose">
            <center>
              <img src={net} height="60px" className="icon" alt="institute" />
              <div className="purpose">
                기관용
                <br />
                <span className="price">200원 / 월 </span>
              </div>
              <div className="explain">
                ~60인 사용 가능<br></br>월 3회 상담 무료{" "}
              </div>
              <div></div>
            </center>
          </div>
        </label>
      </div>
      {/* <div
        className="basicBox"
        style={{
          margin: "10px auto",
          border: "1px solid #d2d2d2",
        }}
      >
        <Description purpose={purpose} subscription={props.Subscription} />
      </div> */}
      <div className="payBox" style={{ margin: "30px auto" }}>
        {" "}
        <div className="payInfo">
          <div className="payInfoAlert">
            * 가족용, 기관용은 개발되지 않은 상태입니다. <br />* 결제금액은
            결제일 자정에 환불처리됩니다.
          </div>
          <Payment price={price} purpose={purpose} />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
