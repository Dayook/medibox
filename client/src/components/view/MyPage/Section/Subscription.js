import React, { useState } from "react";
import Description from "./Description";

function Subscription() {
  const [purpose, setPurpose] = useState();
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
      >
        구독정보
      </span>
      <div style={{ display: "flex", margin: "0 auto", width: "900px" }}>
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
              setPurpose("personal");
            }}
          />
          <div className="usePurpose">
            <span className="purpose">개인용</span>
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
              setPurpose("family");
              setPrice(50);
            }}
          />
          <div className="usePurpose">
            <span className="purpose">가족용</span>
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
              setPurpose("institute");
              setPrice(60);
            }}
          />
          <div className="usePurpose">
            <span className="purpose">기관용</span>
          </div>
        </label>
      </div>
      <div
        className="basicBox"
        style={{
          width: "900px",
          margin: "10px auto",
          border: "1px solid #d2d2d2",
        }}
      >
        <Description purpose={purpose} />
      </div>
      <div className="basicBox" style={{ width: "900px" }}>
        {" "}
        결제하기
        <div className="payInfo">
          <div>신용카드</div>
          <div>계좌이체</div>
          <div>카카오페이</div>

          <div>{price}원 결제</div>
          <div>결제하기</div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
