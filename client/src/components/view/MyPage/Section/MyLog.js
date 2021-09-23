import React from "react";
import Icon from "@ant-design/icons";

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
          border: "1px solid black",
          margin: "0px auto",
          padding: "30px",
        }}
      >
        나의 약상자
        <div
          style={{
            width: "180px",
            height: "180px",
            display: "flex",
            border: "1px solid #dedede",
            color: "#2e2e2e",
          }}
        >
          <Icon type="plus" style={{ fontSize: "3rem" }} />
        </div>
      </div>
    </div>
  );
}

export default MyLog;
