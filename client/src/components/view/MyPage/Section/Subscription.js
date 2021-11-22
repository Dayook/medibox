import React, { useState } from "react";
import Payment from "./Payment";
import person from "../../../images/person.png";
import net from "../../../images/net.png";
import home from "../../../images/home.png";
import Axios from "axios";

function Subscription(props) {
  const [purpose, setPurpose] = useState(0);
  const [price, setPrice] = useState(0);

  const subscribeInfo = [
    {
      title: "personal",
      purpose: "개인용",
      index: 0,
      priceInfo: " 무료",

      price: 0,
      desc: "1인 사용 가능",
      image: { person },
    },
    {
      title: "family",
      purpose: "가족용",
      priceInfo: " 100원 / 월",
      index: 1,
      price: 100,
      desc: " 1~6인 관리 가능",
      image: { home },
    },
    {
      title: "institute",
      purpose: "기관용",
      index: 2,
      priceInfo: " 200원 / 월",
      price: 200,
      desc: "~60인 관리 가능 ",
      image: { net },
    },
  ];

  const subsInfoDiv = subscribeInfo.map((subs, index) => {
    return (
      <label
        className="label"
        for={subs.title}
        style={{ width: "-webkit-fill-available" }}
      >
        <input
          type="radio"
          id={subs.title}
          name="purpose"
          onClick={() => {
            setPurpose(subs.index);
            setPrice(subs.price);
          }}
        />
        <div className="usePurpose">
          <center>
            <div>
              {/* {subs.image} */}
              <img
                src={Object.values(subs.image)}
                // src={require(`../../../images/net.png`)}
                height="60px"
                alt={subs.title}
                className="icon"
              />
              <div className="purpose">{subs.purpose}</div>
              <span className="price">{subs.priceInfo}</span>
              <br />
            </div>
            <div className="explain">
              {subs.desc} <br />
            </div>
          </center>
        </div>
      </label>
    );
  });

  return (
    <div>
      <span
        className="title"
        style={{ fontSize: "30px", margin: "0 auto", display: "table" }}
      >
        {/* 요금제 선택 */}
      </span>
      <div className="subscribe">
        {subsInfoDiv}

      </div>
      <div className="payBox" style={{ margin: "30px auto" }}>
        {" "}
        <div className="payInfo">
          <div className="payInfoAlert">
            * 가족용, 기관용은 개발되지 않은 상태입니다. <br />
            {/* * 결제금액은
            결제일 자정에 환불처리됩니다. */}
            * 카카오페이 테스트 결제로 진행됩니다.
          </div>
          <Payment price={price} purpose={purpose} />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
