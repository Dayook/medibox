import React, { useEffect, useState } from "react";
import AddPill from "./AddPill";
import Pill from "./Pill";
import Axios from "axios";
import "./MyLog.css";

function MyLog(props) {
  const [today, setToday] = useState(new Date());
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + day;
  const variable = {
    user: localStorage.getItem("userId"),
  };
  const renderPills = props.MyLogInfo.map((log, index) => {
    const pillVariable = {
      id: log._id,
    };
    const handleClick = () => {
      alert("yuppp");
    };
    // alert(Date.parse(log.START_DATE - ) + "today" + Date.parse(today));
    if (
      log.user &&
      Date.parse(log.END_DATE) >= Date.parse(today) &&
      Date.parse(log.START_DATE) - 46400000 <= Date.parse(today)
    ) {
      return (
        <div className="medicineItem">
          <span className="itemName">{log.ITEM_NAME}</span>
          <br></br>
          <img
            src={log.IMG_SRC}
            alt="pill"
            style={{
              width: "-webkit-fill-available",
              crop: "50px",
              cursor: "pointer",
            }}
            onClick={handleClick}
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
        className="basicBox"
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
          {dateString}
          <h2>나의 처방전</h2>
        </center>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0 10px",
            margin: "0 5px",
            marginLeft: "10px",
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
