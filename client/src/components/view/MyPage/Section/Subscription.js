import React, { useState } from "react";

function Subscription() {
  const [purpose, setPurpose] = useState();
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
        개인 사용에 적합한 모델
        <div>
          1인의 의약품 복용과 상담내역을 관리할 수 있습니다. (상담료 별도)
        </div>
      </div>
      <div className="basicBox" style={{ width: "900px" }}>
        {" "}
        gg
      </div>
    </div>
  );
}

export default Subscription;
