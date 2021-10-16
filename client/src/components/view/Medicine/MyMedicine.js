import Axios from "axios";
import React, { useEffect, useState } from "react";
import MyCalendar from "./Section/MyCalendar/MyCalendar";
import MyLog from "./Section/MyLog/MyLog";
import Banner from "./Section/Banner";

function MyMedicine() {
  const [today, setToday] = useState(new Date());
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

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
    <div style={{ backgroundColor: "#fcfcfc" }}>
      <div
        className="container"
        style={{
          width: "65vw",
          margin: "0 auto",
        }}
      >
        <Banner />
        <MyLog
          MyLogInfo={MyLogInfo}
          setChanged={setChanged}
          Changed={Changed}
          style={{ padding: " 100px" }}
          today={today}
          setToday={setToday}
        />
        <MyCalendar
          MyLogInfo={MyLogInfo}
          style={{ padding: "100px 0px", height: "900px" }}
          setToday={setToday}
        ></MyCalendar>
      </div>
    </div>
  );
}

export default MyMedicine;
