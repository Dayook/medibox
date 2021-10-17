import React from "react";
import Axios from "axios";
import "./MyPage.css";

function Payment() {
  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp63642369");

    const data = {
      pg: "html5_inisis",
      // pg: "kakaopay",
      pay_method: "card",
      merchant_uid: "ORD" + new Date().getTime(),
      name: "메디킷 가족용 정기결제",
      amount: 100,
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
    <>
      <button className="payButton" onClick={onClickPayment}>
        결제하기
      </button>
    </>
  );
}

export default Payment;
