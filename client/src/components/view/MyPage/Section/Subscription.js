import React, { useEffect, useState } from "react";
import Description from "./Description";
import Payment from "./Payment";
import person from "../../../images/person.svg";
import net from "../../../images/net.svg";
import home from "../../../images/home.svg";
import Axios from "axios";

function Subscription(props) {
  const [purpose, setPurpose] = useState(0);
  const [price, setPrice] = useState(0);

  // const choosePurpose = (value) => {
  //   alert(value);
  //   if (value === "0") {
  //   }
  // };
  return (
    <div>
      <span
        className="title"
        style={{ fontSize: "30px", margin: "0 auto", display: "table" }}
      ></span>
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
                  height="70px"
                  alt="personal"
                  className="icon"
                  style={{ margin: "30px auto" }}
                />
              </div>
              <span className="purpose">개인용</span>
              <div>
                1인 사용 가능 <br />
                무료
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
              <img
                src={home}
                height="70px"
                alt="family"
                className="icon"
                style={{ margin: "30px auto" }}
              />
              <div>
                <span className="purpose">가족용</span>
                1~6인 관리 가능<br></br>
                100원
              </div>
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
              <img
                src={net}
                height="70px"
                className="icon"
                alt="institute"
                style={{ margin: "30px auto" }}
              />
              <span className="purpose">기관용</span>
              <div>
                ~60인 사용 가능<br></br>
                월 3회 상담 무료 <br />
                200원
              </div>
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
          <div>신용카드</div>
          <div>계좌이체</div>
          <div>카카오페이</div>

          <div className="priceInfo">{price}원 결제</div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              verticalAlign: "middle",
              alignContent: "center",
            }}
          >
            <div>{price}원</div> <Payment price={price} purpose={purpose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
