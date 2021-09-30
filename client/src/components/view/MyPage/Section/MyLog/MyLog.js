import React, { useEffect, useState } from "react";
import AddPill from "./AddPill";
import Pill from "./Pill";
import Axios from "axios";
import "./MyLog.css";

function MyLog(props) {
  const variable = {
    user: localStorage.getItem("userId"),
  };
  const renderPills = props.MyLogInfo.map((log, index) => {
    const pillVariable = {
      id: log._id,
    };
    if (log.user) {
      return (
        <div className="medicineBox">
          <span className="itemName">{log.ITEM_NAME}</span>
          <br></br>
          <img
            src={log.IMG_SRC}
            alt="pill"
            style={{ width: "-webkit-fill-available", crop: "50px" }}
          />
          <span className="quantity">{log.QUANTITY}개</span>
          <button
            className="delete"
            onClick={() => {
              Axios.post("/api/medicines/deleteLog", pillVariable).then(
                (response) => {
                  if (response.data.success) {
                    props.setChanged(!props.Changed);
                  } else {
                    alert("실패");
                  }
                }
              );
            }}
          >
            X
          </button>
        </div>
      );
    }
  });
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          width: "800px",
          borderRadius: "10px",
          border: "1.8px solid #2e2e2e",
          margin: "0px auto",
          padding: "30px",
          background: "rgba( 255, 255, 255, 0.85 )",
          // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",

          // -webkit-backdrop-filter: blur( 4px );
          // border-radius: 10px;
        }}
      >
        <center>
          <h2>나의 처방전</h2>
        </center>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          {renderPills}
          <AddPill
            Changed={props.Changed}
            setChanged={props.setChanged}
            MyLogInfo={props.MyLogInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default MyLog;
