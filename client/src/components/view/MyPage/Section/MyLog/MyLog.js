import React, { useEffect, useState } from "react";
import AddPill from "./AddPill";
import Pill from "./Pill";
import Axios from "axios";

function MyLog() {
  const variable = {
    user: localStorage.getItem("userId"),
  };
  let [Changed, setChanged] = useState(false);
  const [MyLog, setMyLog] = useState([]);

  document.getElementsByClassName("delete").onClick = function () {
    alert("hi");
  };
  useEffect(() => {
    Axios.post("/api/medicines/myLog", variable).then((response) => {
      if (response.data.success) {
        setMyLog(response.data.myLog);
      } else {
        alert("fail to load Log data");
      }
    });
  }, [Changed]);

  const renderPills = MyLog.map((log, index) => {
    const pillVariable = {
      id: log._id,
    };
    if (log.user) {
      return (
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
          {log.ITEM_NAME}
          <br></br>
          <img
            src={log.IMG_SRC}
            alt="pill"
            style={{ width: "-webkit-fill-available", crop: "50px" }}
          />
          {log.QUANTITY}개
          <button
            className="delete"
            onClick={() => {
              Axios.post("/api/medicines/deleteLog", pillVariable).then(
                (response) => {
                  if (response.data.success) {
                    setChanged(!Changed);
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
          {/* <Pill /> */}
          {renderPills}
          <AddPill Changed={Changed} setChanged={setChanged} />
        </div>
      </div>
    </div>
  );
}

export default MyLog;
