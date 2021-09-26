import React from "react";
import Pill from "./Pill";

function MyLog() {
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          width: "700px",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          margin: "0px auto",
          padding: "30px",
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",

          // -webkit-backdrop-filter: blur( 4px );
          // border-radius: 10px;
        }}
      >
        <h4>나의 약상자</h4>
        <br />
        <div style={{ display: "flex" }}>
          <Pill />
          <div
            style={{
              width: "180px",
              height: "180px",
              display: "flex",
              border: "1px solid #dedede",
              borderRadius: "10px",
              color: "#454545",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Icon type="plus" style={{ fontSize: "3rem" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLog;
