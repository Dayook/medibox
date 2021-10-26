import React, { useEffect } from "react";
import { Divider } from "antd";
import Axios from "axios";
import "./MyPage.css";

function Payment(props) {
  useEffect(() => {
    if (props.price === 0) {
      document.getElementById("payButton").style.backgroundColor = "#acacac";
      document.getElementById("payButton").disabled = "true";
      document.getElementById("payButton").onmouseover = () => {
        document.getElementById("payButton").style.cursor = "not-allowed";
      };
    } else {
      document.getElementById("payButton").style.backgroundColor = "";
      document.getElementById("payButton").removeAttribute("disabled");
      document.getElementById("payButton").onmouseover = () => {
        document.getElementById("payButton").style.cursor = "pointer";
      };
    }
  }, [props.price]);
  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp63642369");

    const data = {
      // pg: "html5_inisis",
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: "ORD" + new Date().getTime(),
      name: "메디킷" + props.purpose + "정기결제",
      amount: props.price,
      // customer_uid: "sohae1234",
      // buyer_email: "nyang@naver.com",
      // buyer_tel: "01022231107",
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;

    const variables = {
      user: localStorage.getItem("userId"),
      paid_amount: paid_amount,
      merchant_uid: merchant_uid,
      pay_method: pay_method,
    };
    console.log(variables);
    if (success) {
      alert("결제 성공");
      Axios.post("/api/payment/pay", variables).then((response) => {
        if (response.data.success) {
          alert("얍");
        } else {
          alert("Fail");
        }
      });
      //paid_amount, merchant_uid를 결제정보에 등록
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };
  return (
    <div>
      <Divider />
      <div>신용카드</div>
      <div>계좌이체</div>
      <div>카카오페이</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="priceInfo"></div>
        <button id="payButton" onClick={onClickPayment}>
          {props.price}원 결제
        </button>
      </div>
    </div>
  );
}

export default Payment;
