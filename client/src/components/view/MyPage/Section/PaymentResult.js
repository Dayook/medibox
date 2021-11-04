import React from "react";
import Axios from "axios";
import "./MyPage.css";
// console.log("code: " + code);
function PaymentResult() {
  var search = window.location.search;
  var params = new URLSearchParams(search);
  var subscription = params.get("merchant_uid").slice(-1);
  var success = params.get("imp_success");
  const variables = {
    user: localStorage.getItem("userId"),
    subscription: subscription,
  };

  const returnHandler = () => {
    window.location.href = "/myPage";
  };
  if (success !== "false") {
    Axios.post("/api/payment/payResult", variables).then((response) => {
      if (response.data.success) {
      } else {
        alert("Fail");
      }
    });
    alert("h");
    setTimeout((window.location.href = window.location.host + "/myPage"), 300);

    return (
      <div className="payResult">
        <div>
          결제에 성공하였습니다.
          <br />
          3초 뒤 프로필 페이지로 이동합니다.{" "}
        </div>
      </div>
    );
  } else {
    var error = params.get("error_msg");
    return (
      <div className="payResult">
        <div>
          {" "}
          결제에 실패했습니다. <br />
          <br />
          {error}
          <br />
          <button id="returnButton" onClick={returnHandler}>
            돌아가기
          </button>
        </div>
      </div>
    );
  }
}

export default PaymentResult;
