import Axios from "axios";
import React, { useEffect, useState } from "react";
import MyCalendar from "./MyCalendar";
import MyLog from "./MyLog/MyLog";

function MyMedicine() {
  const variable = {
    user: localStorage.getItem("userId"),
  };
  let [Changed, setChanged] = useState(false);
  const [MyLogInfo, setMyLogInfo] = useState([]);

  useEffect(() => {
    Axios.post("/api/medicines/myLog", variable).then((response) => {
      if (response.data.success) {
        setMyLogInfo(response.data.myLog);
      } else {
        alert("fail to load Log data");
      }
    });
  }, [Changed]);

  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <div
        className="container"
        style={{
          width: "1100px",
          margin: "0 auto",
        }}
      >
        <MyLog
          MyLogInfo={MyLogInfo}
          setChanged={setChanged}
          Changed={Changed}
          style={{ padding: " 100px" }}
        />
        <MyCalendar
          MyLogInfo={MyLogInfo}
          style={{ padding: "100px 0px" }}
        ></MyCalendar>
      </div>
    </div>
  );
}

export default MyMedicine;
