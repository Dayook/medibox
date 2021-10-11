import React, { useEffect, useState } from "react";
import Description from "./Description";
import Payment from "./Payment";
import Axios from "axios";

function Subscription() {
  const [Subscription, setSubscription] = useState(0);
  // useEffect(() => {
  //   const variable = {
  //     user: localStorage.getItem("userId"),
  //   };
  //   Axios.post("/api/users/subscription", variable).then((response) => {
  //     if (response.data.success) {
  //       setSubscription(response.data.subscription.subscription);
  //       // setPurpose(response.data.subscription.subscription);
  //       // if (purpose === 0) {
  //       //   document.getElementById("personal").checked = true;
  //       // } else if (purpose === 1) {
  //       //   document.getElementById("family").checked = true;
  //       // } else if (purpose === 2) {
  //       //   document.getElementById("institute").checked = true;
  //       // }
  //       // document.getElementById("institute").checked = true;
  //       // setPurpose(response.data.subscription.subscription);
  //     } else {
  //       alert("실패");
  //     }
  //   });
  // });
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
              setPurpose(0);
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
              setPurpose(1);
              setPrice(100);
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
              setPurpose(2);
              setPrice(200);
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
        <Description purpose={purpose} subscription={Subscription} />
      </div>
      <div className="basicBox" style={{ width: "900px" }}>
        {" "}
        결제하기
        <div className="payInfo">
          <div>신용카드</div>
          <div>계좌이체</div>
          <div>카카오페이</div>

          <div>{price}원 결제</div>
          <Payment price={price} purpose={purpose} />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
